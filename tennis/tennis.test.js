import { getScores } from "./tennis";

it("should handle simple score scenarios", () => {
  const expectedScores = {
    "0,0": "L-L",
    "0,1": "L-15",
    "0,2": "L-30",
    "0,3": "L-40",
    "1,0": "15-L",
    "1,1": "15-15",
    "1,2": "15-30",
    "1,3": "15-40",
    "2,0": "30-L",
    "2,1": "30-15",
    "2,2": "30-30",
    "2,3": "30-40",
    "3,0": "40-L",
    "3,1": "40-15",
    "3,2": "40-30",
    "3,3": "Deuce",
  };

  for (let playerA = 0; playerA < 4; playerA++) {
    for (let playerB = 0; playerB < 4; playerB++) {
      expect(getScores(playerA, playerB)).toBe(
        expectedScores[`${playerA},${playerB}`]
      );
    }
  }
});

it("should return a score of Love-Love when both scores are 0", () => {
  expect(getScores(0, 0)).toBe("L-L");
});

it("should return a score of L-15 when one of the score is 0 and other is 1", () => {
  expect(getScores(0, 1)).toBe("L-15");
});

it("should return a score of L-30 when one of the score is 0 and other is 2", () => {
  expect(getScores(0, 2)).toBe("L-30");
});

it("should return a score of L-40 when one of the score is 0 and other is 3", () => {
  expect(getScores(0, 3)).toBe("L-40");
});

it("should return a score of B won when one of the score is 0 and other is 4", () => {
  expect(getScores(0, 4)).toBe("B won");
});

it("should return a score of 15-15 when both scores are 1", () => {
  expect(getScores(1, 1)).toBe("15-15");
});

it("should return a score of 30-15 when one score is 2 and other is 1", () => {
  expect(getScores(2, 1)).toBe("30-15");
});

it("should return a score of 40-15 when one score is 3 and other is 1", () => {
  expect(getScores(3, 1)).toBe("40-15");
});

it("should say who won when one score is 4 and other is 1", () => {
  expect(getScores(4, 1)).toBe("A won");
});

it("should return a score of 30-30 when both scores are 2", () => {
  expect(getScores(2, 2)).toBe("30-30");
});

it("should return a score of 40-40 when both scores are 3", () => {
  expect(getScores(3, 3)).toBe("Deuce");
});

it("should return a score of Adv A when one score is 4 and other is 3", () => {
  expect(getScores(4, 3)).toBe("Adv A");
});
