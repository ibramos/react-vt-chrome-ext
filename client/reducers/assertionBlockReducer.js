import React, { Component } from 'react';

function assertionBlockReducer(state = { name: '', asserts: [] }, action) {
  let newState;
  // console.log('in assertion block reducer');
  switch(action.type) {
    case 'NEW_ASSERTION_BLOCK':
      newState = Object.assign({}, state);
      newState.name = action.name;
      newState.asserts = [];
      return newState;
    case 'SAVE_ASSERTION':
      newState = Object.assign({}, state);
      newState.asserts = state.asserts.slice()
      console.log('inside of save assert reducer', newState, action)
      newState.asserts.push(action.payload);
      return newState;
    case 'SEND_ASSERTION_BLOCK':
      updateArray = state.slice()
      updateArray.splice(0,1, action.payload)
      console.log('SEND_ASSERTION_BLOCK', updateArray)
      return updateArray
    case 'DELETE_ASSERTION_BLOCK':
      console.log('DELETE ASSERTION BLOCK', [...state.slice(0, action.payload), ...state.slice(action.payload+1)]  )
      return [...state.slice(0, action.payload), ...state.slice(action.payload+1)]   
    case 'EMPTY_ASSERTION_BLOCK':
      updateArray = []
      return updateArray
    default:
      return state;
  }
}

export default assertionBlockReducer;
