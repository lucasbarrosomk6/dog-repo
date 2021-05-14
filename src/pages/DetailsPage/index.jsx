import CustomButton from "components/CustomButton";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { DogService } from "services/dog.service";
import { Container, Image } from "./styles";
import { setDog, setImage } from "redux/dogReducer/dog.reducer";
import { connect } from "react-redux";
const DetailsPage = ({ dog, image, setImage, setDog }) => {
  let { breed } = useParams();
  const history = useHistory();
  const getDogInfo = async () => {
    const processedBreed = breed.includes("-") ? breed.split("-")[1] : breed; //api cant handle dogs like "english hound" just "hound", hence the split
    const { data } = await DogService.randomImageByBreed(processedBreed);
    setImage(data.message);
  };
  useEffect(() => {
    if (!dog) {
      //case: details page refresh resulted in no
      setDog(breed.replace("-", " "));
    }
    getDogInfo();
  }, []);
  useEffect(() => {
    getDogInfo();
  }, []);

  return (
    <Container>
      {dog}
      <Image src={image} />
      <CustomButton onClick={() => history.push("/")}>Go Back</CustomButton>
    </Container>
  );
};
const mapStateToProps = (state) => ({
  dog: state.dogReducer.dog,
  image: state.dogReducer.image,
});
export default connect(mapStateToProps, { setImage, setDog })(DetailsPage);
