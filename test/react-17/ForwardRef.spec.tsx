import React, { createRef } from 'react';
import { create } from 'react-test-renderer';
import { shallowJSON } from '../../src';
import { TestWrapper } from './TestWrapper';
import { FancyDiv, FancyDivArrow, FancyDivNamed, TestRef } from './ForwardRef';

describe('FancyDiv', () => {
  it('matches snapshot', () => {
    expect(
      shallowJSON(create(<FancyDiv ref={createRef()} />).toTree())
    ).toMatchSnapshot();
  });

  it('matches snapshot as children', () => {
    expect(
      shallowJSON(
        create(
          <TestWrapper>
            <FancyDiv ref={createRef()} />
          </TestWrapper>
        ).toTree()
      )
    ).toMatchSnapshot();
  });
});

describe('FancyDivArrow', () => {
  it('matches snapshot', () => {
    expect(
      shallowJSON(create(<FancyDivArrow ref={createRef()} />).toTree())
    ).toMatchSnapshot();
  });

  it('matches snapshot as children', () => {
    expect(
      shallowJSON(
        create(
          <TestWrapper>
            <FancyDivArrow ref={createRef()} />
          </TestWrapper>
        ).toTree()
      )
    ).toMatchSnapshot();
  });
});

describe('FancyDivNamed', () => {
  it('matches snapshot', () => {
    expect(
      shallowJSON(create(<FancyDivNamed ref={createRef()} />).toTree())
    ).toMatchSnapshot();
  });

  it('matches snapshot as children', () => {
    expect(
      shallowJSON(
        create(
          <TestWrapper>
            <FancyDivNamed ref={createRef()} />
          </TestWrapper>
        ).toTree()
      )
    ).toMatchSnapshot();
  });
});

describe('TestRef', () => {
  it('matches snapshot', () => {
    expect(shallowJSON(create(<TestRef />).toTree())).toMatchSnapshot();
  });

  it('matches snapshot as children', () => {
    expect(
      shallowJSON(
        create(
          <TestWrapper>
            <TestRef />
          </TestWrapper>
        ).toTree()
      )
    ).toMatchSnapshot();
  });
});
