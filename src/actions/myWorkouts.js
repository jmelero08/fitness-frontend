import { resetWorkoutForm} from './WorkoutForm'


export const setMyWorkouts = workouts => {
    return {
        type: "SET_MY_WORKOUTS",
        workouts
    }
}

export const clearWorkouts = () => {
  return {
    type: "CLEAR_WORKOUTS"
  }
}

export const addWorkout = workout => {
  return {
    type: "ADD_WORKOUT",
    workout
  }
}

export const deleteWorkoutSuccess = workoutId => {
  return {
    type: "DELETE_WORKOUT",
    workoutId
  }
}

export const updateWorkoutSuccess = workout => {
  return {
    type: "UPDATE_WORKOUT",
    workout
  }
}

export const getMyWorkouts = () => {
    return dispatch => {
      return fetch("http://localhost:3001/api/v1/workouts", {
        credentials: "include",
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        },
      })
        .then(r => r.json())
        .then(response => {
          if (response.error) {
            alert(response.error)
          } else {
            dispatch(setMyWorkouts(response.data))
          }
        })
        .catch(console.log)
    }
  }


export const createWorkout = (workoutData, history) => {
  return dispatch => {
    const sendableWorkoutData = {
      name: workoutData.name,
      description: workoutData.description,
      user_id: workoutData.userId
    }
    return fetch("http://localhost:3001/api/v1/workouts", {
      credentials: "include",
      method: "POST",
      headers: {
        "content-Type": "application/json"
      },
      body: JSON.stringify(sendableWorkoutData)
    })
    .then(r => r.json())
    .then(resp => {
      if (resp.error) {
        alert(resp.error)
      } else {
        dispatch(addWorkout(resp.data))
        dispatch(resetWorkoutForm())
        history.push(`/workouts/${resp.data.id}`)
      }
    })
    .catch(console.log)

  }
}  

export const updateWorkout = (workoutData, history) => {
  return dispatch => {
    const sendableWorkoutData = {
      name: workoutData.name,
      description: workoutData.description,
    }
    return fetch(`http://localhost:3001/api/v1/workouts/${workoutData.workoutId}`, {
      credentials: "include",
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(sendableWorkoutData)
    })
      .then(r => r.json())
      .then(resp => {
        if (resp.error) {
          alert(resp.error)
        } else {
          dispatch(updateWorkoutSuccess(resp.data))
          history.push(`/workouts/${resp.data.id}`)
        }
      })
      .catch(console.log)
  }
}

export const deleteWorkout = (workoutId, history) => {
  return dispatch => {
    return fetch(`http://localhost:3001/api/v1/workouts/${workoutId}`, {
      credentials: "include",
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(r => r.json())
      .then(resp => {
        if (resp.error) {
          alert(resp.error)
        } else {
          dispatch(deleteWorkoutSuccess(workoutId))
          history.push(`/workouts`)
        }
      })
      .catch(console.log)
  }
}