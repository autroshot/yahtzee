import CalculateScore from './CalculateScore';

describe('CalculateScore의 점수 계산 기능', () => {
  it('poker', () => {
    const diceValuesTestDatas = [
      { diceValues: [1, 1, 1, 2, 3], result: 0 },
      { diceValues: [3, 3, 3, 4, 4], result: 0 },
      { diceValues: [2, 2, 2, 2, 3], result: 11 },
      { diceValues: [3, 3, 3, 3, 4], result: 16 },
      { diceValues: [6, 6, 6, 6, 6], result: 30 },
      { diceValues: [1, 6, 6, 6, 6], result: 25 },
    ];

    diceValuesTestDatas.forEach((diceValuesTestData) => {
      const calculateScore = new CalculateScore(diceValuesTestData.diceValues);

      expect(calculateScore.poker()).toEqual(diceValuesTestData.result);
    });
  });

  it('fullHouse', () => {
    const diceValuesTestDatas = [
      { diceValues: [1, 1, 1, 2, 3], result: 0 },
      { diceValues: [3, 3, 3, 3, 4], result: 0 },
      { diceValues: [2, 2, 2, 3, 3], result: 12 },
      { diceValues: [6, 6, 6, 6, 6], result: 30 },
      { diceValues: [3, 3, 3, 4, 4], result: 17 },
      { diceValues: [3, 3, 6, 6, 6], result: 24 },
    ];

    diceValuesTestDatas.forEach((diceValuesTestData) => {
      const calculateScore = new CalculateScore(diceValuesTestData.diceValues);

      expect(calculateScore.fullHouse()).toEqual(diceValuesTestData.result);
    });
  });

  it('smallStraight', () => {
    const diceValuesTestDatas = [
      { diceValues: [1, 1, 1, 1, 1], result: 0 },
      { diceValues: [2, 2, 3, 4, 5], result: 15 },
      { diceValues: [3, 4, 5, 5, 6], result: 15 },
      { diceValues: [1, 2, 3, 4, 4], result: 15 },
      { diceValues: [1, 2, 3, 4, 5], result: 15 },
    ];

    diceValuesTestDatas.forEach((diceValuesTestData) => {
      const calculateScore = new CalculateScore(diceValuesTestData.diceValues);

      expect(calculateScore.smallStraight()).toEqual(diceValuesTestData.result);
    });
  });

  it('largeStraight', () => {
    const diceValuesTestDatas = [
      { diceValues: [1, 1, 1, 1, 1], result: 0 },
      { diceValues: [1, 2, 3, 4, 4], result: 0 },
      { diceValues: [1, 2, 3, 4, 5], result: 30 },
      { diceValues: [2, 3, 4, 5, 6], result: 30 },
    ];

    diceValuesTestDatas.forEach((diceValuesTestData) => {
      const calculateScore = new CalculateScore(diceValuesTestData.diceValues);

      expect(calculateScore.largeStraight()).toEqual(diceValuesTestData.result);
    });
  });

  it('yacht', () => {
    const diceValuesTestDatas = [
      { diceValues: [1, 2, 3, 4, 5], result: 0 },
      { diceValues: [3, 3, 3, 3, 4], result: 0 },
      { diceValues: new Array(5).fill(1), result: 50 },
      { diceValues: new Array(5).fill(2), result: 50 },
      { diceValues: new Array(5).fill(3), result: 50 },
      { diceValues: new Array(5).fill(4), result: 50 },
      { diceValues: new Array(5).fill(5), result: 50 },
      { diceValues: new Array(5).fill(6), result: 50 },
    ];

    diceValuesTestDatas.forEach((diceValuesTestData) => {
      const calculateScore = new CalculateScore(diceValuesTestData.diceValues);

      expect(calculateScore.yacht()).toEqual(diceValuesTestData.result);
    });
  });
});
