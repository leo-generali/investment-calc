import React, { Component } from 'react';

class InvestmentYearsInput extends Component {
  render() {
    return(
      <div>
<<<<<<< HEAD
        Investment Years
=======
        Years:
>>>>>>> bd0df5ca035a4b04495bd161ebdaf9d603ce312b
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