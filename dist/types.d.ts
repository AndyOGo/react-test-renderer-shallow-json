import type { Context, ElementType, ForwardRefExoticComponent, ForwardRefRenderFunction, NamedExoticComponent, Key, LegacyRef } from 'react';
import type { ReactTestRendererJSON, ReactTestRendererTree } from 'react-test-renderer';
export declare function isReactTestRendererJSON(value: unknown): value is ReactTestRendererJSON;
type NamedExoticComponentFixed = Pick<NamedExoticComponent, '$$typeof' | 'displayName'> & {
    type?: ReactTestRendererTreeFixed['type'];
};
type ContextComponent = Pick<NamedExoticComponent, '$$typeof'> & {
    type?: ReactTestRendererTreeFixed['type'];
    _context: Pick<Context<unknown>, 'displayName'>;
};
type ForwardRefComponent = Pick<ForwardRefExoticComponent<unknown>, '$$typeof' | 'displayName'> & {
    render: ForwardRefRenderFunction<unknown>;
};
export type ReactTestRendererTreeFixed = Omit<ReactTestRendererTree, 'type' | 'props' | 'children' | 'rendered' | 'instance'> & {
    type: string | symbol | ElementType | NamedExoticComponentFixed | ContextComponent | ForwardRefComponent;
    props: ReactTestRendererTreeProps;
    rendered: null | ReactTestRendererTreeNodeFixed | (null | ReactTestRendererTreeNodeFixed)[];
};
export type ReactTestRendererTreeNodeFixed = string | ReactTestRendererTreeFixed;
type ReactTestRendererTreeProps = {
    children?: ReactTestRendererTreeChildren;
    [propName: string]: unknown;
};
type ReactTestRendererTreeChildren = ReactTestRendererTreeChild | ReactTestRendererTreeChild[];
export type ReactTestRendererTreeChild = string | number | boolean | undefined | null | {
    props: ReactTestRendererTreeProps;
    type: string | ElementType;
    key: null | Key;
    ref?: LegacyRef<unknown>;
};
export declare function isNamedExoticComponentType(type: ReactTestRendererTreeFixed['type']): type is NamedExoticComponentFixed;
export declare function isContext(type: ReactTestRendererTreeFixed['type']): type is ContextComponent;
export declare function isForwardRef(type: ReactTestRendererTreeFixed['type']): type is ForwardRefComponent;
export {};
