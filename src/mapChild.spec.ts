import type { ReactTestRendererTreeChild } from './types';
import { FakeFunctionComponent, FakeClassComponent } from './test-utils';
import { mapChild } from './mapChild';

describe('mapChild', () => {
  it('returns text nodes', () => {
    expect(mapChild('foo bar')).toBe('foo bar');
  });

  it('returns host component', () => {
    expect(
      mapChild({
        type: 'div',
        props: {},
        key: null,
      })
    ).toEqual({
      type: 'div',
      props: {},
      children: null,
    });
  });

  it('returns function component', () => {
    expect(
      mapChild({
        type: FakeFunctionComponent,
        props: {},
        key: null,
      })
    ).toEqual({
      type: 'FakeFunctionComponent',
      props: {},
      children: null,
    });
  });

  it('returns class component', () => {
    expect(
      mapChild({
        type: FakeClassComponent,
        props: {},
        key: null,
      })
    ).toEqual({
      type: 'FakeClassComponent',
      props: {},
      children: null,
    });
  });

  it.each<ReactTestRendererTreeChild>([
    {
      type: 'div',
      props: {},
      key: '[KEY]',
    },
    {
      type: FakeFunctionComponent,
      props: {},
      key: '[KEY]',
    },
    {
      type: FakeClassComponent,
      props: {},
      key: '[KEY]',
    },
  ])('define `key` prop', (child) => {
    expect(mapChild(child)).toHaveProperty(
      'props',
      expect.objectContaining({
        key: '[KEY]',
      })
    );
  });

  it.each<ReactTestRendererTreeChild>([
    {
      type: 'div',
      props: {},
      key: null,
    },
    {
      type: FakeFunctionComponent,
      props: {},
      key: null,
    },
    {
      type: FakeClassComponent,
      props: {},
      key: null,
    },
  ])('define `$$typeof` property', (child) => {
    expect(mapChild(child)).toHaveProperty(
      '$$typeof',
      Symbol.for('react.test.json')
    );
  });
});
