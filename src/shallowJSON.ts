import type {
  ReactTestRendererJSON,
  ReactTestRendererNode,
} from 'react-test-renderer';
import { ReactTestRendererTreeFixed, isReactTestRendererJSON } from './types';
import { mapTrees } from './mapTrees';

export type ShalllowJSONOptions = {
  /**
   * The depth level specifying how deep a nested tree structure should be rendered. Defaults to 1.
   */
  depth?: number;
  /**
   * Skip the component under test from snapshot output. Defaults to true.
   */
  skipRoot?: boolean;
};

/**
 * Return an object representing the rendered tree.
 * This tree contains the platform-specific nodes like `<div>` or `<View>` and includes the user-written components as well.
 * User-written components are rendered recursively up to the specified `depth`.
 * This is handy for **shallow** [snapshot testing](https://facebook.github.io/jest/docs/en/snapshot-testing.html#snapshot-testing-with-jest).
 */
export function shallowJSON(
  trees: null | ReactTestRendererTreeFixed | ReactTestRendererTreeFixed[],
  options: ShalllowJSONOptions = {}
): null | ReactTestRendererNode | ReactTestRendererNode[] {
  if (!trees) {
    return null;
  }

  const { depth = 1, skipRoot = true } = options;

  let nodes = mapTrees(trees, depth);

  if (skipRoot) {
    if (Array.isArray(nodes)) {
      nodes = nodes
        .filter<ReactTestRendererJSON>(isReactTestRendererJSON)
        .flatMap((node) => (node.children ? node.children : []));
    } else {
      nodes = nodes && (nodes as ReactTestRendererJSON).children;
    }
  }

  if (Array.isArray(nodes) && nodes.length === 1) {
    return nodes[0];
  }

  return nodes;
}
