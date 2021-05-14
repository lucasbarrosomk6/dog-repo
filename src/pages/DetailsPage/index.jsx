import CustomButton from "components/CustomButton";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { DogService } from "services/dog.service";
import { Container, Image, ConsolationDog } from "./styles";
import { setDog, setImage } from "redux/dogReducer/dog.actions";
import { connect } from "react-redux";
const DetailsPage = ({ dog, image, setImage, setDog }) => {
  const [error, setError] = useState(false);
  const [consolationDog, setConsolationDog] = useState("");
  let { breed } = useParams();
  const history = useHistory();

  const getDogInfo = async () => {
    setImage("");
    const processedBreed = breed.includes("-") ? breed.split("-")[1] : breed; //api cant handle dogs like "english hound" just "hound", hence the split
    try {
      const { data } = await DogService.randomImageByBreed(processedBreed); //
      setImage(data.message);
    } catch (err) {
      setError(err);
      // I know this is not part of the assignment, but you came for dog pics, how can I not deliver?
      const { data } = await DogService.randomImage();
      setConsolationDog(data.message);
    }
  };

  useEffect(() => {
    if (!dog) {
      //case: details page refresh resulted in no
      setDog(breed.replace("-", " "));
    }
    getDogInfo();
  }, []);

  if (error) {
    return (
      <Container>
        {error.response.status === 404
          ? "Sorry, we couldnt find that breed."
          : "Sorry, dogs no longer exist"}
        {!!consolationDog.length && (
          <ConsolationDog>
            here is a consolation dog:
            <Image src={consolationDog} />
          </ConsolationDog>
        )}
        <CustomButton onClick={() => history.push("/")}>Go Back</CustomButton>
      </Container>
    );
  }
  return (
    <Container>
      <p data-testid="dogname">{dog}</p>
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
