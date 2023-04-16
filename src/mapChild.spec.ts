import { FakeFunctionComponent, FakeClassComponent } from './test-utils';
import { mapChild } from './mapChild';

describe('mapChild', () => {
  it('retruns text nodes', () => {
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
});
