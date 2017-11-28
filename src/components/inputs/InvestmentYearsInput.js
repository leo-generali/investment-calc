import React, { Component } from 'react';

class InvestmentYearsInput extends Component {
  render() {
    return(
      <div>
        Investment Years
        <input
          name="investmentYears"
          type="number"
          placeholder="15"
          value={this.props.investmentYears}
          onChange={(e) => this.props.handleChange(e)}
        />
      </div>
    );
  }
}

export default InvestmentYearsInput;