import React from 'react';
import { create } from 'react-test-renderer';
import { shallowJSON } from '../../src';
import { Modal } from './Portal';

jest.mock('react-dom');

describe('Modal', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  
  it('matches snapshot', () => {
    expect(
      shallowJSON(create(<Modal>This is a modal</Modal>).toTree())
    ).toMatchSnapshot();
  });
});
