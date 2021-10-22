import React from 'react';
import WorkoutForm from './WorkoutForm'
import { createWorkout } from '../actions/myWorkouts'
import { connect } from 'react-redux'

const NewWorkoutFormWrapper = ({ history, createWorkout }) => {

  const handleSubmit = (formData, userId) => {
    createWorkout({
      ...formData,
      userId
    }, history)
  }
  return  <WorkoutForm history={history} handleSubmit={handleSubmit} />
};

export default connect(null, { createWorkout })(NewWorkoutFormWrapper);