import React from 'react';
import { create } from 'react-test-renderer';
import { shallowJSON } from '../../src';

describe('HostComponent', () => {
  it('matches self-closing snapshot', () => {
    expect(shallowJSON(create(<div />).toTree())).toMatchSnapshot();
  });

  it('matches self-closing snapshot with prop', () => {
    expect(
      shallowJSON(create(<div className="foo" />).toTree())
    ).toMatchSnapshot();
  });

  it('matches self-closing snapshot with props', () => {
    expect(
      shallowJSON(create(<div className="foo" title="title" />).toTree())
    ).toMatchSnapshot();
  });

  it('matches self-closing snapshot with click handler', () => {
    expect(
      shallowJSON(create(<button onClick={jest.fn()} />).toTree())
    ).toMatchSnapshot();
  });

  it('matches snapshot with text', () => {
    expect(
      shallowJSON(create(<div>lorem ipsum</div>).toTree())
    ).toMatchSnapshot();
  });

  it('matches snapshot with text and with prop', () => {
    expect(
      shallowJSON(create(<div className="foo">lorem ipsum</div>).toTree())
    ).toMatchSnapshot();
  });

  it('matches snapshot with text and with props', () => {
    expect(
      shallowJSON(
        create(
          <div className="foo" title="title">
            lorem ipsum
          </div>
        ).toTree()
      )
    ).toMatchSnapshot();
  });

  it('matches snapshot with children', () => {
    expect(
      shallowJSON(
        create(
          <div className="foo">
            <h1>heading</h1>
            <div>
              <p>lorem ipsum</p>
            </div>
            <button type="button" onClick={jest.fn()}>
              Click me
            </button>
          </div>
        ).toTree()
      )
    ).toMatchSnapshot();
  });
});
