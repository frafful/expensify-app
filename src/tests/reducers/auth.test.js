import auth from '../../reducers/auth';

test('should return correct login state object', () => {
  const action = {
    type: 'LOGIN',
    uid: 'xpto'
  };
  const result = auth({}, action);
  expect(result).toEqual({ uid: action.uid });
});

test('should return correct logout state object', () => {
  const action = {
    type: 'LOGOUT'
  };
  const result = auth({ uid: 'xpto' }, action);
  expect(result).toEqual({ });
});