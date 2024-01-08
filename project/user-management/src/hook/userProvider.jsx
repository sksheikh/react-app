import React, {useReducer, useState} from 'react'
import { userContext } from '../useContext'
import {initialState} from '../reducer/useReducer';

const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_USER':
            return [
                ...state,
                {
                    id: new Date().getTime().toString(),
                    name: action.payload
                }
            ]

            break;

        case 'DELETE_USER':
            const filterdUser = state.filter((user) => {
                return user.id !== payload.id
            });
            return filterdUser;
            break;
    
        default:
            return state;
            break;
    }
}

console.log(initialState);
export default function userProvider({children}) {
    const {state, dispatch} = useReducer(reducer, initialState)

  return (
    <>
        <userContext.Provider value={{state, dispatch}}>
            {children}
        </userContext.Provider>
      
    </>
  )
}
