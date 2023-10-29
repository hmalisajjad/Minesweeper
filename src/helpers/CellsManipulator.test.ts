import { CellState, Field } from "./Field";
import { increamentNeibours } from "./CellsManipulator";
import { describe, expect, it } from "@jest/globals";

const { empty, bomb } = CellState;

describe("check increament of neighbours field", () => {
  describe("simple case", () => {
    it("Fields with only one item", () => {
      expect(increamentNeibours([0, 0], [[bomb]])).toStrictEqual([[bomb]]);
    });
    it("Field 2x2 with one mine", () => {
      expect(
        increamentNeibours(
          [0, 0],
          [
            [bomb, bomb],
            [empty, empty],
          ]
        )
      ).toStrictEqual([
        [bomb, 1],
        [1, 1],
      ]);
    });
  });
});
