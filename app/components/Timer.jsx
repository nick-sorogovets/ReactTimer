import React, { Component } from 'react';
import Controls from 'Controls';
import Clock from 'Clock';

class Timer extends Component {
  state = {
    count: 0,
    timerStatus: 'stopped',
  }

  componentDidUpdate(prevProps, prevState) {
    const currentStatus = this.state.timerStatus;
    if (currentStatus !== prevState.timerStatus) {
      switch (currentStatus) {
        case 'started':
          this.startTimer();
          break;
        case 'stopped':
          this.setState({ count: 0 })
        case 'paused':
          clearInterval(this.timer);
          this.timer = undefined;
          break;
      }
    }
  }

  handleStatusChange = (status) => {
    this.setState({ timerStatus: status });
  }

  startTimer() {
    this.timer = setInterval(() => {
      const count = this.state.count + 1;
      this.setState({ count });
    }, 1000);
  }

  render() {
    const { count, timerStatus } = this.state;
    return (
      <div>
        <h1 className="page-title">Timer App</h1>
        <Clock totalSeconds={count} />
        <Controls status={timerStatus} onStatusChange={this.handleStatusChange} />
      </div>
    );
  }
}

export default Timer;