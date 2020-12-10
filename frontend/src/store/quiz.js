// Action types
const ADD_MEASUREMENT = "ADD_MEASUREMENT";

// Action creators
export const addMeasurement = (item) => {
  return (dispatch) => {
    dispatch({
      type: ADD_MEASUREMENT,
      payload: {
        item,
      },
    });
  };
};

// Reducer
const reducer = (state, action) => {
  if (action.type === ADD_MEASUREMENT) {
    let newMeasure = action.payload.item.measurement;
    let newHealth = action.payload.item.health_goal;
    return { ...state, measurement: newMeasure, health_goal: newHealth };
  }

  return state;
};

export default reducer;
