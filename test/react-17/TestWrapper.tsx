import React, { PropsWithChildren } from 'react';

export function TestWrapper({
  children,
}: PropsWithChildren<unknown>) {
  return <div>{children}</div>;
}
