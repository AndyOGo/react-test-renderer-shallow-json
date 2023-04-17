import React from 'react';
import { create } from 'react-test-renderer';
import { shallowJSON } from '../../src';
import {
  Empty,
  Button,
  ListItem,
  List,
  TableHead,
  TableHeadCell,
  Table,
  TableRow,
  TableFoot,
  TableCell,
  TableBody,
  EmptyNamed,
  ButtonNamed,
  ListItemNamed,
  ListNamed,
  TableHeadNamed,
  TableHeadCellNamed,
  TableNamed,
  TableRowNamed,
  TableFootNamed,
  TableCellNamed,
  TableBodyNamed,
} from './Memo';

describe('Empty', () => {
  it('matches snapshot', () => {
    expect(shallowJSON(create(<Empty />).toTree())).toMatchSnapshot();
  });

  it('matches named snapshot', () => {
    expect(shallowJSON(create(<EmptyNamed />).toTree())).toMatchSnapshot();
  });
});

describe('Button', () => {
  it('matches snapshot', () => {
    expect(
      shallowJSON(create(<Button onClick={jest.fn()} />).toTree())
    ).toMatchSnapshot();
  });

  it('matches named snapshot', () => {
    expect(
      shallowJSON(create(<ButtonNamed onClick={jest.fn()} />).toTree())
    ).toMatchSnapshot();
  });
});

describe('List', () => {
  it('matches snapshot', () => {
    expect(
      shallowJSON(
        create(
          <List>
            {['A', 'B', 'C'].map((children, index) => (
              <ListItem key={index}>{children}</ListItem>
            ))}
          </List>
        ).toTree()
      )
    ).toMatchSnapshot();
  });

  it('matches named snapshot', () => {
    expect(
      shallowJSON(
        create(
          <ListNamed>
            {['A', 'B', 'C'].map((children, index) => (
              <ListItemNamed key={index}>{children}</ListItemNamed>
            ))}
          </ListNamed>
        ).toTree()
      )
    ).toMatchSnapshot();
  });
});

describe('Table', () => {
  it('matches snapshot', () => {
    expect(
      shallowJSON(
        create(
          <Table>
            <TableHead>
              <TableRow>
                <TableHeadCell>Head A</TableHeadCell>
                <TableHeadCell>Head B</TableHeadCell>
                <TableHeadCell>Head C</TableHeadCell>
              </TableRow>
            </TableHead>

            <TableFoot>
              <TableRow>
                <TableCell>Foot A</TableCell>
                <TableCell>Foot B</TableCell>
                <TableCell>Foot C</TableCell>
              </TableRow>
            </TableFoot>

            <TableBody>
              {[
                ['A', 'B', 'C'],
                ['X', 'Y', 'Z'],
              ].map((row, rowIndex) => (
                <TableRow key={rowIndex}>
                  {row.map((cell, cellIndex) => (
                    <TableCell key={cellIndex}>{cell}</TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        ).toTree()
      )
    ).toMatchSnapshot();
  });

  it('matches named snapshot', () => {
    expect(
      shallowJSON(
        create(
          <TableNamed>
            <TableHeadNamed>
              <TableRowNamed>
                <TableHeadCellNamed>Head A</TableHeadCellNamed>
                <TableHeadCellNamed>Head B</TableHeadCellNamed>
                <TableHeadCellNamed>Head C</TableHeadCellNamed>
              </TableRowNamed>
            </TableHeadNamed>

            <TableFootNamed>
              <TableRowNamed>
                <TableCellNamed>Foot A</TableCellNamed>
                <TableCellNamed>Foot B</TableCellNamed>
                <TableCellNamed>Foot C</TableCellNamed>
              </TableRowNamed>
            </TableFootNamed>

            <TableBodyNamed>
              {[
                ['A', 'B', 'C'],
                ['X', 'Y', 'Z'],
              ].map((row, rowIndex) => (
                <TableRowNamed key={rowIndex}>
                  {row.map((cell, cellIndex) => (
                    <TableCellNamed key={cellIndex}>{cell}</TableCellNamed>
                  ))}
                </TableRowNamed>
              ))}
            </TableBodyNamed>
          </TableNamed>
        ).toTree()
      )
    ).toMatchSnapshot();
  });
});
