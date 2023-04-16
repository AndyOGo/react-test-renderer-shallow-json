import type {
  ReactTestRendererJSON,
  ReactTestRendererNode,
} from 'react-test-renderer';
import {
  ReactTestRendererTreeNodeFixed,
  ReactTestRendererTreeChild,
  ReactTestRendererTreeFixed,
} from './types';
import { getDisplayName } from './utils';

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

function mapTrees(
  trees: ReactTestRendererTreeFixed['rendered'],
  level: number
): ReactTestRendererJSON['children'] {
  if (!trees) {
    return null;
  }

  if (Array.isArray(trees)) {
    return trees.map((tree) => mapTree(tree, dive(tree, level)));
  }

  return [mapTree(trees, dive(trees, level))];
}

function mapTree(
  tree: ReactTestRendererTreeNodeFixed,
  level: number
): ReactTestRendererNode {
  if (typeof tree === 'string') {
    return tree;
  }

  const json = {
    type: getDisplayName(tree.type),
    props: mapProps(tree.props),
    children: level ? mapTrees(tree.rendered, level) : mapChildren(tree.props),
  };

  Object.defineProperty(json, '$$typeof', {
    value: Symbol.for('react.test.json'),
  });

  return json;
}

function mapProps(props: ReactTestRendererTreeFixed['props']) {
  const { children, ...propsWithoutChildren } = props;

  return propsWithoutChildren;
}

function mapChildren(props: ReactTestRendererTreeFixed['props']) {
  const { children } = props;

  if (!children) {
    return null;
  }

  if (!Array.isArray(children)) {
    return [mapChild(children)];
  }

  return children.map(mapChild);
}

function mapChild(child: ReactTestRendererTreeChild) {
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

export function dive(
  tree: ReactTestRendererTreeNodeFixed,
  level: number
): number {
  return typeof tree === 'string' || tree.nodeType === 'host'
    ? level
    : level - 1;
}
