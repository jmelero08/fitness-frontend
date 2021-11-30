const initialState = {
    name: "",
    description: "",
  }
  
  const workoutForm = (state=initialState, action) => {
    switch (action.type) {
      case "UPDATE_NEW_WORKOUT_FORM":          
      const returnVal = {
        ...state,
        [action.formData.name]: action.formData.value
      }
      return returnVal
      case "RESET_NEW_WORKOUT_FORM":
        return initialState
      case "SET_FORM_DATA_FOR_EDIT":
        return action.workoutFormData
      default:
        return state    
    }
  }

  export default workoutForm;