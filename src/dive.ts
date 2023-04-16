import type { ReactTestRendererTreeNodeFixed } from './types';

export function dive(
  tree: ReactTestRendererTreeNodeFixed,
  depth: number
): number {
  return typeof tree === 'string' || tree.nodeType === 'host'
    ? depth
    : depth - 1;
}
