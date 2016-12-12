import { findHighest } from '../highest';

describe('find the highest value in an array', ()=> {
    it('default test', ()=> {
        expect(findHighest([1, 2, 3, 4, 5, 6])).toBe(6);
    });
    it('negative numbers', ()=> {
        expect(findHighest([1, 2, 3, -4, 5, 6])).toBe(6);
    });
    it('max and min numbers', ()=> {
        expect(findHighest([1, 2, 3, Number.MAX_VALUE, Number.MIN_VALUE, 6])).toBe(Number.MAX_VALUE);
    });
});