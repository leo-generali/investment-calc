import React, { Component } from 'react';

import { roundToHundreds } from '../helpers/math';

class Result extends Component {
  state = {
    yearlyTotalBalance: [],
    yearlyPrincipalValue: [],
    yearlyInterestValue: [],
  }
  componentWillReceiveProps(nextProps) {
    this.calculateYearlyValues(nextProps);
  }

  calculateYearlyValues(nextProps) {
    const yearlyTotalBalance = [],
          yearlyPrincipalValue = [],
          yearlyInterestValue = [];
    const calculatedInterestRate = (nextProps.interestRate / 100);

    for (let i = 0; i <= nextProps.investmentYears; i++) {
      const balVal = this.calculateYearlyValue(nextProps, i);
      const principalVal = this.calculatePrincipalFutureValue(nextProps.initialInvestment, calculatedInterestRate, i);
      const interestVal = this.calculateFutureValue(nextProps.contribution, calculatedInterestRate, i)
      yearlyTotalBalance.push(balVal);
      yearlyPrincipalValue.push(principalVal);
      yearlyInterestValue.push(interestVal);
    }

    this.setState({
      yearlyTotalBalance,
      yearlyPrincipalValue,
      yearlyInterestValue
    });
  }

  calculateYearlyValue(data, year) {
    const calculatedInterestRate = (data.interestRate / 100);
    const futureValuePrincipal = this.calculatePrincipalFutureValue(data.initialInvestment, calculatedInterestRate, year);
    const futureValue = this.calculateFutureValue(data.contribution, calculatedInterestRate, year);
    const totalValue = futureValuePrincipal + futureValue;
    return roundToHundreds(totalValue);
  }

  calculatePrincipalFutureValue(principal, interestRate, year) {
    const yearlyPrincipalValue = [];
    const value = Math.pow(interestRate + 1, year);
    return roundToHundreds(value * principal);
  }

  calculateFutureValue(contribution, interestRate, year) {
    // const periods = 12;
    const x = (Math.pow(1 + interestRate, year) - 1);
    const y = x / interestRate;
    const val = contribution * y;
    return roundToHundreds(val);
  }

  render() {
    const nums = this.state.yearlyTotalBalance.map((elem, i) => <p key={i}>{elem}</p>)

    return (
      <div>
        { nums }
      </div>
    );
  }
}

export default Result;