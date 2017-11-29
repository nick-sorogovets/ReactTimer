import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import $ from 'jQuery';

const TestUtils = require('react-addons-test-utils');

import Timer from 'Timer';

describe('Timer', () => {
  it('should exists', () => {
    expect(Timer).toExist();
  });

  it('should start timer on started status', (done) => {
    const timer = TestUtils.renderIntoDocument(<Timer />);
    timer.handleStatusChange('started');

    setTimeout(() => {
      expect(timer.state.count).toBe(1);
      expect(timer.state.timerStatus).toBe('started');
      done();
    }, 1001);
  });

  it('should pause timer on paused status', (done) => {
    const timer = TestUtils.renderIntoDocument(<Timer />);

    timer.setState({ count: 10 });
    timer.handleStatusChange('started');
    timer.handleStatusChange('paused');

    setTimeout(() => {    
      expect(timer.state.count).toBe(10);
      expect(timer.state.timerStatus).toBe('paused');
      done();
    }, 1001);
  });

  it('should reset count on stopped', (done) => {
    const timer = TestUtils.renderIntoDocument(<Timer />);
    timer.setState({count: 10});
    timer.handleStatusChange('started');

    setTimeout(() => {
      timer.handleStatusChange('stopped');
      expect(timer.state.count).toBe(0);
      expect(timer.state.timerStatus).toBe('stopped');
      done();
    }, 1001);
  });
})