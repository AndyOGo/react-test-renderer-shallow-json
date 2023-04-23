import type { ReactTestRendererNode } from 'react-test-renderer';
import { ReactTestRendererTreeFixed } from './types';
import { mapTrees } from './mapTrees';

/**
 * Return an object representing the rendered tree.
 * This tree contains the platform-specific nodes like `<div>` or `<View>` and includes the user-written components as well.
 * User-written components are rendered recursively up to the specified `depth`.
 * This is handy for **shallow** [snapshot testing](https://facebook.github.io/jest/docs/en/snapshot-testing.html#snapshot-testing-with-jest).
 */
export function shallowJSON(
  trees: null | ReactTestRendererTreeFixed | ReactTestRendererTreeFixed[],
  depth = 1
): null | ReactTestRendererNode | ReactTestRendererNode[] {
  if (!trees) {
    return null;
  }

  const nodes = mapTrees(trees, depth);

  if (Array.isArray(nodes) && nodes.length === 1) {
    return nodes[0];
  }

  return nodes;
}
