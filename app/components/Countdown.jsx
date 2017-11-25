import React, { Component } from 'react';
import Clock from './Clock';

class Countdown extends Component {
  render() {
    return (
      <div>
        <Clock totalSeconds={66} />
      </div>
    );
  }
}

export default Countdown;
