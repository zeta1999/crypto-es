/* eslint-disable no-undef */
import C from '../src';

describe('md5', () => {
  it.only('vector 1', () => {
    expect(C.MD5('').toString()).toBe('d41d8cd98f00b204e9800998ecf8427e');
  });
});
