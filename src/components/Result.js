import React, { Component } from 'react';

import { roundToHundreds } from '../helpers/math';

class Result extends Component {
  constructor(props) {
    super(props);

  }

  state = {
    yearlyTotalBalance: []
  }
  componentWillReceiveProps(nextProps) {
    this.calculateYearlyValues(nextProps);
  }

  calculateYearlyValues(nextProps) {
    const yearlyTotalBalance = [];

    for (let i = 0; i <= nextProps.investmentYears; i++) {
      const val = this.calculateYearlyValue(nextProps, i);
      yearlyTotalBalance.push(val);
    }

    this.setState({ yearlyTotalBalance });
  }

  // calculateYearlyValue(data, year) {
  //   let yearlyValue = 0;
  //   yearlyValue += data.contribution * year;
  //   return yearlyValue;
  // }

  calculateYearlyValue(data, year) {
    const calculatedInterestRate = (data.interestRate / 100);
    const futureValuePrincipal = this.calculatePrincipalFutureValue(data.initialInvestment, calculatedInterestRate, year);
    const futureValue = this.calculateFutureValue(data.contribution, calculatedInterestRate, year);
    const totalValue = futureValuePrincipal + futureValue;
    return roundToHundreds(totalValue);
  }

  calculatePrincipalFutureValue(principal, interestRate, year) {
    const value = Math.pow(interestRate + 1, year);
    return value * principal;
  }

  calculateFutureValue(contribution, interestRate, year) {
    const periods = 12;
    let x = (Math.pow(1 + interestRate, year) - 1);
    let y = x / interestRate;
    let val = contribution * y;
    return val;
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