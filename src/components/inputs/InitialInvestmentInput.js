import React, { Component } from 'react';

class InitialInvestmentInput extends Component {
  render() {
    return (
      <div>
        Initial Investment:
        <input
          name="initialInvestment"
          type="number"
          placeholder="Initial Investment"
          value={this.props.initialInvestment}
          onChange={(e) => this.props.handleChange(e)}
        />
      </div>
    );
  }
}

export default InitialInvestmentInput;
