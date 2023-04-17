import React, { forwardRef, useRef, type ForwardedRef } from 'react';

function FancyDivInner(props: {}, ref: ForwardedRef<HTMLDivElement>) {
  return <div {...props} ref={ref} />;
}

export const FancyDiv = forwardRef<HTMLDivElement, unknown>(FancyDivInner);

export function TestRef() {
  const ref = useRef(null);

  return <FancyDiv ref={ref}></FancyDiv>;
}

export const FancyDivArrow = forwardRef<HTMLDivElement, unknown>(
  (props, ref) => {
    return <div {...props} ref={ref} />;
  }
);

export const FancyDivNamed = forwardRef<HTMLDivElement, unknown>(
  (props, ref) => {
    return <div {...props} ref={ref} />;
  }
);
FancyDivNamed.displayName = 'FancyDivDisplayName';
