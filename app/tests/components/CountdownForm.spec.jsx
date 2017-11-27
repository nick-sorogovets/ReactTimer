import expect, { createSpy } from 'expect';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import $ from 'jQuery';

import CountdownForm from 'CountdownForm';

describe('CountdownForm', () => {
  it('should exists', () => {
    expect(CountdownForm).toBeTruthy();
  });

  it('should call onSetCountdown if valid seconds entered', () => {
    const spy = createSpy();
    const countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy} />)
    const $el = $(ReactDOM.findDOMNode(countdownForm));

    countdownForm.refs.seconds.value = "109";
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toHaveBeenCalledWith(109);
  });

  it('should not call onSetCountdown if invalid seconds entered', () => {
    const spy = createSpy();
    const countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy} />)
    const $el = $(ReactDOM.findDOMNode(countdownForm));

    countdownForm.refs.seconds.value = "109b";
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toNotHaveBeenCalled();
  });
});