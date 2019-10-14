const initialState = {
  age: 21
}
export default (state = initialState, action) => {

  switch (action.type) {
    case "AGE_UP_ASYNC":
      return { ...state, age: state.age + action.value, loading: false };
    case "AGE_DOWN":
      return { ...state, age: state.age - action.value };
    case 'LOADING':
      return { ...state, age: state.loading = true };

    default:
      return state;
  }
};