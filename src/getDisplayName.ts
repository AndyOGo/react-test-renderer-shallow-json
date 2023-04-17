import {
  ReactTestRendererTreeFixed,
  isContext,
  isNamedExoticComponentType,
} from './types';

const elementSymbolMap: Readonly<Record<symbol, string>> = {
  [Symbol.for('react.fragment')]: 'React.Fragment',
  [Symbol.for('react.memo')]: 'Memo',
  [Symbol.for('react.context')]: 'Consumer',
  [Symbol.for('react.provider')]: 'Provider',
};

function appendSymbol(displayName: string, $$typeof?: symbol): string {
  if (!$$typeof || !($$typeof in elementSymbolMap)) {
    return displayName;
  }

  return `${displayName}.${elementSymbolMap[$$typeof]}`;
}

export function getDisplayName(
  type: ReactTestRendererTreeFixed['type'],
  fallback = 'UNDEFINED'
): string {
  if (typeof type === 'string') {
    return type;
  }

  if (typeof type === 'symbol') {
    return type in elementSymbolMap ? elementSymbolMap[type] : fallback;
  }

  if (isContext(type)) {
    return appendSymbol(type._context.displayName || 'Context', type.$$typeof);
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
