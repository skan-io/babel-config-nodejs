import config from '.';

test('babel-config regression', ()=> {
  expect(config).toMatchSnapshot();
});
