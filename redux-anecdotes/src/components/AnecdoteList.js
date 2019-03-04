import React from 'react';
import { voteForAnecdote } from '../reducers/anecdoteReducer'

const Anecdotes = ({ store }) => {

    const vote = (id) => {
        console.log('vote', id)
        store.dispatch(voteForAnecdote(id))
    }

    const anecdotes = store.getState().map(anecdote =>

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

export default Anecdotes


