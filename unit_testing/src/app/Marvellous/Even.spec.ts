import {checkeven} from './Even';

describe('check the even odd',()=>{
    it('Should return 1 if no is even',()=>{
        const ret=checkeven(6);
        expect(ret).toBe(1);
    })

    it('should return 0 if number is odd',()=>{
        const ret=checkeven(7);
        expect(ret).toBe(0)
    })
})