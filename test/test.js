import sorted from '../src/js/app';

const testArray = sorted ([
    {name: 'мечник', health: 10},
    {name: 'маг', health: 100},
    {name: 'лучник', health: 80},
  ]);

  testArray.forEach((hero, index) => {
    if (index >= testArray.length - 1) return;
    test(`Comparing of heroes`, () => {
      expect(hero.health).toBeGreaterThanOrEqual(testArray[index + 1].health);
    });
  });