import React, { useReducer } from 'react'
import axios from 'axios'
import SubscribeContext from './subscribeContext'
import subscribeReducer from './subscribeReducer'
import{
    ADD_SUBSCRIBER,
    SET_ERROR
} from '../types'

const SubscribeState = props => {
    const initialState = {
        subscriber: null,
        error: null
    }

    const [ state, dispatch ] = useReducer(subscribeReducer, initialState);


  //Add Subscriber
  const addSubscriber = async subscriber => {

    const config = {
        headers: {
            'Content-Type' : 'application/json'
        }
    }
    try {
        const res = await axios.post("api/subscribers", subscriber, config);

        dispatch({
            type: ADD_SUBSCRIBER,
            payload: res.data.data
        })
    } catch (error) {
        dispatch({
            type: SET_ERROR,
            payload: error.response.data

        })
    }
  }

    return <SubscribeContext.Provider
        value={{
            subscriber: state.subscriber,
            error: state.error,
            addSubscriber,
        }}>
            {props.children}
    </SubscribeContext.Provider>
}

export default SubscribeState;
