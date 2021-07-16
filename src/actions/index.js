import axios from 'axios';

//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.
export const SET_SMURF_FETCH = 'SET_SMURF_FETCH';
export const SUCCESS_SMURF_FETCH = 'SUCCESS_SMURF_FETCH';
export const FAILED_SMURF_FETCH = 'FAILED_SMURF_FETCH';
export const ADD_SMURF = 'ADD_SMURF';
export const SMURF_ERROR = 'SMURF_ERROR';

export const fetchSmurfs = () => {
  return(dispatch) => {
    dispatch({type: SET_SMURF_FETCH});

    axios.get('http://localhost:3333/smurfs')
    .then(res => {
      console.log('testing res',res)
      dispatch({type: SUCCESS_SMURF_FETCH, payload: res.data})
    })
    .catch(err => {
      dispatch({FAILED_SMURF_FETCH, payload: err})
    })
  }
}

export const addNewSmurf = (Name, Position, Nickname, Summary) => {
  return {
    type: ADD_SMURF,
    payload: {
      name: Name, 
      position: Position, 
      nickname: Nickname, 
      summary: Summary
    }
  };
};

export const errorMessages = error => {
  return {
    type: SMURF_ERROR,
    payload: {error: "Name, position and nickname fields are required."}
  }
}