import { withReactTestSymbol } from './withReactTestSymbol';

describe('withReactTestSymbol', () => {
  it('defines `$$typeof` property', () => {
    expect(withReactTestSymbol({})).toHaveProperty(
      '$$typeof',
      Symbol.for('react.test.json')
    );
  });
});
