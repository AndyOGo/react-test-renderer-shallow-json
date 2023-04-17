import React, { createContext, type PropsWithChildren } from 'react';
import { createPortal } from 'react-dom';

export function Modal({ children }: PropsWithChildren<unknown>) {
  // React-test-renderer: support for portal
  // @see: https://github.com/facebook/react/issues/11565
  return createPortal(children, {} as Element);
}
