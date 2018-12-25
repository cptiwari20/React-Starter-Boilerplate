import { login, logout, startSignIn, startSignOut} from '../../actions/auth';

describe('Auth- Actions', () => {

  it("should return and action of type 'LOGIN' ", () => {
    const uid = '132xyz'
    const action = login(uid);
    expect(action).toEqual({
      type: 'LOGIN',
      payload: uid
    });
  })

  it("should return and action of type 'LOGOUT' ", () => {
    const action = logout();
    expect(action).toEqual({
      type: 'LOGOUT'
    });
  })

})