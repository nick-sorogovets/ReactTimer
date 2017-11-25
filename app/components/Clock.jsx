import React, { Component } from 'react';

class Clock extends Component {
  static propTypes = {
    totalSeconds: React.PropTypes.number,
  }

  static get defaultProps() {
    return {
      totalSeconds: 0,
    };
  }

  formatSeconds(totalSeconds) {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60
    return `${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
  }
  render() {
    const { totalSeconds } = this.props;
    return (
      <div className="clock">
        <span className="clock-text">
          {this.formatSeconds(totalSeconds)}
        </span>
      </div>
    );
  }
}

export default Clock;