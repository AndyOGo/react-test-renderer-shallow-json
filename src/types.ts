import type { ElementType, Key } from 'react';
import type { ReactTestRendererTree } from 'react-test-renderer';

export type ReactTestRendererTreeFixed = Omit<
  ReactTestRendererTree,
  'type' | 'props' | 'children' | 'rendered'
> & {
  type: string | ElementType;
  props: ReactTestRendererTreeProps;
  rendered: null | ReactTestRendererTreeFixed | ReactTestRendererTreeFixed[];
};

type ReactTestRendererTreeProps = {
  children?: ReactTestRendererTreeChildren;
  [propName: string]: unknown;
};

type ReactTestRendererTreeChildren =
  | ReactTestRendererTreeChild
  | ReactTestRendererTreeChild[];

export type ReactTestRendererTreeChild =
  | string
  | {
      props: ReactTestRendererTreeProps;
      type: string | ElementType;
      key: null | Key;
    };
