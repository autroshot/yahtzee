import CalculateScore from './CalculateScore';

describe('CalculateScore의 점수 계산 기능', () => {
  it('poker', () => {
    const diceValuesTestDatas = [
      { diceValues: [1, 1, 1, 2, 3], result: 0 },
      { diceValues: [2, 2, 2, 2, 3], result: 11 },
      { diceValues: [3, 3, 3, 3, 4], result: 16 },
      { diceValues: [6, 6, 6, 6, 6], result: 30 },
      { diceValues: [3, 3, 3, 4, 4], result: 0 },
      { diceValues: [1, 6, 6, 6, 6], result: 25 },
    ];
    diceValuesTestDatas.forEach((diceValuesTestData) => {
      const calculateScore = new CalculateScore(diceValuesTestData.diceValues);

      expect(calculateScore.poker()).toEqual(diceValuesTestData.result);
    });
  });
});
