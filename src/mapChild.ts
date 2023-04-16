import { getDisplayName } from './getDisplayName';
import { mapProps } from './mapProps';
import type { ReactTestRendererTreeChild } from './types';

export function mapChild(child: ReactTestRendererTreeChild) {
  if (typeof child === 'string') {
    return child;
  }

  const json = {
    type: getDisplayName(child.type),
    props: mapProps(child.props),
    children: null,
  };

  Object.defineProperty(json, '$$typeof', {
    value: Symbol.for('react.test.json'),
  });

  return json;
}
