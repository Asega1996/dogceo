import { call, put, takeLatest } from "redux-saga/effects";

import { fetchBreedsDone, fetchBreedsError } from "@Store/actions/dog";
import { getRace } from "@Services/apis/dog";
import { FETCH_BREED } from "@Store/actions/dog/constants";
import { transformKeyValueJSON } from "@Utils/utils";

function* fetchBreeds() {
  try {
    let response = yield call(getRace);

    if (response.ok) {
      let result = transformKeyValueJSON(response.data.message)
      yield put(fetchBreedsDone(result));
    } else {
      yield put(fetchBreedsError());
    }
  } catch (error) {
    yield put(fetchBreedsError());
  }
}

export default function* () {
  yield takeLatest(FETCH_BREED, fetchBreeds);
}
