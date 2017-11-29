import React, { Component } from 'react';

class Controls extends Component {
  static propTypes = {
    status: React.PropTypes.string.isRequired,
    onStatusChange: React.PropTypes.func.isRequired,
  }

  onStatusChange = (newStatus) => {
    return () => {
      this.props.onStatusChange(newStatus);
    }
  }
  render() {
    const { status } = this.props;
    const renderStartStopButton = () => {
      if (status === 'started') {
        return (
          <button
            className="button secondary"
            onClick={this.onStatusChange('paused')}>Pause</button>
        );
      } else if (status != 'started') {
        return (
          <button
            className="button primary"
            onClick={this.onStatusChange('started')}>Start</button>
        );
      }
    }
    return (
      <div className="controls">
        {renderStartStopButton()}
        <button
          className="button alert hollow"
          onClick={this.onStatusChange('stopped')}>Clear</button>
      </div>
    );
  }
}

export default Controls;