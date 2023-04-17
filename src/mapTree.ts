import type { ReactTestRendererNode } from 'react-test-renderer';
import type { ReactTestRendererTreeNodeFixed } from './types';
import { getDisplayName } from './getDisplayName';
import { mapProps } from './mapProps';
import { mapChildren } from './mapChildren';
import { mapTrees } from './mapTrees';

export function mapTree(
  tree: ReactTestRendererTreeNodeFixed,
  depth = 1
): ReactTestRendererNode {
  if (typeof tree === 'string') {
    return tree;
  }

  const json = {
    type: getDisplayName(tree.type),
    props: mapProps(tree.props),
    children: depth ? mapTrees(tree.rendered, depth) : mapChildren(tree.props),
  };

  Object.defineProperty(json, '$$typeof', {
    value: Symbol.for('react.test.json'),
  });

  return json as ReactTestRendererNode;
}