import { MarvellousChkPipe } from './marvellous-chk.pipe';


describe('MarvellousChk', () => {
  it('checking multiple entity', () => {
    const pipe = new MarvellousChkPipe();
    expect(pipe.transform(10,"Even")).toBe(true)
  });
});