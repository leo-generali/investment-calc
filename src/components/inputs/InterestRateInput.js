import React, { Component } from 'react';

class InterestRateInput extends Component {
  render() {
    return(
      <input
        name="interestRate"
        type="number"
        placeholder="0"
        value={this.props.interestRate}
        onChange={(e) => this.props.handleChange(e)}
      />
    );
  }
}

export default InterestRateInput;