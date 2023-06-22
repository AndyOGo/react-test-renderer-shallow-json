import type { ReactTestRendererNode } from 'react-test-renderer';
import { ReactTestRendererTreeFixed } from './types';
export type ShalllowJSONOptions = {
    /**
     * The depth level specifying how deep a nested tree structure should be rendered. Defaults to 1.
     */
    depth?: number;
    /**
     * Skip the component under test from snapshot output. Defaults to true.
     */
    skipRoot?: boolean;
};
/**
 * Return an object representing the rendered tree.
 * This tree contains the platform-specific nodes like `<div>` or `<View>` and includes the user-written components as well.
 * User-written components are rendered recursively up to the specified `depth`.
 * This is handy for **shallow** [snapshot testing](https://facebook.github.io/jest/docs/en/snapshot-testing.html#snapshot-testing-with-jest).
 */
export declare function shallowJSON(trees: null | ReactTestRendererTreeFixed | ReactTestRendererTreeFixed[], options?: ShalllowJSONOptions): null | ReactTestRendererNode | ReactTestRendererNode[];
