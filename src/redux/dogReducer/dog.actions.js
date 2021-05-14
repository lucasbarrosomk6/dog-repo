export const DogActionTypes = {
  SET_DOG: "SET_DOG",
  SET_IMAGE: "SET_IMAGE",
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
