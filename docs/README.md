react-test-renderer-shallow-json

# react-test-renderer-shallow-json

## Table of contents

### Type Aliases

- [ShalllowJSONOptions](README.md#shalllowjsonoptions)

### Functions

- [shallowJSON](README.md#shallowjson)

## Type Aliases

### ShalllowJSONOptions

Ƭ **ShalllowJSONOptions**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `depth?` | `number` | The depth level specifying how deep a nested tree structure should be rendered. Defaults to 1. |
| `skipRoot?` | `boolean` | Skip the component under test from snapshot output. Defaults to true. |

#### Defined in

[shallowJSON.ts:8](https://github.com/AndyOGo/react-test-renderer-shallow-json/blob/ae09564/src/shallowJSON.ts#L8)

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
| `options` | [`ShalllowJSONOptions`](README.md#shalllowjsonoptions) |

#### Returns

``null`` \| `ReactTestRendererNode` \| `ReactTestRendererNode`[]

#### Defined in

[shallowJSON.ts:25](https://github.com/AndyOGo/react-test-renderer-shallow-json/blob/ae09564/src/shallowJSON.ts#L25)
