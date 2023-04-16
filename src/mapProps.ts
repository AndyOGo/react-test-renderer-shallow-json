import type { ReactTestRendererTreeFixed } from './types';

export function mapProps(props: ReactTestRendererTreeFixed['props']) {
  const { children, ...propsWithoutChildren } = props;

  return propsWithoutChildren;
}
