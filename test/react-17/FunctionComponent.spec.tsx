import React from 'react';
import { create } from 'react-test-renderer';
import { shallowJSON } from '../../src';
import { Empty, Button, MyComponent } from './FunctionComponent';

describe('Empty', () => {
  it('matches snapshot', () => {
    expect(shallowJSON(create(<Empty />).toTree())).toMatchSnapshot();
  });
});

describe('MyComponent', () => {
  it('matches snapshot', () => {
    expect(shallowJSON(create(<MyComponent />).toTree())).toMatchSnapshot();
  });

  it('matches snapshot 2 level deep', () => {
    expect(shallowJSON(create(<MyComponent />).toTree(), 2)).toMatchSnapshot();
  });
});

describe('Button', () => {
  it('matches snapshot', () => {
    expect(
      shallowJSON(create(<Button onClick={jest.fn()} />).toTree())
    ).toMatchSnapshot();
  });
});
