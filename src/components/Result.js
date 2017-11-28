import React, { Component } from 'react';

class InvestmentYears extends Component {
  constructor(props) {
    super(props);

    this.state = {
      yearlyInvestmentValue: []
    }
  }

  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps);
    this.calculateYearlyValue(nextProps);
  }

  calculateYearlyValue(nextProps) {
    const initialInvestment = nextProps.initialInvestment;
    const investmentYears = nextProps.investmentYears;
    const interestRate = nextProps.interestRate;
    const yearlyInvestmentValue = [];

    for (let i = 0; i < investmentYears; i++) {
      yearlyInvestmentValue.push(<span>{initialInvestment}</span>);
    }

    this.setState({ yearlyInvestmentValue });
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