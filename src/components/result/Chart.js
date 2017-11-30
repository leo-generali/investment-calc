import React, { Component } from 'react';
import { VictoryBar } from 'victory';

import { StyleSheet, css } from 'aphrodite/no-important';

const data = [
  { quarter: 1, earnings: 13000 },
  { quarter: 2, earnings: 16500 },
  { quarter: 3, earnings: 14250 },
  { quarter: 4, earnings: 1000 }
];


class Chart extends Component {

  state = {
    data: {}
  };

  componentWillReceiveProps(nextProps) {
    const data = this.formatData(nextProps.yearlyTotalBalance);
    this.setState({
      data
    });
  }

  formatData(yearlyValues) {
    const data = [];
    const currentYear = parseInt(new Date().getFullYear());
    for(var i = 0; i < yearlyValues.length; i ++){
      const yearlyValue = {
        year: currentYear + i,
        balance: yearlyValues[i]
      }
      data.push(yearlyValue);
    }
    return data;
  }

  render() {
    return(
      <div className={css(styles.barChart)}>
        <VictoryBar
          data={this.state.data}
          x="year"
          y="balance"
        />
      </div>
    );
  }
}

const styles = StyleSheet.create({
  barChart: {
    width: '25%'
  }
});

export default Chart;