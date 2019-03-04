import React from 'react';
import { voteForAnecdote } from '../reducers/anecdoteReducer'
import { connect } from 'react-redux'

const Anecdotes = (props) => {

    const vote = (id) => {
        console.log('vote', id)
        props.dispatch(voteForAnecdote(id))
    }
    console.log('anecdotes', props.anecdotes)
    const anecdotes = props.anecdotes.map(anecdote =>

        <div key={anecdote.id}>
            
            <div>
                {anecdote.content}
            </div>

            <div>
                has {anecdote.votes}
                <button onClick={() => vote(anecdote.id)}>vote</button>
            </div>
            
        </div>
    )

    return (
       anecdotes
    )
}

const mapStateToProps = (state) => {
    // joskus on hyödyllistä tulostaa mapStateToProps:ista...
    console.log(state)
    return {
      anecdotes: state.anecdotes,
      notifications: state.notifications
    }
  }

const ConnectedAnecdotes = connect(mapStateToProps)(Anecdotes)

export default ConnectedAnecdotes


