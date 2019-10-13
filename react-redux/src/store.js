import { createStore } from "redux";
import rotateReducer from "reducers/rotateReducer";

const initialState = {
    items:[]
}
function configureStore(state = initialState) {
  return createStore(rotateReducer,state);
}

export default configureStore;