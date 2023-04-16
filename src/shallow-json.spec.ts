import { dive } from './shallow-json';

describe('shallow-json/dive', () => {
  it('returns same level for text nodes', () => {
    expect(dive('foo bar baz', 1)).toBe(1);
  });

  it('returns same level for host components', () => {
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

  it('decrements level for user components', () => {
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
