import React from 'react';
import { addAnecdotes } from '../reducers/anecdoteReducer'
import { connect } from 'react-redux'


const NewAnecdote = (props) => {
    console.log('propperooos' , {props})
    const addAnecdote = (event) => {
        event.preventDefault()
        props.dispatch(addAnecdotes(event.target.anecdote.value))
        event.target.anecdote.value = ''
    }

    return (
        <div>
            <h2>create new</h2>
            <form onSubmit={addAnecdote}>
                <input name="anecdote" />
                <button type="submit">lisää</button>
            </form>
        </div>

    )
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        anecdotes: state.anecdotes,
        notifications: state.notifications
    }
}
const ConnectedNewAnecdotes = connect(mapStateToProps)(NewAnecdote)

export default ConnectedNewAnecdotes