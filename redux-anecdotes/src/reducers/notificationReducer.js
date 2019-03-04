const notification = 'a notification'

const initialState = notification

const reducer = (state = initialState, action) => {
    console.log('state now: ', state)
    console.log('action', action)

    switch (action.type) {

        default: {
            console.log('just another print')
        }
    }

    return state
}

export default reducer