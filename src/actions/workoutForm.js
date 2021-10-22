export const updateWorkoutForm = (name, value) => {
    const formData = { name, value }
    return {
      type: "UPDATE_NEW_WORKOUT_FORM",
      formData
    }
  }
  
  export const resetWorkoutForm = () => {
    return {
      type: "RESET_NEW_WORKOUT_FORM",
    }
  }
  
  export const setFormDataForEdit = workout => {
    const workoutFormData = {
      name: workout.attributes.name,
      description: workout.attributes.description,
    }
    return {
      type: "SET_FORM_DATA_FOR_EDIT",
      workoutFormData
    }
  }