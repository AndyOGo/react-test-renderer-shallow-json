import { mapProps } from './mapProps';

describe('mapProps', () => {
  it('removes children key', () => {
    expect(mapProps({ children: undefined, foo: 'bar' })).toEqual({
      foo: 'bar',
    });
  });
});
