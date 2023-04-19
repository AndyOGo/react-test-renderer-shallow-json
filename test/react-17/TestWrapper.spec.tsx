import React from 'react';
import { create } from 'react-test-renderer';
import { shallowJSON } from '../../src';
import { TestWrapper } from './TestWrapper';

describe('TestWrapper', () => {
  it.each<number>([1, 2])('matches snapshot with depth of %s', (depth) => {
    expect(
      shallowJSON(
        create(
          <TestWrapper>
            <div data-children>Children</div>
          </TestWrapper>
        ).toTree(), depth
      )
    ).toMatchSnapshot();
  });
});
