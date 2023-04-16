import type { ReactTestRendererTreeFixed } from './types';
import { mapChildren } from './mapChildren';

describe('mapChildren', () => {
  it.each<ReactTestRendererTreeFixed['props']>([{}, { children: undefined }])(
    'return null if undefined',
    (props) => {
      expect(mapChildren(props)).toBe(null);
    }
  );

  it('returns one child', () => {
    expect(mapChildren({ children: 'div' })).toEqual(['div']);
  });

  it('returns more than one child', () => {
    expect(mapChildren({ children: ['div', 'p', 'span'] })).toEqual([
      'div',
      'p',
      'span',
    ]);
  });
});
