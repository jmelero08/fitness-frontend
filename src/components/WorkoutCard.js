import React from 'react'
import {Link} from 'react-router-dom'

const WorkoutCard = ({ workout }) => {
  return (
    workout ?
      <div>
        <h3>{workout.attributes.name}</h3>
        <p>{workout.attributes.description}</p>
        <Link to={`/workouts/${workout.id}/edit`}>Edit this Workout</Link>
      </div> :
      <p>This the the Workout card with no Workout!</p>
  )
}

export default WorkoutCard