import React, { type PropsWithChildren } from 'react';

export function Empty() {
  return null;
}

export function SubComponent({ children }: PropsWithChildren<unknown>) {
  return <p className="sub">{children || 'Sub'}</p>;
}

export function MyComponent() {
  return (
    <div>
      <Empty />

      <SubComponent />
      
      <SubComponent>
        <span>Sub host</span>
        <SubComponent>
          <span>Sub sub host</span>
        </SubComponent>

        {true && <div>condition</div>}
      </SubComponent>

      <SubComponent>
        <SubComponent />
      </SubComponent>

      <p className="my">Hello</p>
    </div>
  );
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

export function List({ children, ...props }: React.ComponentProps<'ul'>) {
  return <ul {...props}>{children}</ul>;
}

export function ListItem({ children, ...props }: React.ComponentProps<'li'>) {
  return <li {...props}>{children}</li>;
}

export function Table({ children, ...props }: React.ComponentProps<'table'>) {
  return <table {...props}>{children}</table>;
}

export function TableHead({ children, ...props }: React.ComponentProps<'thead'>) {
  return <thead {...props}>{children}</thead>;
}

export function TableBody({ children, ...props }: React.ComponentProps<'tbody'>) {
  return <tbody {...props}>{children}</tbody>;
}

export function TableFoot({ children, ...props }: React.ComponentProps<'tfoot'>) {
  return <tfoot {...props}>{children}</tfoot>;
}

export function TableRow({ children, ...props }: React.ComponentProps<'tr'>) {
  return <tr {...props}>{children}</tr>;
}

export function TableHeadCell({ children, ...props }: React.ComponentProps<'th'>) {
  return <th {...props}>{children}</th>;
}

export function TableCell({ children, ...props }: React.ComponentProps<'td'>) {
  return <td {...props}>{children}</td>;
}
