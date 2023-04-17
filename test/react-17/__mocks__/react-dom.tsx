// React-test-renderer: support for portal
// @see: https://github.com/facebook/react/issues/11565#issuecomment-1099638877
import React, { ReactNode } from "react";

const originalModule = jest.requireActual('react-dom');

module.exports = {
  ...originalModule,
  createPortal: (children: ReactNode) => {
    return <div date-fake-portal-container>{children}</div>;
  },
};

export {};
