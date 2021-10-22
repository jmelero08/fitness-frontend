import React from 'react';
import WorkoutForm from './WorkoutForm'
import { updateWorkout, deleteWorkout } from '../actions/myWorkouts'
import { setFormDataForEdit, resetWorkoutForm } from '../actions/workoutForm'
import { connect } from 'react-redux'

class EditWorkoutFormWrapper extends React.Component {
  componentDidMount(){
    this.props.workout && this.props.setFormDataForEdit(this.props.workout)
  }

  componentDidUpdate(prevProps) {
    this.props.workout && !prevProps.workout && this.props.setFormDataForEdit(this.props.workout)
  }

  componentWillUnmount() {
    this.props.resetWorkoutForm()
  }

  handleSubmit = (formData) => {
    const { updateWorkout, workout, history } = this.props
    updateWorkout({
      ...formData,
      workoutId: workout.id
    }, history)
  }

  render() {
    const { history, deleteWorkout, workout } = this.props
    const workoutId = workout ? workout.id : null
    return  <>
              <WorkoutForm editMode handleSubmit={this.handleSubmit} />
              <br/>
              <button style={{color: "red"}} onClick={()=>deleteWorkout(workoutId, history)}>Delete this Workout</button>
            </>
  }
};

export default connect(null, { updateWorkout, setFormDataForEdit, resetWorkoutForm, deleteWorkout })(EditWorkoutFormWrapper);