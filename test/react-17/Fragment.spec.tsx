import React, { Fragment } from 'react';
import { create } from 'react-test-renderer';
import { shallowJSON } from '../../src';
import { TestWrapper } from './TestWrapper';

describe('Fragment', () => {
  it('matches snapshot', () => {
    expect(
      shallowJSON(
        create(
          <>
            <div />
            <TestWrapper />
          </>
        ).toTree()
      )
    ).toMatchSnapshot();
  });

  it('matches snapshot', () => {
    expect(
      shallowJSON(
        create(
          <Fragment>
            <div />
            <TestWrapper />
          </Fragment>
        ).toTree()
      )
    ).toMatchSnapshot();
  });

  it('matches snapshot as children', () => {
    expect(
      shallowJSON(
        create(
          <TestWrapper>
            <>
              <div />
              <TestWrapper />
            </>
          </TestWrapper>
        ).toTree()
      )
    ).toMatchSnapshot();
  });

  it('matches snapshot as children', () => {
    expect(
      shallowJSON(
        create(
          <TestWrapper>
            <Fragment>
              <div />
              <TestWrapper />
            </Fragment>
          </TestWrapper>
        ).toTree()
      )
    ).toMatchSnapshot();
  });
});
