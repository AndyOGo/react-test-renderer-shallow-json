import { getDisplayName } from './getDisplayName';
import { FakeFunctionComponent, FakeClassComponent } from './test-utils';

describe('getDisplayName', () => {
  it('returns display name of host components', () => {
    expect(getDisplayName('div')).toBe('div');
  });

  it('returns display name of function components', () => {
    expect(getDisplayName(FakeFunctionComponent)).toBe('FakeFunctionComponent');
  });

  it('returns display name of class components', () => {
    expect(getDisplayName(FakeClassComponent)).toBe('FakeClassComponent');
  });

  it('returns display name of exotic components', () => {
    expect(
      getDisplayName({
        $$typeof: Symbol.for('react.memo'),
        type: FakeFunctionComponent,
      })
    ).toBe('FakeFunctionComponent');
  });

  it('returns display name of named exotic components', () => {
    expect(
      getDisplayName({
        $$typeof: Symbol.for('react.memo'),
        displayName: 'MemoFakeFunctionComponent',
        type: FakeFunctionComponent,
      })
    ).toBe('MemoFakeFunctionComponent');
  });

  it('returns default fallback of anonymous components', () => {
    expect(
      getDisplayName(function () {
        return null;
      })
    ).toBe('???');
  });

  it('returns default fallback of anonymous components', () => {
    expect(
      getDisplayName(function () {
        return null;
      }, 'FALLBACK')
    ).toBe('FALLBACK');
  });
});
