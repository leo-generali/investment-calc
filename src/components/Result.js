import React, { Component } from 'react';

import { roundToHundreds } from '../helpers/math';

class Result extends Component {
  constructor(props) {
    super(props);

  }

  state = {
    yearlyInvestmentValues: []
  }
  componentWillReceiveProps(nextProps) {
<<<<<<< HEAD
    this.calculateTotalInvestmentValue(nextProps);
  }

  calculateTotalInvestmentValue(nextProps) {
    const yearlyInvestmentValues = [];

    for (let i = 0; i <= nextProps.investmentYears; i++) {
      let val = this.calculateYearlyValue(nextProps, i);
      yearlyInvestmentValues.push(<p key={i}>{val}</p>);
=======
    this.calculateYearlyValues(nextProps);
  }

  calculateYearlyValues(nextProps) {
    const yearlyInvestmentValue = [];

    for (let i = 0; i <= nextProps.investmentYears; i++) {
      const val = this.calculateYearlyValue(nextProps, i);
      yearlyInvestmentValue.push(val);
>>>>>>> bd0df5ca035a4b04495bd161ebdaf9d603ce312b
    }

    this.setState({ yearlyInvestmentValues });
  }

  calculateYearlyValue(data, year) {
    let yearlyValue = 0;
    yearlyValue += data.contribution * year;
    return yearlyValue;
  }

  calculateInterest(principal, interestRate) {
    const calculatedInterestRate = (interestRate / 100) + 1;
    console.log(calculatedInterestRate);
    return roundToHundreds(principal * interestRate);
  }

  calculateYearlyValue(data, year) {
    const futureValuePrincipal = this.calculatePrincipalFutureValue(data.initialInvestment, calculatedInterestRate, year);
    const futureValueInterest = this.calculateInterestFutureValue(data.initialInvestment, calculatedInterestRate, year);
    const totalValue = futureValuePrincipal + futureValueInterest;
    return roundToHundreds(futureValuePrincipal);
  }

  calculatePrincipalFutureValue(principal, interestRate, year) {
    // FV = PV(1 + r/m)mt
    const value = Math.pow(interestRate, year) ;
    return value * principal;
  }

  
  calculateInterestFutureValue(principal, interestRate, year) {
  }

  render() {
    const nums = this.state.yearlyInvestmentValue.map((elem, i) => <p key={i}>{elem}</p>)

    return (
      <div>
<<<<<<< HEAD
        { this.state.yearlyInvestmentValues }
=======
        { nums }
>>>>>>> bd0df5ca035a4b04495bd161ebdaf9d603ce312b
      </div>
    );
  }
}

export default Result;