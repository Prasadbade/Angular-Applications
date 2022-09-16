import { MyMultiPipe } from './my-multi.pipe';

describe('MyMulti', () => {
  it('Multiplication pipe', () => {
    const pipe = new MyMultiPipe();
    expect(pipe.transform(10,20)).toBe(200)
  });
});