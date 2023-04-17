import type { ReactTestRendererTreeFixed } from './types';
import { FakeFunctionComponent, FakeClassComponent } from './test-utils';
import { mapTree } from './mapTree';

describe('mapTree', () => {
  it('returns text nodes', () => {
    expect(mapTree('foo bar')).toBe('foo bar');
  });

  it('returns host component', () => {
    expect(
      mapTree({
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
      mapTree({
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
      mapTree({
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
    expect(mapTree(child)).toHaveProperty(
      '$$typeof',
      Symbol.for('react.test.json')
    );
  });

  it('renders tree if depth greater 0', () => {
    expect(
      mapTree(
        {
          nodeType: 'host',
          type: 'div',
          props: {},
          rendered: {
            nodeType: 'host',
            type: 'div',
            props: {},
            rendered: null,
          },
        },
        1
      )
    ).toEqual({
      type: 'div',
      props: {},
      children: [
        {
          type: 'div',
          props: {},
          children: null,
        },
      ],
    });
  });

  it('renders children if depth is 0', () => {
    expect(
      mapTree(
        {
          nodeType: 'host',
          type: 'div',
          props: {},
          rendered: {
            nodeType: 'host',
            type: 'div',
            props: {},
            rendered: null,
          },
        },
        0
      )
    ).toEqual({
      type: 'div',
      props: {},
      children: null,
    });
  });
});
