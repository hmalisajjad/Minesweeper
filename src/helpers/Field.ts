export type Cell = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
export type Field = Cell[][];
export type Coards = [number, number];

export const CellState: Record<string, Cell> = {
    empty: 0,
    bomb: 9,
    hidden: 10,
    mark: 11,
    weakMark: 12,
};

export const emptyFieldGenerator = (
    size: number,
    state:Cell = CellState.empty
): Field => new Array(size).fill(null).map(() => new Array(size).fill(state));

export const fieldGenerator = (size: number, dencity: number): Field => {
    if(dencity < 0 || dencity > 1){
        throw new Error('the value of dencity must be 1 ot 0')
    }

    const freeCellsCount = size * size;
    const cellsWithBombs = freeCellsCount * dencity;

    const result: Field = emptyFieldGenerator(size);

    for (let i = 0; i< size; i++){
        for(let j = 0; j< size; j++) {
            if(cellsWithBombs === 0) {
                return result;
            }
        }
    }

    return result;
};