import {
  ReactTestRendererTreeFixed,
  isContext,
  isNamedExoticComponentType,
} from './types';

const elementSymbolMap: Readonly<Record<symbol, string>> = {
  [Symbol.for('react.memo')]: 'Memo',
  [Symbol.for('react.context')]: 'Consumer',
  [Symbol.for('react.provider')]: 'Provider',
};

function appendSymbol(displayName: string, $$typeof?: symbol): string {
  if (!$$typeof || !elementSymbolMap[$$typeof]) {
    return displayName;
  }

  return `${displayName}.${elementSymbolMap[$$typeof]}`;
}

export function getDisplayName(
  type: ReactTestRendererTreeFixed['type'],
  fallback = '???'
): string {
  if (typeof type === 'string') {
    return type;
  }

  if (isContext(type)) {
    return appendSymbol(type._context.displayName || fallback, type.$$typeof);
  }

  if (isNamedExoticComponentType(type)) {
    return (
      type.displayName ||
      appendSymbol(
        type.type ? getDisplayName(type.type) : fallback,
        type.$$typeof
      )
    );
  }

  return type.displayName || type.name || fallback;
}
