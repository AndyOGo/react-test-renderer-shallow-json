import React, { createContext, type PropsWithChildren } from 'react';

export const Context = createContext<string>('default');

export function ContextProvider({ children }: PropsWithChildren<unknown>) {
  return <Context.Provider value={'Hello World'}>{children}</Context.Provider>;
}

export function ContextConsumer() {
  return <Context.Consumer>{(value) => value}</Context.Consumer>;
}

export const NamedContext = createContext<string>('default');
NamedContext.displayName = "NamedContextDisplayName";

export function NamedContextProvider({ children }: PropsWithChildren<unknown>) {
  return <NamedContext.Provider value={'Hello World'}>{children}</NamedContext.Provider>;
}

export function NamedContextConsumer() {
  return <NamedContext.Consumer>{(value) => value}</NamedContext.Consumer>;
}
