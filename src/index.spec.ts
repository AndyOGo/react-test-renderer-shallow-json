import {
  shallowJSON as shallowJSONreexport,
  ShalllowJSONOptions,
} from './index';
import { shallowJSON } from './shallowJSON';

describe('index', () => {
  it('should export shallowJSON', () => {
    expect(shallowJSONreexport).toBe(shallowJSON);
  });
});
