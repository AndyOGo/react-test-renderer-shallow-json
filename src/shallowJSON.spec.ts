import type { ReactTestRendererTreeFixed } from './types';
import { mapTrees } from './mapTrees';
import { shallowJSON } from './shallowJSON';

jest.mock('./mapTrees', () => {
  const actual = jest.requireActual('./mapTrees');

  return {
    mapTrees: jest.fn().mockImplementation(actual.mapTrees),
  };
});

describe('shallowJSON', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('return empty render', () => {
    expect(shallowJSON(null)).toBe(null);
  });

  it('returns one tree', () => {
    expect(
      Array.isArray(
        shallowJSON(
          {
            nodeType: 'host',
            type: 'div',
            props: {},
            rendered: null,
          },
          { skipRoot: false }
        )
      )
    ).toBeFalsy();
  });

  it('returns multiple trees', () => {
    expect(
      Array.isArray(
        shallowJSON(
          [
            {
              nodeType: 'host',
              type: 'div',
              props: {},
              rendered: null,
            },
            {
              nodeType: 'host',
              type: 'div',
              props: {},
              rendered: null,
            },
          ],
          { skipRoot: false }
        )
      )
    ).toBeTruthy();
  });

  it('calls mapTrees', () => {
    const tree: ReactTestRendererTreeFixed = {
      nodeType: 'host',
      type: 'div',
      props: {},
      rendered: null,
    };

    shallowJSON(tree);

    expect(mapTrees).toBeCalled();
    expect(mapTrees).toBeCalledWith(tree, expect.any(Number));
  });

  it('passes depth', () => {
    const tree: ReactTestRendererTreeFixed = {
      nodeType: 'host',
      type: 'div',
      props: {},
      rendered: null,
    };

    shallowJSON(tree, { depth: 2 });

    expect(mapTrees).toBeCalled();
    expect(mapTrees).toBeCalledWith(tree, 2);
  });

  it('skips root node', () => {
    expect(
      shallowJSON(
        {
          nodeType: 'host',
          type: 'div',
          props: {},
          rendered: null,
        },
        { skipRoot: true }
      )
    ).toEqual([]);
  });

  it('skips root nodes', () => {
    expect(
      shallowJSON(
        [
          {
            nodeType: 'host',
            type: 'div',
            props: {},
            rendered: null,
          },
          {
            nodeType: 'host',
            type: 'div',
            props: {},
            rendered: null,
          },
        ],
        { skipRoot: true }
      )
    ).toEqual([]);
  });
});
