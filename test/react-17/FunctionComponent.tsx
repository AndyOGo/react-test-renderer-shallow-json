import React from 'react';

export function Empty() {
  return null;
}

export function MyComponent() {
  return (
    <div>
      <SubComponent />
      <p className="my">Hello</p>
    </div>
  );
}

export function SubComponent() {
  return <p className="sub">Sub</p>;
}

export function Button({
  children,
  type = 'button',
  ...props
}: React.ComponentProps<'button'>) {
  return (
    <button {...props} type={type}>
      {children}
    </button>
  );
}
