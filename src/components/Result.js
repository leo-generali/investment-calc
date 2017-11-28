import React, { Component } from 'react';

import { roundToHundreds } from '../helpers/math';

class Result extends Component {
  constructor(props) {
    super(props);

  }

  state = {
    yearlyInvestmentValues: []
  }
  componentWillReceiveProps(nextProps) {
    this.calculateTotalInvestmentValue(nextProps);
  }

  calculateTotalInvestmentValue(nextProps) {
    const yearlyInvestmentValues = [];

    for (let i = 0; i <= nextProps.investmentYears; i++) {
      let val = this.calculateYearlyValue(nextProps, i);
      yearlyInvestmentValues.push(<p key={i}>{val}</p>);
    }

    this.setState({ yearlyInvestmentValues });
  }

  calculateYearlyValue(data, year) {
    let yearlyValue = 0;
    yearlyValue += data.contribution * year;
    return yearlyValue;
  }

  calculateInterest(principal, interestRate) {
    const calculatedInterestRate = (interestRate / 100) + 1;
    console.log(calculatedInterestRate);
    return roundToHundreds(principal * interestRate);
  }

  calculateCompoundInterest(principal, interestRate, time) {
    const calculatedInterestRate = (interestRate / 100) + 1;
    const value = Math.pow(calculatedInterestRate, time);
    return roundToHundreds(value * principal);
  }

  render() {
    return (
      <div>
        { this.state.yearlyInvestmentValues }
      </div>
    );
  }
}

export default Result;