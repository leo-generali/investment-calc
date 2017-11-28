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
    this.calculateYearlyValue(nextProps);
  }

  calculateYearlyValue(nextProps) {
    const initialInvestment = nextProps.initialInvestment;
    const investmentYears = nextProps.investmentYears;
    const interestRate = nextProps.interestRate;
    const yearlyInvestmentValue = [];

    for (let i = 0; i <= investmentYears; i++) {
      const val = this.calculateCompoundInterest(initialInvestment, interestRate, i);
      yearlyInvestmentValue.push(<p key={i}>{val}</p>);
    }

    this.setState({ yearlyInvestmentValue });
  }

  calculateCompoundInterest(principal, interestRate, time) {
    const calculatedInterestRate = (interestRate / 100) + 1;
    const value = Math.pow(calculatedInterestRate, time);
    return roundToHundreds(value * principal);
  }

  render() {
    return (
      <div>
        {
          this.state.yearlyInvestmentValue
        }
      </div>
    );
  }
}

export default InvestmentYears;