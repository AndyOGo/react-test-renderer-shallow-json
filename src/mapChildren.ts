import type {
  ReactTestRendererJSONFixed,
  ReactTestRendererTreeFixed,
} from './types';
import { mapChild } from './mapChild';

export function mapChildren(
  props: ReactTestRendererTreeFixed['props']
): ReactTestRendererJSONFixed['children'] {
  const { children } = props;

  if (!children) {
    return null;
  }

  if (!Array.isArray(children)) {
    return [mapChild(children)];
  }

  return children.map(mapChild);
}
