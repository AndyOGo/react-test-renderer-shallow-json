import type { ReactTestRendererJSON } from 'react-test-renderer';
import { ReactTestRendererTreeFixed } from './types';
/**
 * Return an object representing the rendered tree.
 * This tree contains the platform-specific nodes like `<div>` or `<View>` and includes the user-written components as well.
 * User-written components are rendered recursively up to the specified `depth`.
 * This is handy for **shallow** [snapshot testing](https://facebook.github.io/jest/docs/en/snapshot-testing.html#snapshot-testing-with-jest).
 */
export declare function shallowJSON(trees: null | ReactTestRendererTreeFixed | ReactTestRendererTreeFixed[], depth?: number): null | ReactTestRendererJSON;
