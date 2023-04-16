import type { ComponentClass } from 'react';

// eslint-disable-next-line @typescript-eslint/naming-convention
export function FakeFunctionComponent() {
  return null;
}

// eslint-disable-next-line @typescript-eslint/naming-convention
class _FakeClassComponent {
  static displayName: string;
}

_FakeClassComponent.displayName = 'FakeClassComponent';

// eslint-disable-next-line @typescript-eslint/naming-convention
export const FakeClassComponent =
  _FakeClassComponent as unknown as ComponentClass;
