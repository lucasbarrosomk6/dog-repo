//action types listed in object to prevent possible typo related error

export const DogActionTypes = {
  SET_DOG: "SET_DOG",
  SET_IMAGE: "SET_IMAGE",
};

export const initialState = {
  dog: "",
  image: "",
};
export const setDog = (payload) => {
  console.log({ payload });
  return {
    type: DogActionTypes.SET_DOG,
    payload,
  };
};
export const setImage = (payload) => {
  console.log({ payload });
  return {
    type: DogActionTypes.SET_IMAGE,
    payload,
  };
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
