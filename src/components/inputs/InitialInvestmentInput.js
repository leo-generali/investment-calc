import React, { Component } from 'react';

class InitialInvestmentInput extends Component {
  render() {
    return (
      <input
        name="initialInvestment"
        type="number"
        placeholder="Initial Investment"
        value={this.props.initialInvestment}
        onChange={(e) => this.props.handleChange(e)}
      />
    );
  }
}

export default InitialInvestmentInput;
