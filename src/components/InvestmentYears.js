import React, { Component } from 'react';

class InvestmentYears extends Component {
  render() {
    return(
      <input
        name="investmentYears"
        type="number"
        placeholder="15"
        value={this.props.investmentYears}
        onChange={(e) => this.props.handleChange(e)}
      />
    );
  }
}

export default InvestmentYears;