import React from 'react';
import { create } from 'react-test-renderer';
import { shallowJSON } from '../../src';
import {
  Context,
  ContextConsumer,
  ContextProvider,
  NamedContext,
  NamedContextConsumer,
  NamedContextProvider,
} from './Context';
import { TestWrapper } from './TestWrapper';

describe('Context', () => {
  it('matches snapshot', () => {
    expect(
      shallowJSON(
        create(
          <Context.Provider value="provided">
            <ContextConsumer />
          </Context.Provider>
        ).toTree()
      )
    ).toMatchSnapshot();
  });

  it('matches snapshot as children', () => {
    expect(
      shallowJSON(
        create(
          <TestWrapper>
            <Context.Provider value="provided">
              <ContextConsumer />
            </Context.Provider>
          </TestWrapper>
        ).toTree()
      )
    ).toMatchSnapshot();
  });
});

describe('ContextProvider', () => {
  it('matches snapshot', () => {
    expect(
      shallowJSON(
        create(
          <ContextProvider>
            <ContextConsumer />
          </ContextProvider>
        ).toTree(),
        { depth: 2 }
      )
    ).toMatchSnapshot();
  });

  it('matches snapshot as children', () => {
    expect(
      shallowJSON(
        create(
          <TestWrapper>
            <ContextProvider>
              <ContextConsumer />
            </ContextProvider>
          </TestWrapper>
        ).toTree()
      )
    ).toMatchSnapshot();
  });
});

describe('NamedContext', () => {
  it('matches snapshot', () => {
    expect(
      shallowJSON(
        create(
          <NamedContext.Provider value="provided">
            <NamedContextConsumer />
          </NamedContext.Provider>
        ).toTree()
      )
    ).toMatchSnapshot();
  });

  it('matches snapshot as children', () => {
    expect(
      shallowJSON(
        create(
          <TestWrapper>
            <NamedContext.Provider value="provided">
              <NamedContextConsumer />
            </NamedContext.Provider>
          </TestWrapper>
        ).toTree()
      )
    ).toMatchSnapshot();
  });
});

describe('NamedContextProvider', () => {
  it('matches snapshot', () => {
    expect(
      shallowJSON(
        create(
          <NamedContextProvider>
            <NamedContextConsumer />
          </NamedContextProvider>
        ).toTree(),
        { depth: 2 }
      )
    ).toMatchSnapshot();
  });

  it('matches snapshot as children', () => {
    expect(
      shallowJSON(
        create(
          <TestWrapper>
            <NamedContextProvider>
              <NamedContextConsumer />
            </NamedContextProvider>
          </TestWrapper>
        ).toTree()
      )
    ).toMatchSnapshot();
  });
});
