import { DogActionTypes } from "./dog.actions";

export const initialState = {
  dog: "",
  image: "",
};

export const dogReducer = (state = initialState, action) => {
  switch (action.type) {
    case DogActionTypes.SET_DOG:
      return {
        ...state,
        dog: action.payload,
      };

    case DogActionTypes.SET_IMAGE:
      return {
        ...state,
        image: action.payload,
      };
    default:
      return state;
  }
};
