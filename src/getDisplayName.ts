import type { ReactTestRendererTreeFixed } from './types';

export function getDisplayName(
  type: ReactTestRendererTreeFixed['type'],
  fallback = '???'
) {
  if (typeof type === 'string') {
    return type;
  }

  return type.displayName || type.name || fallback;
}
