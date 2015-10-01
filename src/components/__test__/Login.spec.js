import { expect } from 'chai';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import { Login } from 'components/Login';

describe('Login', () => {
  const shallowRenderer = TestUtils.createRenderer();

  beforeEach(() => {
    shallowRenderer.render(<Login loggedIn={false}/>);
  });

  it('should render', () => {
    const login = shallowRenderer.getRenderOutput();
    expect(login).to.exist;
  });
});
