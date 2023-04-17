/**
 * `react-test-renderer`'s method `.toJSON()` applies a test symbol `$$typeof` to run Jest's `petty-format` `ReactTestComponent` plugin for snapshot formatting.
 *
 * @see: https://www.npmjs.com/package/pretty-format#user-content-test
 * @see: https://github.com/facebook/jest/blob/main/packages/pretty-format/src/plugins/ReactTestComponent.ts#L26-L29
 * @see: https://github.com/facebook/react/blob/12adaffef7105e2714f82651ea51936c563fe15c/packages/react-test-renderer/src/ReactTestRenderer.js#L120-L122
 */
export function withReactTestSymbol<T extends object>(json: T): T {
  Object.defineProperty(json, '$$typeof', {
    value: Symbol.for('react.test.json'),
  });

  return json;
}
