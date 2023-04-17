import type { ReactTestRendererJSON } from 'react-test-renderer';
import { ReactTestRendererTreeFixed } from './types';
import { getDisplayName } from './getDisplayName';
import { mapProps } from './mapProps';
import { mapTrees } from './mapTrees';
import { dive } from './dive';

export function shallowJSON(
  tree: null | ReactTestRendererTreeFixed,
  depth = 1
): null | ReactTestRendererJSON {
  if (!tree) {
    return null;
  }

  const shallowJson: ReactTestRendererJSON = {
    type: getDisplayName(tree.type),
    props: mapProps(tree.props),
    children: mapTrees(tree.rendered, dive(tree, depth)),
  };

  Object.defineProperty(shallowJson, '$$typeof', {
    value: Symbol.for('react.test.json'),
  });

  return shallowJson;
}
