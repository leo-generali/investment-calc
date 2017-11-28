import React, { Component } from 'react';

class InvestmentYears extends Component {
  render() {
    return (
      <span>{this.props.yearlyInvestmentBalance}</span>
    );
  }
}

export default InvestmentYears;