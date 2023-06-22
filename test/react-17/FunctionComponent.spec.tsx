import React from 'react';
import { create } from 'react-test-renderer';
import { shallowJSON } from '../../src';
import {
  Empty,
  Button,
  MyComponent,
  ListItem,
  List,
  TableHead,
  TableHeadCell,
  Table,
  TableRow,
  TableFoot,
  TableCell,
  TableBody,
} from './FunctionComponent';

describe('Empty', () => {
  it('matches snapshot', () => {
    expect(shallowJSON(create(<Empty />).toTree())).toMatchSnapshot();
  });
});

describe('MyComponent', () => {
  it('matches snapshot', () => {
    expect(shallowJSON(create(<MyComponent />).toTree())).toMatchSnapshot();
  });

  it('matches snapshot 2 level deep', () => {
    expect(
      shallowJSON(create(<MyComponent />).toTree(), { depth: 2 })
    ).toMatchSnapshot();
  });
});

describe('Button', () => {
  it('matches snapshot', () => {
    expect(
      shallowJSON(create(<Button onClick={jest.fn()} />).toTree())
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
});
