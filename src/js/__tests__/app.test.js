import Game from '../app';

test('test class create field of sute size', () => {
  const test = new Game(3);
  expect(test.boardSize).toEqual(3);
});
