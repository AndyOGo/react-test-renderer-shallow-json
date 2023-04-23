import type { ReactTestRendererJSON } from 'react-test-renderer';
import type { ReactTestRendererTreeFixed } from './types';
import { mapChild } from './mapChild';

export function mapChildren(
  props: ReactTestRendererTreeFixed['props']
): ReactTestRendererJSON['children'] {
  const { children } = props;

  if (!children) {
    return null;
  }

  if (!Array.isArray(children)) {
    return [mapChild(children)];
  }

  return children.flat().map(mapChild);
}
