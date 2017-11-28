import React, { Component } from 'react';

//Styling
// import { colors, card } from '../styles/global';
// import { StyleSheet, css } from 'aphrodite/no-important';

// Components
import InitialInvestment from './components/InitialInvestment';
import InvestmentYears from './components/InvestmentYears';
import Result from './components/Result';


class App extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
  }

  state = {
    initialInvestment: 0,
    investmentYears: 0,
    yearlyInvestmentBalance: []
  }

  calculateYearlyInvestments(data) {
    console.log(data);
    const initialInvestment = data.initialInvestment;
    const investmentYears = data.investmentYears;
    const yearlyInvestmentBalance = [];

    for(let i = 0; i < investmentYears; i++) {
      yearlyInvestmentBalance.push(initialInvestment);
    }

    return yearlyInvestmentBalance;
  }

  handleChange(e) {
    const info = this.state;
    info[name] = value;
    const value = e.target.value;
    const name = e.target.name;
    const yearlyInvestmentBalance = this.calculateYearlyInvestments(info);

    this.setState({
      [name]: value,
      yearlyInvestmentBalance
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
        <Result
          yearlyInvestmentBalance={this.yearlyInvestmentBalance}
        />
      </main>
    );
  }
}

export default App;
