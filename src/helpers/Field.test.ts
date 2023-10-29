import { describe, expect, it} from '@jest/globals'
import { emptyFieldGenerator , CellState, fieldGenerator } from "./Field";

const { empty, bomb, hidden} = CellState;

describe('Empty Field Generator', () => {
    describe(' Test of emptyFiledGenerator', ()=> {
        it('2x2 array test', () => {
            expect(emptyFieldGenerator(2)).toStrictEqual([
                [empty, empty],
                [empty, empty],
            ]);
        });
        it('3x3 array test', () => {
            expect(emptyFieldGenerator(3)).toStrictEqual([
                [empty, empty, empty],
                [empty, empty, empty],
                [empty, empty, empty],
            ]);
        });
        it('2x2 array test', () => {
            expect(emptyFieldGenerator(3, hidden)).toStrictEqual([
                [hidden, hidden, hidden],
                [hidden, hidden, hidden],
                [hidden, hidden, hidden],
            ]);
        });
        describe("density simple case test", () => {
            it('Wrong probability',()=> {
                const errorText = "the value of probability must be 1 ot 0";
                expect(() => fieldGenerator(1, -1)).toThrow(errorText);
                expect(() => fieldGenerator(1, 2)).toThrow(errorText);
            });
            it('Posible field value without mine',()=>{
                expect(fieldGenerator(1, 0)).toStrictEqual([[empty]]);
            });
            it('Posible big array field value without mine',()=>{
                expect(fieldGenerator(10, 0)).toStrictEqual([
                    [empty, empty, empty, empty, empty, empty, empty, empty, empty, empty],
                    [empty, empty, empty, empty, empty, empty, empty, empty, empty, empty],
                    [empty, empty, empty, empty, empty, empty, empty, empty, empty,  empty],
                    [empty, empty, empty, empty, empty, empty, empty, empty, empty, empty],
                    [empty, empty, empty, empty, empty, empty, empty, empty, empty, empty],
                    [empty, empty, empty, empty, empty, empty, empty, empty, empty, empty],
                    [empty, empty, empty, empty, empty, empty, empty, empty, empty, empty],
                    [empty, empty, empty, empty, empty, empty, empty, empty, empty, empty],
                    [empty, empty, empty, empty, empty, empty, empty, empty, empty, empty],
                    [empty, empty, empty, empty, empty, empty, empty, empty, empty, empty],
                ]);
            });
            it('Posible field value with mine',()=>{
                expect(fieldGenerator(1, 1)).toStrictEqual([[bomb]]);
            });
            it('2x2 array with mines',()=>{
                expect(fieldGenerator(2, 1)).toStrictEqual([
                    [bomb, bomb],
                    [bomb, bomb],
                ]);
            });
            it('2x2 array with mines 50% probability',()=>{
                const field = fieldGenerator(2, 0.5);
                const flatField = field.flat();

                console.table(field);
                console.table(flatField);

                const cellsWithBombs = flatField.filter((cell) => cell === bomb);
                const emptyCells = flatField.filter((cell) => cell === empty);

                expect(cellsWithBombs).toHaveLength(2);
                expect(emptyCells).toHaveLength(2);
            });
        });
    });
});