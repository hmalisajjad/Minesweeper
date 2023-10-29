import { describe, expect, it} from '@jest/globals'
import {add, mul} from './mathFunctions';

describe('Testing of Math functions', ()=> {
    it('Checking add function', () => {
        expect(mul(2,3)).toBe(6)
        
    });
    it('Checking add function', () => {
        expect(add(1,2)).toBe(3)
        
    });
})