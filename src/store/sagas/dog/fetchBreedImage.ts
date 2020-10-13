import { call, put, takeLatest } from "redux-saga/effects";

import { fetchBreedImageDone, fetchBreedImageError } from "@Store/actions/dog";
import { getImages } from "@Services/apis/dog";
import { FETCH_BREED_IMAGE } from "@Store/actions/dog/constants";
import { IReduxAction } from "@Store/actions";

function* fetchBreeds({ payload }: IReduxAction) {
    
  try {
      let response = yield call(getImages, payload.replace("-", "/"));
      
      console.log(response)

    if (response.ok) {
      let result = response.data.message;

      yield put(fetchBreedImageDone(result));
    } else {
      yield put(fetchBreedImageError());
    }
  } catch (error) {
    yield put(fetchBreedImageError());
  }
}

export default function* () {
  yield takeLatest(FETCH_BREED_IMAGE, fetchBreeds);
}
