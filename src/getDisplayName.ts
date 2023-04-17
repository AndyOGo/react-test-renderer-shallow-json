import {
  ReactTestRendererTreeFixed,
  isContext,
  isForwardRef,
  isNamedExoticComponentType,
} from './types';

const elementSymbolMap: Readonly<Record<symbol, string>> = {
  [Symbol.for('react.fragment')]: 'React.Fragment',
  [Symbol.for('react.memo')]: 'Memo',
  [Symbol.for('react.context')]: 'Consumer',
  [Symbol.for('react.provider')]: 'Provider',
  [Symbol.for('react.forward_ref')]: 'ForwardRef',
};

function getSymbol($$typeof?: symbol) {
  if (!$$typeof || !($$typeof in elementSymbolMap)) {
    return '';
  }

  return elementSymbolMap[$$typeof];
}

function prependSymbol(displayName: string, $$typeof?: symbol): string {
  if (!$$typeof || !($$typeof in elementSymbolMap)) {
    return displayName;
  }

  return `${getSymbol($$typeof)}${displayName}`;
}

function appendSymbol(displayName: string, $$typeof?: symbol): string {
  if (!$$typeof || !($$typeof in elementSymbolMap)) {
    return displayName;
  }

  return `${displayName}.${getSymbol($$typeof)}`;
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
    return (
      appendSymbol(type._context.displayName || 'Context', type.$$typeof) ||
      fallback
    );
  }

  if (isForwardRef(type)) {
    return (
      type.displayName ||
      prependSymbol(
        type.render ? getDisplayName(type.render, '') : '',
        type.$$typeof
      ) ||
      fallback
    );
  }

  if (isNamedExoticComponentType(type)) {
    if (type.$$typeof === Symbol.for('react.forward_ref')) {
      console.log(type);
    }
    return (
      type.displayName ||
      prependSymbol(
        type.type ? getDisplayName(type.type) : '',
        type.$$typeof
      ) ||
      fallback
    );
  }

  return type.displayName || type.name || fallback;
}
