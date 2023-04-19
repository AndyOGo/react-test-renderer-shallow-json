import type { ReactTestRendererNode } from 'react-test-renderer';
import type { ReactTestRendererTreeNodeFixed } from './types';
import { getDisplayName } from './getDisplayName';
import { mapProps } from './mapProps';
import { mapChildren } from './mapChildren';
import { mapTrees } from './mapTrees';
import { withReactTestSymbol } from './withReactTestSymbol';

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
    children:
      depth > 0 ? mapTrees(tree.rendered, depth) : mapChildren(tree.props),
  };

  return withReactTestSymbol(json) as ReactTestRendererNode;
}
