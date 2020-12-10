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
    let added = action.payload.item.measurement;
    let newMeasure = added;
    return { ...state, measurement: newMeasure };
  }

  return state;
};

export default reducer;
