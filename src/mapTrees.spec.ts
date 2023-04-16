import { FakeFunctionComponent, FakeClassComponent } from './test-utils';
import { mapTrees } from './mapTrees';

describe('mapTrees', () => {
  it('return empty render', () => {
    expect(mapTrees(null)).toBe(null);
  });

  it('returns one tree', () => {
    expect(mapTrees('foo')).toEqual(['foo']);
  });

  it('returns multiple trees', () => {
    expect(mapTrees(['foo', 'bar', 'baz'])).toEqual(['foo', 'bar', 'baz']);
  });

  it('dives into all host components', () => {
    expect(
      mapTrees(
        {
          nodeType: 'host',
          type: 'div',
          props: {},
          rendered: {
            nodeType: 'host',
            type: 'div',
            props: {},
            rendered: {
              nodeType: 'host',
              type: 'div',
              props: {},
              rendered: {
                nodeType: 'host',
                type: 'div',
                props: {},
                rendered: null,
              },
            },
          },
        },
        1
      )
    ).toEqual([
      {
        type: 'div',
        props: {},
        children: [
          {
            type: 'div',
            props: {},
            children: [
              {
                type: 'div',
                props: {},
                children: [
                  {
                    type: 'div',
                    props: {},
                    children: null,
                  },
                ],
              },
            ],
          },
        ],
      },
    ]);
  });

  it('dives into function components and stops at level', () => {
    expect(
      mapTrees(
        {
          nodeType: 'component',
          type: FakeFunctionComponent,
          props: {},
          rendered: {
            nodeType: 'component',
            type: FakeFunctionComponent,
            props: {},
            rendered: null,
          },
        },
        1
      )
    ).toEqual([
      {
        type: 'FakeFunctionComponent',
        props: {},
        children: null,
      },
    ]);
  });

  it('dives into class components and stops at level', () => {
    expect(
      mapTrees(
        {
          nodeType: 'component',
          type: FakeClassComponent,
          props: {},
          rendered: {
            nodeType: 'component',
            type: FakeClassComponent,
            props: {},
            rendered: null,
          },
        },
        1
      )
    ).toEqual([
      {
        type: 'FakeClassComponent',
        props: {},
        children: null,
      },
    ]);
  });
});
