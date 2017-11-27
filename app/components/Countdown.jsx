import React, { Component } from 'react';
import Clock from './Clock';
import CountdownForm from './CountdownForm'

class Countdown extends Component {

  state = {
    count: 0,
    countdownStatus: 'stopped',
  }

  componentDidUpdate(prevProps, prevState) {
    const currStatus = this.state.countdownStatus;
    if (currStatus !== prevState.countdownStatus) {
      switch (currStatus) {
        case 'started':
          this.startTimer();
          break;
        case 'stopped':
          break;
      }
    }
  }

  startTimer() {
    this.timer = setInterval(() => {
      const newCount = this.state.count - 1;
      this.setState({
        count: newCount >= 0 ? newCount : 0
      });
    }, 1000);
  }

  handleSetCountdown = (seconds) => {
    this.setState({
      count: seconds,
      countdownStatus: 'started',
    });

  }

  render() {
    const { count } = this.state;
    return (
      <div>
        <Clock totalSeconds={count} />
        <CountdownForm onSetCountdown={this.handleSetCountdown} />
      </div>
    );
  }
}

export default Countdown;
