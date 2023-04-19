import type { ReactTestRendererJSON } from 'react-test-renderer';
import { ReactTestRendererTreeFixed } from './types';
import { mapTrees } from './mapTrees';

export function shallowJSON(
  trees: null | ReactTestRendererTreeFixed | ReactTestRendererTreeFixed[],
  depth = 1
): null | ReactTestRendererJSON {
  if (!trees) {
    return null;
  }

  const nodes = mapTrees(trees, depth);

  if (Array.isArray(nodes) && nodes.length === 1) {
    return nodes[0] as unknown as ReactTestRendererJSON | null;
  }

  return nodes as unknown as ReactTestRendererJSON | null;
}
