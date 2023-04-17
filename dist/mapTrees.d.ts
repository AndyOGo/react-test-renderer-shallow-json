import type { ReactTestRendererJSON } from 'react-test-renderer';
import type { ReactTestRendererTreeFixed } from './types';
export declare function mapTrees(trees: ReactTestRendererTreeFixed['rendered'], depth?: number): ReactTestRendererJSON['children'];
