import React from 'react';
import { expect } from 'chai';
import { UserList } from 'components/users/UserList';
import { createShallowRenderer } from 'utils/testHelpers';

describe('Login', () => {
  const shallowRenderer = createShallowRenderer();

  beforeEach(() => {
    shallowRenderer.render(
      <UserList
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
