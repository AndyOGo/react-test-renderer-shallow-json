import type { ReactTestRendererTreeFixed } from './types';
import { FakeFunctionComponent, FakeClassComponent } from './test-utils';
import { shallowJSON } from './shallowJSON';

describe('shallowJSON', () => {
  it('return empty render', () => {
    expect(shallowJSON(null)).toBe(null);
  });

  it('returns host component', () => {
    expect(
      shallowJSON({
        nodeType: 'host',
        type: 'div',
        props: {},
        rendered: null,
      })
    ).toEqual({
      type: 'div',
      props: {},
      children: null,
    });
  });

  it('returns function component', () => {
    expect(
      shallowJSON({
        nodeType: 'component',
        type: FakeFunctionComponent,
        props: {},
        rendered: null,
      })
    ).toEqual({
      type: 'FakeFunctionComponent',
      props: {},
      children: null,
    });
  });

  it('returns class component', () => {
    expect(
      shallowJSON({
        nodeType: 'component',
        type: FakeClassComponent,
        props: {},
        rendered: null,
      })
    ).toEqual({
      type: 'FakeClassComponent',
      props: {},
      children: null,
    });
  });

  it.each<ReactTestRendererTreeFixed>([
    {
      nodeType: 'host',
      type: 'div',
      props: {},
      rendered: null,
    },
    {
      nodeType: 'component',
      type: FakeFunctionComponent,
      props: {},
      rendered: null,
    },
    {
      nodeType: 'component',
      type: FakeClassComponent,
      props: {},
      rendered: null,
    },
  ])('define `$$typeof` property', (child) => {
    expect(shallowJSON(child)).toHaveProperty(
      '$$typeof',
      Symbol.for('react.test.json')
    );
  });

  it('returns fragment components', () => {
    expect(
      shallowJSON([
        {
          nodeType: 'host',
          type: 'div',
          props: {},
          rendered: null,
        },
        {
          nodeType: 'component',
          type: FakeFunctionComponent,
          props: {},
          rendered: null,
        },
        {
          nodeType: 'component',
          type: FakeClassComponent,
          props: {},
          rendered: null,
        },
      ])
    ).toEqual([
      {
        type: 'div',
        props: {},
        children: null,
      },
      {
        type: 'FakeFunctionComponent',
        props: {},
        children: null,
      },
      {
        type: 'FakeClassComponent',
        props: {},
        children: null,
      },
    ]);
  });
});
