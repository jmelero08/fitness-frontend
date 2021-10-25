import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import Logout from './Logout'

const NavBar = ({ currentUser, loggedIn }) => {
  return (
    <div className="NavBar">
      <h3>Workout Tracker</h3>
      <span className="NavLink"><NavLink exact activeClassName="active" to="/workouts"  >My Workouts</NavLink></span>
      <span className="NavLink"><NavLink exact activeClassName="active" to="/workouts/new" >New Workout</NavLink></span>
      { currentUser ? <span className="Greeting">Hi {currentUser.attributes.name}!</span> : "" }
      <span className="Logout">{ currentUser ? <Logout/> : null }</span>
    </div>
  )
}

const mapStateToProps = ({currentUser}) => {
    return ({
      currentUser,
    })
}

export default connect (mapStateToProps)(NavBar)