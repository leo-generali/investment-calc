import React, { Component } from 'react';

import { roundToHundreds } from '../helpers/math';

class InvestmentYears extends Component {
  constructor(props) {
    super(props);

    this.state = {
      yearlyInvestmentValue: []
    }
  }

  componentWillReceiveProps(nextProps) {
    this.calculateYearlyValues(nextProps);
  }

  calculateYearlyValues(nextProps) {
    const yearlyInvestmentValue = [];

    for (let i = 0; i <= nextProps.investmentYears; i++) {
      const val = this.calculateYearlyValue(nextProps, i);
      yearlyInvestmentValue.push(val);
    }

    this.setState({ yearlyInvestmentValue });
  }

  calculateYearlyValue(data, year) {
    const futureValuePrincipal = this.calculatePrincipalFutureValue(data.initialInvestment, calculatedInterestRate, year);
    const futureValueInterest = this.calculateInterestFutureValue(data.initialInvestment, calculatedInterestRate, year);
    const totalValue = futureValuePrincipal + futureValueInterest;
    return roundToHundreds(futureValuePrincipal);
  }

  calculatePrincipalFutureValue(principal, interestRate, year) {
    // FV = PV(1 + r/m)mt
    const value = Math.pow(interestRate, year) ;
    return value * principal;
  }

  
  calculateInterestFutureValue(principal, interestRate, year) {
  }

  render() {
    const nums = this.state.yearlyInvestmentValue.map((elem, i) => <p key={i}>{elem}</p>)

    return (
      <div>
        { nums }
      </div>
    );
  }
}

export default InvestmentYears;