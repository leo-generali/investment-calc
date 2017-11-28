import React, { Component } from 'react';

class ContributionInput extends Component {
  render() {
    return (
      <div>
        Contribution
        <input
          name="contribution"
          type="number"
          placeholder="Contribution"
          value={this.props.contribution}
          onChange={(e) => this.props.handleChange(e)}
        />
      </div>
    );
  }
}

export default ContributionInput;