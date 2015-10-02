import { createStore } from 'redux';
import { expect } from 'chai';
import appReducer from 'reducers/appReducer';

describe('appReducer', () => {
  let store;

  beforeEach(() => {
    store = createStore(appReducer);
  });

  it('should work', () => {
    expect(appReducer).to.exist;
  });

  it('should toggle loading', () => {
    const toggle = () => store.dispatch({
      type: 'LOADING',
      payload: {
        loading: !store.getState().loading
      }
    });

    toggle();
    expect(store.getState().loading).to.equal(false);

    toggle();
    expect(store.getState().loading).to.equal(true);
  });

});
