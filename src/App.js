import React, { Component } from 'react';

//Styling
// import { colors, card } from '../styles/global';
// import { StyleSheet, css } from 'aphrodite/no-important';

// Components
import InitialInvestment from './components/InitialInvestment';
import InvestmentYears from './components/InvestmentYears';


class App extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
  }

  state = {
    initialInvestment: "",
    investmentYears: 0,
    yearlyInvestmentBalance: []
  }

  handleChange(e) {
    const value = e.target.value;
    const name = e.target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <main>
        <InitialInvestment
          initialInvestment={this.state.initialInvestment}
          handleChange={this.handleChange}
        />
        <InvestmentYears
          investmentYears={this.state.investmentYears}
          handleChange={this.handleChange}
        />
      </main>
    );
  }
}

export default App;
