import type { ReactTestRendererNode } from 'react-test-renderer';
import type { ReactTestRendererTreeChild } from './types';
import { getDisplayName } from './getDisplayName';
import { mapProps } from './mapProps';
import { mapChildren } from './mapChildren';

export function mapChild(
  child: ReactTestRendererTreeChild
): ReactTestRendererNode {
  if (typeof child !== 'object' || child == null) {
    return child as unknown as ReactTestRendererNode;
  }

  const { key, ref } = child;

  const json = {
    type: getDisplayName(child.type),
    props: mapProps({
      ...child.props,
      ...(key && { key }),
      ...(ref && { ref }),
    }),
    children: mapChildren(child.props),
  };

  Object.defineProperty(json, '$$typeof', {
    value: Symbol.for('react.test.json'),
  });

  return json;
}
