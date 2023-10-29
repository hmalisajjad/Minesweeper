import { describe, expect, it} from '@jest/globals'
import { emptyFieldGenerator , CellState, fieldGenerator } from "./Field";

const { empty, bomb, hidden} = CellState;

describe('Empty Field Generator', () => {
    describe(' Test of emptyFiledGenerator', ()=> {
        it('2x2 array test', () => {
            expect(emptyFieldGenerator(2)).toStrictEqual([
                [empty,empty],
                [empty,empty],
            ]);
        });
        it('3x3 array test', () => {
            expect(emptyFieldGenerator(3)).toStrictEqual([
                [empty,empty,empty],
                [empty,empty,empty],
                [empty,empty,empty],
            ]);
        });
        it('2x2 array test', () => {
            expect(emptyFieldGenerator(3)).toStrictEqual([
                [hidden,hidden,hidden],
                [hidden,hidden,hidden],
                [hidden,hidden,hidden],
            ]);
        });
        describe("density simple case test", () => {
            it('Wrong dencity',()=>{
                const errorText = "the value of dencity must be 1 ot 0";
                expect(()=> fieldGenerator(1,-1)).toThrow(errorText);
                expect(()=> fieldGenerator(1,2)).toThrow(errorText);
            });
            it('Posible field value without mine',()=>{
                expect(()=> fieldGenerator(1,0)).toStrictEqual([[empty]]);
            });
            it('Posible big array field value without mine',()=>{
                expect(()=> fieldGenerator(10,0)).toStrictEqual([
                    [empty,empty,empty,empty,empty,empty,empty,empty,empty,empty],
                    [empty,empty,empty,empty,empty,empty,empty,empty,empty,empty],
                    [empty,empty,empty,empty,empty,empty,empty,empty,empty,empty],
                    [empty,empty,empty,empty,empty,empty,empty,empty,empty,empty],
                    [empty,empty,empty,empty,empty,empty,empty,empty,empty,empty],
                    [empty,empty,empty,empty,empty,empty,empty,empty,empty,empty],
                    [empty,empty,empty,empty,empty,empty,empty,empty,empty,empty],
                    [empty,empty,empty,empty,empty,empty,empty,empty,empty,empty],
                    [empty,empty,empty,empty,empty,empty,empty,empty,empty,empty],
                    [empty,empty,empty,empty,empty,empty,empty,empty,empty,empty],
                ]);
            });
            // it('Posible field value with mine',()=>{
            //     expect(()=> fieldGenerator(1,1)).toStrictEqual([[bomb]]);
            // });
        });
    });
});