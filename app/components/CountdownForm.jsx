import React, { Component } from 'react';

class CountdownForm extends Component {
  onSubmit = (e) => {
    e.preventDefault();
    const strSec = this.refs.seconds.value;
    if (strSec.match(/^[0-9]*$/)) {
      this.refs.seconds.value = '';
      this.props.onSetCountdown(parseInt(strSec, 10));
    }
  }

  render() {
    return (
      <div>
        <form ref="form" onSubmit={this.onSubmit} className="countdown-form">
          <input type="text" ref="seconds" placeholder="Enter seconds" />
          <button className="button expanded">Start</button>
        </form>
      </div>
    );
  }

}

export default CountdownForm;