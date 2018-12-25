import authReducer from '../../reducers/auth';

describe('Auth- Reducers', () => {
  it('should return an object with UID', () => {
    const uid = '123xyz';
    const action = { type: 'LOGIN', payload: uid}
    const newState = authReducer({}, action);

    expect(newState).toEqual({
      uid: uid
    })
  });

  it('should return an empty object', () => {
    const uid = '123xyz';
    const action = { type: 'LOGIN', payload: uid}
    const newState = authReducer({}, action);

    expect(newState).toEqual({
      uid: uid
    })
  })

})