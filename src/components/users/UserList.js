import React, { Component } from 'react'
import ImmutablePropTypes from 'react-immutable-proptypes'
import { connect } from 'react-redux'
import ReactCSS from 'react-css-modules'
import User from 'components/users/User'
import styles from 'components/users/UserList.scss'

export class UserList extends Component {

  static propTypes = {
    users: ImmutablePropTypes.list.isRequired
  }

  render() {
    const { users } = this.props

    return (
      <div>
        <h3>
          Users
        </h3>
        <ul className='user-list'>
          { users && users.map((user, index) => {
            return (
              <User
                name={user.get('name')}
                key={`user-${index}`}
              />
            )
          })}
        </ul>
      </div>
    )
  }
}

export default connect(state => ({
  users: state.users.get('users')
}))(ReactCSS(UserList, styles))
