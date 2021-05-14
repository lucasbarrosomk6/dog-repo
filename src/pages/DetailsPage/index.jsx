import CustomButton from "components/CustomButton";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { DogService } from "services/dog.service";
import { Container, Image } from "./styles";
import {
  dogReducer,
  DogActionTypes,
  initialState,
  setImage,
} from "redux/dogReducer/dog.reducer";
import { connect } from "react-redux";
const DetailsPage = ({ dog, image, setImage }) => {
  let { breed } = useParams();
  const history = useHistory();
  const getDogInfo = async () => {
    const { data } = await DogService.randomImageByBreed(breed);
    setImage(data.message);
  };
  useEffect(() => {
    getDogInfo();
  }, []);
  console.log({ dog });
  return (
    <Container>
      {dog}
      <Image src={image} />
      <CustomButton onClick={() => history.push("/")}>Go Back</CustomButton>
    </Container>
  );
};
const mapStateToProps = (state) => ({
  dog: state.dog,
  image: state.image,
});
export default connect(mapStateToProps, { setImage })(DetailsPage);
