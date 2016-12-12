import { findLowest } from '../lowest';

describe('find the lowest value in an array', ()=> {
    it('default test', ()=> {
        expect(findLowest([1, 2, 3, 4, 5, 6])).toBe(1);
    });
    it('negative numbers', ()=> {
        expect(findLowest([1, 2, 3, -4, 5, 6])).toBe(-4);
    });
});