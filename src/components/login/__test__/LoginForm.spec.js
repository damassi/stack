import React from 'react'
import { expect } from 'chai'
import { LoginForm } from 'components/login/LoginForm'
import { createShallowRenderer } from 'utils/testHelpers'

describe('Login', () => {
  const shallowRenderer = createShallowRenderer()

  beforeEach(() => {
    shallowRenderer.render(
      <LoginForm
        loggedIn={false}
      />
    )
  })

  it('should render', () => {
    const loginForm = shallowRenderer.getRenderOutput()
    expect(loginForm).to.exist
  })
})
