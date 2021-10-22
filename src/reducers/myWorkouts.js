const initialState = []

export default (state = initialState, action) => {
  switch (action.type) {
    case "SET_MY_WORKOUTS":
      return action.workouts
    case "ADD_WORKOUT":
      return state.concat(action.workout)
    case "UPDATE_WORKOUT":
      return state.map(workout => workout.id === action.workout.id ? action.workout : workout)
    case "DELETE_WORKOUT":
      return state.filter(workout => workout.id === action.workoutId ? false : true)
    case "CLEAR_WORKOUTS":
      return initialState
    default:
      return state
  }
}