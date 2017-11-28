import React, { Component } from 'react';

//Styling
// import { colors, card } from '../styles/global';
// import { StyleSheet, css } from 'aphrodite/no-important';

// Components
import InitialInvestmentInput from './components/inputs/InitialInvestmentInput';
import InvestmentYearsInput from './components/inputs/InvestmentYearsInput';
import InterestRateInput from './components/inputs/InterestRateInput';
import ContributionInput from './components/inputs/ContributionInput';

// Result
import Result from './components/Result';


class App extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
  }

  state = {
    initialInvestment: 0,
    investmentYears: 0,
    interestRate: 0,
    contribution: 0
  }

  handleChange(e) {
    const value = parseInt(e.target.value, 10);
    const name = e.target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <main>
        <InitialInvestmentInput
          initialInvestment={this.state.initialInvestment}
          handleChange={this.handleChange}
        />
        <InvestmentYearsInput
          investmentYears={this.state.investmentYears}
          handleChange={this.handleChange}
        />
        <InterestRateInput
          interestRate={this.state.interestRate}
          handleChange={this.handleChange}
        />
        <ContributionInput
          contribution={this.state.contribution}
          handleChange={this.handleChange}
        />
        <Result
          {...this.state}
        />
      </main>
    );
  }
}

export default App;
