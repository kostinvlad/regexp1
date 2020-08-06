import Validator from '../validator';

test('validateUsername normal', () => {
  const gamer = new Validator();
  const received = gamer.validateUsername('Frank89-_fr');
  const expected = true;
  expect(received).toBe(expected);
});

test('validateUsername start-num', () => {
  const gamer = new Validator();
  const received = gamer.validateUsername('12Frank');
  const expected = false;
  expect(received).toBe(expected);
});

test('validateUsername end-num', () => {
  const gamer = new Validator();
  const received = gamer.validateUsername('Frank12');
  const expected = false;
  expect(received).toBe(expected);
});

test('validateUsername star/end', () => {
  const gamer = new Validator();
  const received = gamer.validateUsername('_Frank-');
  const expected = false;
  expect(received).toBe(expected);
});

test('validateUsername num count', () => {
  const gamer = new Validator();
  const received = gamer.validateUsername('Frank6779s');
  const expected = false;
  expect(received).toBe(expected);
});
