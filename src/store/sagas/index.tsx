import { all } from "redux-saga/effects";

import fetchBreedsSaga from "@Store/sagas/dog/fetchBreeds";
import fetchBreedImage from "@Store/sagas/dog/fetchBreedImage";

export default function* rootSaga() {
  yield all([fetchBreedsSaga(), fetchBreedImage()]);
}
