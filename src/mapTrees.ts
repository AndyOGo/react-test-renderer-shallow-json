import type { ReactTestRendererJSON } from 'react-test-renderer';
import type { ReactTestRendererTreeFixed } from './types';
import { mapTree } from './mapTree';
import { dive } from './dive';

export function mapTrees(
  trees: ReactTestRendererTreeFixed['rendered'],
  depth = 1
): ReactTestRendererJSON['children'] {
  if (!trees) {
    return null;
  }

  if (Array.isArray(trees)) {
    return trees.map((tree) => mapTree(tree, dive(tree, depth)));
  }

  return [mapTree(trees, dive(trees, depth))];
}
