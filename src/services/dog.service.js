import axios from "axios";

const baseUrl = "https://dog.ceo/api";
export const DogService = {
  listBreed: () => axios.get(`${baseUrl}/breeds/list/all`),
  listSubBreed: (breed) => axios.get(`${baseUrl}/breed/${breed}/list`),
  randomImageByBreed: (breed) =>
    axios.get(`${baseUrl}/breed/${breed}/images/random`),
};
