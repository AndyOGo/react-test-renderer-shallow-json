import { dive } from './dive';

describe('dive', () => {
  it('returns same depth for text nodes', () => {
    expect(dive('foo bar baz', 1)).toBe(1);
  });

  it('returns same depth for host components', () => {
    expect(
      dive(
        {
          nodeType: 'host',
          type: 'div',
          props: {},
          rendered: null,
        },
        1
      )
    ).toBe(1);
  });

  it('decrements depth for user components', () => {
    expect(
      dive(
        {
          nodeType: 'component',
          // eslint-disable-next-line @typescript-eslint/naming-convention
          type: function Foo() {
            return null;
          },
          props: {},
          rendered: null,
        },
        1
      )
    ).toBe(0);
  });
});
