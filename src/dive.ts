import type { ReactTestRendererTreeNodeFixed } from './types';

export function dive(
  tree: ReactTestRendererTreeNodeFixed,
  level: number
): number {
  return typeof tree === 'string' || tree.nodeType === 'host'
    ? level
    : level - 1;
}
