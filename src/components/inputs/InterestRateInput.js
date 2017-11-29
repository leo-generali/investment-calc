import React, { Component } from 'react';

class InterestRateInput extends Component {
  render() {
    return(
      <div>
<<<<<<< HEAD
        Interest Rate
=======
        Interest Rate:
>>>>>>> bd0df5ca035a4b04495bd161ebdaf9d603ce312b
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