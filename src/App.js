import React from 'react';
import './App.css';
import { connect } from 'react-redux'
import { getCurrentUser } from "./actions/currentUser.js"
import NavBar from "./components/NavBar.js"
import Home from "./components/Home.js"
import Login from './components/Login.js'
import Signup from './components/SignUp.js'
import MyWorkouts from './components/MyWorkouts.js'
import WorkoutCard from './components/RestrauantCard';
import NewWorkoutFormWrapper from './components/NewWorkoutFormWrapper'
import EditWorkoutFormWrapper from './components/EditWorkoutFormWrapper'
import { Route, Switch, withRouter } from 'react-router-dom'


class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }

  render(){
    const { loggedIn, workouts } = this.props
    return (
      <div className="App">
        { loggedIn ? <NavBar/> : <Home/> } 
        <Switch>
          <Route exact path='/signup' render={({history})=><Signup history={history}/>}/>
          <Route exact path='/login' component={Login}/>
          <Route exact path='/workouts' component={MyWorkouts}/>
          <Route exact path='/workouts/new' component={NewWorkoutFormWrapper}/>
          <Route exact path='/workouts/:id' render={props => {
            const workout = workouts.find(workout => workout.id === props.match.params.id)
            console.log(workout)
            return <WorkoutCard workout={workout} {...props}/>
            }
          }/>
          <Route exact path='/workouts/:id/edit' render={props => {
            const workout = workouts.find(workout => workout.id === props.match.params.id)
            return <EditWorkoutFormWrapper workout={workout} {...props}/>
            }
          }/>
          </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return ({
    loggedIn: !!state.currentUser,
    workouts: state.myWorkouts
  })
}


export default withRouter(connect(mapStateToProps, { getCurrentUser })(App));