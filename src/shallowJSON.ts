import type { ReactTestRendererJSON } from 'react-test-renderer';
import { ReactTestRendererTreeFixed } from './types';
import { getDisplayName } from './getDisplayName';
import { mapProps } from './mapProps';
import { mapTrees } from './mapTrees';

export function shallowJSON(
  tree: null | ReactTestRendererTreeFixed,
  level = 1
): null | ReactTestRendererJSON {
  if (!tree) {
    return null;
  }

  const shallowJson: ReactTestRendererJSON = {
    type: getDisplayName(tree.type),
    props: mapProps(tree.props),
    children: mapTrees(tree.rendered, level),
  };

  Object.defineProperty(shallowJson, '$$typeof', {
    value: Symbol.for('react.test.json'),
  });

  return shallowJson;
}
