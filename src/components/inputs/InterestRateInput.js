import React, { Component } from 'react';

class InterestRateInput extends Component {
  render() {
    return(
      <div>
        Interest Rate
        <input
          name="interestRate"
          type="number"
          placeholder="0"
          value={this.props.interestRate}
          onChange={(e) => this.props.handleChange(e)}
        />
      </div>
    );
  }
}

export default InterestRateInput;