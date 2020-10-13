import React from "react";

import CGrid from "@Components/Custom/CGrid";
import CBox from "@Components/Custom/CBox";
import { RootState } from "@Store/reducers";
import { useSelector } from "react-redux";
import { GalleryImage } from "@Components/Custom/Image";
import CircularProgress from "@material-ui/core/CircularProgress/CircularProgress";

const ImageGallery = () => {
  const dogState = useSelector((state: RootState) => state.dogs);

  return (
    <CBox py="2rem">
      {dogState.fetching ? (
        <CircularProgress />
      ) : (
        <CGrid container>
          {dogState.images.map((val, index) => (
            <CGrid item xs={3}>
              <GalleryImage key={index} src={val} />
            </CGrid>
          ))}
        </CGrid>
      )}
    </CBox>
  );
};

export default ImageGallery;
