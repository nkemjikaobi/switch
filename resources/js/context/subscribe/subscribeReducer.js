import{
    ADD_SUBSCRIBER,
    SET_ERROR
} from '../types'

const subscribeReducer = (state, action) => {
    switch(action.type){
        case ADD_SUBSCRIBER:
            return {
                ...state,
                subscriber: action.payload,
            }
        case SET_ERROR:
            return {
                ...state,
                error: action.payload,
            }
        default:
            return state;
    }
}

export default subscribeReducer