import React from 'react';
import { create } from 'react-test-renderer';
import { shallowJSON } from '../../src';
import { TestWrapper } from './TestWrapper';

describe('TestWrapper', () => {
  it.each<number>([1, 2])('matches snapshot at depth of %s', (depth) => {
    expect(
      shallowJSON(
        create(
          <TestWrapper>
            <div data-children>Children</div>
          </TestWrapper>
        ).toTree(),
        { depth }
      )
    ).toMatchSnapshot();
  });

  describe.each([null, undefined, true, false, 0, 1, '', 'foo'])(
    'primitive of %s',
    (primitive) => {
      it.each<number>([1, 2])('matches snapshot at depth of %s', (depth) => {
        expect(
          shallowJSON(create(<TestWrapper>{primitive}</TestWrapper>).toTree(), {
            depth,
          })
        ).toMatchSnapshot();
      });

      it.each<number>([1, 2])(
        'matches snapshot adjacently at depth of %s',
        (depth) => {
          expect(
            shallowJSON(
              create(
                <TestWrapper>
                  <div />
                  {primitive}
                </TestWrapper>
              ).toTree(),
              { depth }
            )
          ).toMatchSnapshot();
        }
      );
    }
  );

  it.each<number>([1, 2])(
    'matches snapshot with an array of children at depth of %s',
    (depth) => {
      expect(
        shallowJSON(
          create(
            <TestWrapper>
              {[
                'TEXT_NODE',
                <div data-children key="div" />,
                <TestWrapper key="test" />,
              ]}
            </TestWrapper>
          ).toTree(),
          { depth }
        )
      ).toMatchSnapshot();
    }
  );

  it.each<number>([1, 2])(
    'matches snapshot with a adjacent array of children at depth of %s',
    (depth) => {
      expect(
        shallowJSON(
          create(
            <TestWrapper>
              <div />
              {[
                'TEXT_NODE',
                <div data-children key="div" />,
                <TestWrapper key="test" />,
              ]}
            </TestWrapper>
          ).toTree(),
          { depth }
        )
      ).toMatchSnapshot();
    }
  );
});
