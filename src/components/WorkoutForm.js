import React from 'react';
import { updateWorkoutForm } from '../actions/workoutForm.js'
import { connect } from 'react-redux'

const WorkoutForm = ({ formData, updateWorkoutForm, handleSubmit, editMode }) => { 

  const { name, description } = formData 

    const handleChange = event => {
        console.log("trigger Handle change")
        const { name, value } = event.target
        updateWorkoutForm(name, value)
    }

    return (
    <form onSubmit={event => {
      event.preventDefault()
      handleSubmit(formData)
    }}>
        <input placeholder="name" name="name" onChange={handleChange} value={name}/><br/>
        <input placeholder="description" name="description" onChange={handleChange} value={description}/><br/>
        <input type="submit" value={editMode ? "Update Workout" : "Create Workout" }/>
    </form>
)};


const mapStateToProps = state => {
    const userId = state.currentUser ? state.currentUser.id : ""
    return {
      formData: state.workoutForm,
      userId
    }
  }

export default connect(mapStateToProps, { updateWorkoutForm })(WorkoutForm);
