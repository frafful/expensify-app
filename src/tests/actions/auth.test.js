import { login, logout } from '../../actions/auth';

test('should return login action object correctly', () => {
  const action = login('xpto');
  expect(action).toEqual({
    type: 'LOGIN',
    uid: 'xpto'
  });
});

test('should return logout action object correctly', () => {
  const action = logout();
  expect(action).toEqual({
    type: 'LOGOUT'
  });
});