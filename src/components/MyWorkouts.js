import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const MyWorkouts = props => {
    const workoutCards = props.workouts.length > 0 ?
     props.workouts.map(r => (<p key={r.id}><Link to={`/workouts/${r.id}`}>{r.attributes.name}</Link></p>)) : null
     
    return workoutCards
    
}


const mapStateToProps = state => {
    return {
        workouts: state.myWorkouts
    }
}

export default connect(mapStateToProps)(MyWorkouts)