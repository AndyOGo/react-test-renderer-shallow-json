import type { ComponentClass } from 'react';
import { getDisplayName } from './getDisplayName';

describe('getDisplayName', () => {
  it('returns display name of host components', () => {
    expect(getDisplayName('div')).toBe('div');
  });

  it('returns display name of function components', () => {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    function Foo() {
      return null;
    }

    expect(getDisplayName(Foo)).toBe('Foo');
  });

  it('returns display name of class components', () => {
    class Foo {
      static displayName: string;

      render() {
        return null;
      }
    }
    Foo.displayName = 'Foo';

    expect(getDisplayName(Foo as unknown as ComponentClass)).toBe('Foo');
  });
});
