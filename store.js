import { createStore } from "redux";

//const createStore = require("redux").createStore;
//const combineReducers = require('redux').combineReducers;

//ACTIONS
const ADD_PART = "ADD_PART";
const REM_PART = "REM_PART";

const add_part_action = (id, nombre) => {
  //ACCION EN SI
  return {
    type: ADD_PART,
    payload: {
      id: id,
      name: nombre,
      asiste: false,
    },
  };
};

const rem_part_action = (nombre) => {
  return {
    type: REM_PART,
    payload: nombre,
  };
};
//REDUCER
const default_event_state = {
  participants: [],
};

const event_reducer = (state = default_event_state, action) => {
  switch (action.type) {
    case ADD_PART: {
      return {
        ...state,
        participants: [...state.participants, action.payload],
      };
    }
    case REM_PART: {
        const arrayP = state.participants.filter(participante => participante.name !== action.payload);
      return {
        ...state,
        participants: arrayP,
      };
    }
    default:
      return state;
  }
};

//STORE

const store = createStore(event_reducer);
console.log("Estado inicial: ", store.getState());
store.subscribe(() => {
  console.log("cambio de estado", store.getState());
});
store.dispatch(add_part_action(3, "Arian"));
store.dispatch(add_part_action(4, "Tomas"));
store.dispatch(rem_part_action("Arian"));
