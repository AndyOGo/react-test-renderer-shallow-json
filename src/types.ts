import type { Context, ElementType, NamedExoticComponent, Key } from 'react';
import type {
  ReactTestRendererJSON,
  ReactTestRendererTree,
} from 'react-test-renderer';

export type ReactTestRendererJSONFixed = Omit<
  ReactTestRendererJSON,
  'children'
> & {
  children: null | string | ReactTestRendererNodeFixed[];
};
export type ReactTestRendererNodeFixed = ReactTestRendererJSONFixed | string;

type NamedExoticComponentFixed = Pick<
  NamedExoticComponent,
  '$$typeof' | 'displayName'
> & {
  type?: ReactTestRendererTreeFixed['type'];
};

type ContextComponent = Pick<NamedExoticComponent, '$$typeof'> & {
  type?: ReactTestRendererTreeFixed['type'];
  // eslint-disable-next-line @typescript-eslint/naming-convention
  _context: Pick<Context<unknown>, 'displayName'>;
};

export type ReactTestRendererTreeFixed = Omit<
  ReactTestRendererTree,
  'type' | 'props' | 'children' | 'rendered' | 'instance'
> & {
  type: string | ElementType | NamedExoticComponentFixed | ContextComponent;
  props: ReactTestRendererTreeProps;
  rendered:
    | null
    | ReactTestRendererTreeNodeFixed
    | ReactTestRendererTreeNodeFixed[];
};

export type ReactTestRendererTreeNodeFixed =
  | string
  | ReactTestRendererTreeFixed;

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

export function isNamedExoticComponentType(
  type: ReactTestRendererTreeFixed['type']
): type is NamedExoticComponentFixed {
  return !!type && typeof type !== 'string' && '$$typeof' in type;
}

export function isContext(
  type: ReactTestRendererTreeFixed['type']
): type is ContextComponent {
  return (
    isNamedExoticComponentType(type) &&
    (type.$$typeof === Symbol.for('react.context') ||
      type.$$typeof === Symbol.for('react.provider'))
  );
}
