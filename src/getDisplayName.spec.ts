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
    ).toBe('FakeFunctionComponent.Memo');
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

  it('returns display name of context components', () => {
    expect(
      getDisplayName({
        $$typeof: Symbol.for('react.context'),
        // eslint-disable-next-line @typescript-eslint/naming-convention
        _context: {},
      })
    ).toBe('Context.Consumer');

    expect(
      getDisplayName({
        $$typeof: Symbol.for('react.provider'),
        // eslint-disable-next-line @typescript-eslint/naming-convention
        _context: {},
      })
    ).toBe('Context.Provider');
  });

  it('returns display name of named exotic components', () => {
    expect(
      getDisplayName({
        $$typeof: Symbol.for('react.context'),
        // eslint-disable-next-line @typescript-eslint/naming-convention
        _context: {
          displayName: 'NamedContext',
        },
      })
    ).toBe('NamedContext.Consumer');

    expect(
      getDisplayName({
        $$typeof: Symbol.for('react.provider'),
        // eslint-disable-next-line @typescript-eslint/naming-convention
        _context: {
          displayName: 'NamedContext',
        },
      })
    ).toBe('NamedContext.Provider');
  });

  it('returns default fallback of anonymous components', () => {
    expect(
      getDisplayName(function () {
        return null;
      })
    ).toBe('UNDEFINED');
  });

  it('returns default fallback of anonymous components', () => {
    expect(
      getDisplayName(function () {
        return null;
      }, 'FALLBACK')
    ).toBe('FALLBACK');
  });

  it.each([[Symbol.for('react.fragment'), 'React.Fragment']])(
    'type of symbol %s returns display name %s',
    (symbol, displayName) => {
      expect(getDisplayName(symbol)).toBe(displayName);
    }
  );
});
