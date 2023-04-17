import {
  ReactTestRendererTreeFixed,
  isNamedExoticComponentType,
} from './types';

export function getDisplayName(
  type: ReactTestRendererTreeFixed['type'],
  fallback = '???'
): string {
  if (typeof type === 'string') {
    return type;
  }

  if (isNamedExoticComponentType(type)) {
    return (
      type.displayName || (type.type ? getDisplayName(type.type) : fallback)
    );
  }

  return type.displayName || type.name || fallback;
}
