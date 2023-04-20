# react-test-renderer-shallow-json

Return an object representing the rendered tree.
This tree contains the platform-specific nodes like `<div>` or `<View>` and includes the user-written components as well.
User-written components are rendered recursively up to the specified `depth`.
This is handy for **shallow** [snapshot testing](https://facebook.github.io/jest/docs/en/snapshot-testing.html#snapshot-testing-with-jest).

**Disclaimer:** this is **not shallow rendering**.
Instead of [`react-test-renderer`](https://legacy.reactjs.org/docs/test-renderer.html)'s [`.toJSON()`](https://legacy.reactjs.org/docs/test-renderer.html#testrenderertojson) the result of [`.toTree()`](https://legacy.reactjs.org/docs/test-renderer.html#testrenderertotree) is used as an alternative to [`react-test-renderer/shallow`](https://legacy.reactjs.org/docs/shallow-renderer.html).

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**

- [Installation](#installation)
- [Usage](#usage)
- [API](#api)
- [Why?](#why)
- [License](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# Installation

```sh
npm install --save-dev react-test-renderer-shallow-json
```

# Usage

Replace your [`.toJSON()`](https://legacy.reactjs.org/docs/test-renderer.html#testrenderertojson) based snapshot by a call to `shallowJSON()` with the result of [`.toTree()`](https://legacy.reactjs.org/docs/test-renderer.html#testrenderertotree) as it's argument.

```js
import TestRenderer from 'react-test-renderer';
import shallowJSON from 'react-test-renderer-shallow-json';

function MyComponent() {
  return (
    <div>
      <SubComponent foo="bar" />
      <p className="my">Hello</p>
    </div>
  )
}

function SubComponent() {
  return (
    <p className="sub">Sub</p>
  );
}

const testRenderer = TestRenderer.create(<MyComponent />);

console.log(shallowJSON(testRenderer.toTree()));
```

# API

Please find the API docs at [`./docs/README.md`](./docs/README.md).

# Why?

- [[Shallow Renderer] Plan forward #17321](https://github.com/facebook/react/issues/17321)
- [`react-shallow-renderer`](https://www.npmjs.com/package/react-shallow-renderer) is [re-exported]([react-shallow-renderer](https://github.com/facebook/react/blob/c826dc50de288758a0b783b2fd37b40a3b512fc4/packages/react-test-renderer/shallow.js#L10)) and moved to [enzymejs/react-shallow-renderer](https://github.com/enzymejs/react-shallow-renderer)

# License

The MIT License (MIT)

Copyright (c) 2023 Andreas Deuschlinger

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
