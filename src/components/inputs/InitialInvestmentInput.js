import React, { Component } from 'react';

class InitialInvestmentInput extends Component {
  render() {
    return (
      <div>
<<<<<<< HEAD
        Initial Investment
=======
        Initial Investment:         
>>>>>>> bd0df5ca035a4b04495bd161ebdaf9d603ce312b
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
