react-test-renderer-shallow-json

# react-test-renderer-shallow-json

## Table of contents

### Functions

- [shallowJSON](README.md#shallowjson)

## Functions

### shallowJSON

▸ **shallowJSON**(`trees`, `options?`): ``null`` \| `ReactTestRendererNode` \| `ReactTestRendererNode`[]

Return an object representing the rendered tree.
This tree contains the platform-specific nodes like `<div>` or `<View>` and includes the user-written components as well.
User-written components are rendered recursively up to the specified `depth`.
This is handy for **shallow** [snapshot testing](https://facebook.github.io/jest/docs/en/snapshot-testing.html#snapshot-testing-with-jest).

#### Parameters

| Name | Type |
| :------ | :------ |
| `trees` | ``null`` \| `ReactTestRendererTreeFixed` \| `ReactTestRendererTreeFixed`[] |
| `options` | `ShalllowJSONOptions` |

#### Returns

``null`` \| `ReactTestRendererNode` \| `ReactTestRendererNode`[]

#### Defined in

[shallowJSON.ts:25](https://github.com/AndyOGo/react-test-renderer-shallow-json/blob/d465bf4/src/shallowJSON.ts#L25)
