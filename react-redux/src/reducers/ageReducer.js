const initialState = {
  age: 21
}
export default (state = initialState, action) => {

  switch (action.type) {
    case "AGE_UP":
      return { ...state, age: state.age + action.payload, loading: false };
    case "AGE_DOWN":
      return { ...state, age: state.age - action.payload };
    case 'LOADING':
      return { ...state, age: state.loading = true };

    default:
      return state;
  }
};