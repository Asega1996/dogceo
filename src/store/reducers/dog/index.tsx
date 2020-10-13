import { IReduxAction } from "@Store/actions";
import {
  FETCH_BREED,
  FETCH_BREED_DONE,
  FETCH_BREED_ERROR,
  FETCH_BREED_IMAGE,
  FETCH_BREED_IMAGE_DONE,
  FETCH_BREED_IMAGE_ERROR,
} from "@Store/actions/dog/constants";

export type IDogState = {
  races: string[];
  images: string[];
  fetching: Boolean;
  error: Boolean;
};

const initialState: IDogState = {
  races: [],
  images: [],
  fetching: false,
  error: false,
};

export const dogReducer = (
  state: IDogState = initialState,
  action: IReduxAction
): IDogState => {
  switch (action.type) {
    case FETCH_BREED:
      return {
        ...state,
        fetching: true,
      };
    case FETCH_BREED_DONE:
      return {
        ...state,
        fetching: false,
        races: action.payload,
      };
    case FETCH_BREED_ERROR:
      return {
        ...state,
        races: [],
        fetching: false,
        error: true,
      };

    case FETCH_BREED_IMAGE:
      return {
        ...state,
        fetching: true,
      };

    case FETCH_BREED_IMAGE_DONE:
      return {
        ...state,
        images: action.payload,
        fetching: false,
      };

    case FETCH_BREED_IMAGE_ERROR:
      return {
        ...state,
        fetching: false,
        error: true,
      };
    default:
      return initialState;
  }
};
