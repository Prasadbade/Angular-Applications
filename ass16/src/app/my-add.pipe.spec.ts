import { MyAddPipe } from './my-add.pipe';


describe('MyAdd', () => {
  it('Addition pipe', () => {
    const pipe = new MyAddPipe();
    expect(pipe.transform(10,20)).toBe(30)
  });
});