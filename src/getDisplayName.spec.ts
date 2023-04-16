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
});
