// Action types
const ADD_PROFILE = "ADD_PROFILE";

// Action creators
export const addProfile = (item) => {
  return (dispatch) => {
    dispatch({
      type: ADD_PROFILE,
      payload: {
        item,
      },
    });
  };
};

// Reducer
const reducer = (state, action) => {
  if (action.type === ADD_PROFILE) {
    console.log(action.payload.item);
    let newHeight = action.payload.item.height;
    let newWeight = action.payload.item.weight;
    let newGoalWeight = action.payload.item.goal_weight;
    let newHealth = action.payload.item.health_goal;
    return {
      ...state,
      height: newHeight,
      weight: newWeight,
      goal_weight: newGoalWeight,
      health_goal: newHealth,
    };
  }

  return state;
};

export default reducer;
