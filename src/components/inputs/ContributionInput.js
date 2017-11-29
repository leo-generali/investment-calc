import React, { Component } from 'react';

class ContributionInput extends Component {
  render() {
    return (
      <div>
<<<<<<< HEAD
        Contribution
        <input
          name="contribution"
          type="number"
          placeholder="Contribution"
=======
        Contribution:
        <input
          name="contribution"
          type="number"
          placeholder="Initial Investment"
>>>>>>> bd0df5ca035a4b04495bd161ebdaf9d603ce312b
          value={this.props.contribution}
          onChange={(e) => this.props.handleChange(e)}
        />
      </div>
    );
  }
}

<<<<<<< HEAD
export default ContributionInput;
=======
export default ContributionInput;
>>>>>>> bd0df5ca035a4b04495bd161ebdaf9d603ce312b
