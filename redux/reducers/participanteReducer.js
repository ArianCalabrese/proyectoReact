import {
  AGREGAR_EVENTO,
  RETORNAR_EVENTO,
  CAMBIAR_ASISTENCIA,
} from "../actions/participanteAction";

const default_event_state = {
  eventos: [
    {
      idEvento: "0",
      nombreEvento: "Cumple",
      participantes: [
        {
          indiceParticipante: "0",
          nombreParticipante: "Arian",
          estado: true,
        },
      ],
    },
  ],
};

const event_reducer = (state = default_event_state, action) => {
  switch (action.type) {
    case AGREGAR_EVENTO: {
      console.log(state.eventos);
            console.log("ESTADO");

      return {
        ...state,
        eventos: [...state.eventos, action.payload],
      };
    }
    case RETORNAR_EVENTO: {
      return {
        ...state,
        eventos: [...state.eventos],
      };
    }
    case CAMBIAR_ASISTENCIA: {
      //state[action.payload.idEvento].participantes = action.payload.valoresEstadoParticipante;
      const hola = state.eventos[action.payload.idEvento].participantes;
      console.log("COMIDA");
      console.log({hola});
      //console.log(action.payload.valoresEstadoParticipante);
      console.log("COMIDA");
      return {
        ...state,
        eventos: [...state.eventos],
      };
    }
    default:
      return state;
  }
};

export default event_reducer;
