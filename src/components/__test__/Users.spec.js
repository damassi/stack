import React from 'react';
import { expect } from 'chai';
import { Users } from 'components/Users';
import { createShallowRenderer } from 'utils/testHelpers';

describe('Login', () => {
  const shallowRenderer = createShallowRenderer();

  beforeEach(() => {
    shallowRenderer.render(
      <Users
        users={[
          'foo',
          'bar',
          'baz'
        ]}
      />
    );
  });

  it('should render', () => {
    const users = shallowRenderer.getRenderOutput();
    expect(users).to.exist;
  });
});
