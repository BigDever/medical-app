import { createStore } from 'redux'
import {rashArray} from "../../pages/form";

const initialState = {
    rash: rashArray,
    ankets: [],
    name: '',
    lastName: ''
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_TODO':
            return state.concat([action.text])
        default:
            return state
    }
}

export const store = createStore(reducer, typeof window !== "undefined"
    ? window.REDUX_DEVTOOLS_EXTENSION &&
    window.REDUX_DEVTOOLS_EXTENSION()
    : null)
