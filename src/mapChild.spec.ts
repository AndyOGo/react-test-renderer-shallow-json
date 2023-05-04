import type { ReactTestRendererTreeChild } from './types';
import { FakeFunctionComponent, FakeClassComponent } from './test-utils';
import { mapChild } from './mapChild';

describe('mapChild', () => {
  it.each([null, undefined, true, false, 0, 1, '', 'foo'])(
    'returns primitive of %s',
    (primitive) => {
      expect(mapChild(primitive)).toBe(primitive);
    }
  );

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
      children: undefined,
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
      children: undefined,
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
      children: undefined,
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
      ref: '[REF]',
    },
    {
      type: FakeFunctionComponent,
      props: {},
      key: null,
      ref: '[REF]',
    },
    {
      type: FakeClassComponent,
      props: {},
      key: null,
      ref: '[REF]',
    },
  ])('define `ref` prop', (child) => {
    expect(mapChild(child)).toHaveProperty(
      'props',
      expect.objectContaining({
        ref: '[REF]',
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
