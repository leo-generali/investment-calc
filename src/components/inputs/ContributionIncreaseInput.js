import React, { Component } from 'react';

class ContributionIncreaseInput extends Component {
  render() {
    return (
      <div>
        Contribution Increase:
        <input
          name="contributionIncrease"
          type="number"
          placeholder="Contribution Increase"
          value={this.props.contributionIncrease}
          onChange={(e) => this.props.handleChange(e)}
        />
      </div>
    );
  }
}

export default ContributionIncreaseInput;
