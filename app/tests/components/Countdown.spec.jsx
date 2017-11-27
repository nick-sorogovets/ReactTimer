import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import $ from 'jQuery';

const TestUtils = require('react-addons-test-utils');

import Countdown from 'Countdown';

describe('Countdown', () => {
  it('should exists', () => {
    expect(Countdown).toExist();
  });

  describe('handleSetCoundown', () => {
    it('should set state to started and count down', (done) => {
      const countdown = TestUtils.renderIntoDocument(<Countdown />);
      countdown.handleSetCountdown(10);

      expect(countdown.state.count).toBe(10);
      expect(countdown.state.countdownStatus).toBe('started');

      setTimeout(() => {
        expect(countdown.state.count).toBe(9);
        done();
      }, 1001);
    });

    it('should never set count less than zero', (done) => {
      const countdown = TestUtils.renderIntoDocument(<Countdown />);
      countdown.handleSetCountdown(1);

      setTimeout(() => {
        expect(countdown.state.count).toBe(0);
        done();
      }, 3001);
    });
  });
});