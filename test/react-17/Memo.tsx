import { memo } from 'react';
import * as FunctionComponents from './FunctionComponent';

export const Empty = memo(FunctionComponents.Empty);

export const Button = memo(FunctionComponents.Button);

export const List = memo(FunctionComponents.List);
export const ListItem = memo(FunctionComponents.ListItem);

export const Table = memo(FunctionComponents.Table);
export const TableHead = memo(FunctionComponents.TableHead);
export const TableFoot = memo(FunctionComponents.TableFoot);
export const TableBody = memo(FunctionComponents.TableBody);
export const TableRow = memo(FunctionComponents.TableRow);
export const TableHeadCell = memo(FunctionComponents.TableHeadCell);
export const TableCell = memo(FunctionComponents.TableCell);

export const EmptyNamed = memo(FunctionComponents.Empty);
EmptyNamed.displayName = "EmptyDisplayName";

export const ButtonNamed = memo(FunctionComponents.Button);
ButtonNamed.displayName = "ButtonDisplayName";

export const ListNamed = memo(FunctionComponents.List);
ListNamed.displayName = "ListDisplayName";
export const ListItemNamed = memo(FunctionComponents.ListItem);
ListItemNamed.displayName = "ListItemDisplayName";

export const TableNamed = memo(FunctionComponents.Table);
TableNamed.displayName = "TableDisplayName";
export const TableHeadNamed = memo(FunctionComponents.TableHead);
TableHeadNamed.displayName = "TableHeadDisplayName";
export const TableFootNamed = memo(FunctionComponents.TableFoot);
TableFootNamed.displayName = "TableFootDisplayName";
export const TableBodyNamed = memo(FunctionComponents.TableBody);
TableBodyNamed.displayName = "TableBodyDisplayName";
export const TableRowNamed = memo(FunctionComponents.TableRow);
TableRowNamed.displayName = "TableRowDisplayName";
export const TableHeadCellNamed = memo(FunctionComponents.TableHeadCell);
TableHeadCellNamed.displayName = "TableHeadCellDisplayName";
export const TableCellNamed = memo(FunctionComponents.TableCell);
TableCellNamed.displayName = "TableCellDisplayName";
