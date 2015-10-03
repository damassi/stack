import React from 'react'
import Immutable, { Map, List } from 'immutable'
import { expect } from 'chai'
import { UserList } from 'components/users/UserList'
import { createShallowRenderer } from 'utils/testHelpers'

describe('Login', () => {
  const shallowRenderer = createShallowRenderer()

  beforeEach(() => {
    shallowRenderer.render(
      <UserList
        users={Immutable.fromJS([
          {
            name: 'chris',
          },
          {
            name: 'katy'
          }
        ])}
      />
    )
  })

  it('should render', () => {
    const users = shallowRenderer.getRenderOutput()
    expect(users).to.exist
  })
})
