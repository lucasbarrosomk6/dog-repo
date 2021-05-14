import React, { useEffect, useState } from "react";
import { Container } from "./styles";

import { DogService } from "services/dog.service";
import { useHistory } from "react-router";
import { setDog } from "redux/dogReducer/dog.actions";
import { connect } from "react-redux";

import CustomSelect from "components/CustomSelect";

const DetailsPage = ({ setDog }) => {
  const [options, setOptions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [breed, setBreed] = useState({});
  const [subBreeds, setSubBreeds] = useState([]);

  const history = useHistory();

  const loadOptions = async () => {
    setLoading(true);
    try {
      const { data } = await DogService.listBreed();
      let breedArray = Object.keys(data.message);
      const optionsArray = breedArray.map((breed) => ({
        label: breed,
        value: breed,
        subBreeds: data.message[breed].map((x) => ({ value: x, label: x })),
      }));
      setLoading(false);
      setOptions(optionsArray);
    } catch (error) {
      setError(error);
    }
  };
  const handleBreedSelect = (selected) => {
    if (!selected.subBreeds.length) {
      setDog(selected.value);
      history.push(`/details/${selected.value}`);
    } else {
      setBreed(selected);
      setSubBreeds(selected.subBreeds);
    }
  };
  const handleSubbreedSelect = (selected) => {
    setDog(`${selected.value} ${breed.value} `);
    history.push(`/details/${selected.value}-${breed.value}`);
  };
  useEffect(() => {
    loadOptions();
  }, [breed]);

  return (
    <Container>
      Are you ready for some Cute Canines?
      <CustomSelect
        onChange={handleBreedSelect}
        loading={loading}
        error={error}
        options={options}
      />
      {!!breed?.subBreeds?.length && (
        <CustomSelect
          onChange={handleSubbreedSelect}
          loading={loading}
          error={error}
          options={subBreeds}
        />
      )}
    </Container>
  );
};

export default connect(null, { setDog })(DetailsPage);
