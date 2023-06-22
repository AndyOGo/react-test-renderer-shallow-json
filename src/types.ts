import type {
  Context,
  ElementType,
  ForwardRefExoticComponent,
  ForwardRefRenderFunction,
  NamedExoticComponent,
  Key,
  LegacyRef,
} from 'react';
import type {
  ReactTestRendererJSON,
  ReactTestRendererTree,
} from 'react-test-renderer';

export function isReactTestRendererJSON(
  value: unknown
): value is ReactTestRendererJSON {
  return !!value && typeof value === 'object';
}

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

type ForwardRefComponent = Pick<
  ForwardRefExoticComponent<unknown>,
  '$$typeof' | 'displayName'
> & {
  render: ForwardRefRenderFunction<unknown>;
};

export type ReactTestRendererTreeFixed = Omit<
  ReactTestRendererTree,
  'type' | 'props' | 'children' | 'rendered' | 'instance'
> & {
  type:
    | string
    | symbol
    | ElementType
    | NamedExoticComponentFixed
    | ContextComponent
    | ForwardRefComponent;
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
      ref?: LegacyRef<unknown>;
    };

export function isNamedExoticComponentType(
  type: ReactTestRendererTreeFixed['type']
): type is NamedExoticComponentFixed {
  return !!type && typeof type === 'object' && '$$typeof' in type;
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

export function isForwardRef(
  type: ReactTestRendererTreeFixed['type']
): type is ForwardRefComponent {
  return (
    isNamedExoticComponentType(type) &&
    type.$$typeof === Symbol.for('react.forward_ref')
  );
}
