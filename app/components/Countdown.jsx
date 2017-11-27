import React, { Component } from 'react';

import Clock from 'Clock';
import CountdownForm from 'CountdownForm'
import Controls from 'Controls';

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
          this.setState({ count: 0 });
        case 'paused':
          clearInterval(this.timer);
          this.timer = undefined;
          break;
        default:
          break;
      }
    }
  }

  startTimer() {
    this.timer = setInterval(() => {
      const newCount = this.state.count - 1;
      if (newCount === 0) {
        this.setState({ countdownStatus: 'stopped' });
      } else {
        this.setState({
          count: newCount >= 0 ? newCount : 0
        });
      }
    }, 1000);
  }

  handleSetCountdown = (seconds) => {
    this.setState({
      count: seconds,
      countdownStatus: 'started',
    });

  }

  handleStatusChange = (newStatus) => {
    this.setState({ countdownStatus: newStatus })
  }

  render() {
    const { count, countdownStatus } = this.state;
    const renderControls = () => {
      if (countdownStatus !== 'stopped') {
        return (
          <Controls countdownStatus={countdownStatus} onStatusChange={this.handleStatusChange} />
        );
      } else {
        return (
          <CountdownForm onSetCountdown={this.handleSetCountdown} />
        );
      }
    }
    return (
      <div>
        <Clock totalSeconds={count} />
        {renderControls()}
      </div>
    );
  }
}

export default Countdown;
