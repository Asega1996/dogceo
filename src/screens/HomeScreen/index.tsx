import { Container } from "@material-ui/core";
import React from "react";
import CTypography from "@Custom/CTypography";
import CBox from "@Custom/CBox";
import BreedSelector from "./components/BreedSelector";
import ImageGallery from "./components/ImageGallery";

const HomeScreen = () => {
  return (
    <>
      <Container>
        <CBox mt="2rem">
          <CTypography variant="h6">
            Selecciona una raza de perro para que aparezcan imágenes asociadas a
            dicha raza.
          </CTypography>
          <BreedSelector />
          <ImageGallery />
        </CBox>
      </Container>
    </>
  );
};

export default HomeScreen;
