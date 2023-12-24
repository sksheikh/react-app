import React from 'react'
import PropTypes from 'prop-types'

function User(props) {
  const { user } = props;
  const {name, age} =user
  return (
    <div>
      <p>{ props.user.name }</p>
      <p>{ props.user.age }</p>
    </div>
  )
}

User.propTypes = {
  user: PropTypes.object.isRequired,
}

export default User


