import Immutable, { Map } from 'immutable';
import { createStore } from 'redux';
import { expect } from 'chai';
import appReducer from 'reducers/appReducer';

describe('appReducer', () => {
  let store;

  beforeEach(() => {
    store = createStore(appReducer, Immutable.fromJS({
      loading: true
    }));
  });

  it('should work', () => {
    expect(appReducer).to.exist;
  });

  it('should toggle loading', () => {
    const toggle = () => store.dispatch({
      type: 'LOADING',
      payload: Map({
        loading: !store.getState().get('loading')
      })
    });

    toggle();
    expect(store.getState().get('loading')).to.equal(false);

    toggle();
    expect(store.getState().get('loading')).to.equal(true);
  });

});
