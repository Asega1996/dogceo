import { IReduxAction } from "..";
import {
  FETCH_BREED,
  FETCH_BREED_DONE,
  FETCH_BREED_ERROR,
  FETCH_BREED_IMAGE,
  FETCH_BREED_IMAGE_DONE,
  FETCH_BREED_IMAGE_ERROR,
} from "./constants";

export const fetchBreeds = (): IReduxAction => {
  return {
    type: FETCH_BREED,
  };
};

export const fetchBreedsDone = (breeds: string[]): IReduxAction => {
  return { type: FETCH_BREED_DONE, payload: breeds };
};

export const fetchBreedsError = (): IReduxAction => {
  return { type: FETCH_BREED_ERROR };
};

export const fetchBreedImage = (breed: string): IReduxAction => {
  return { type: FETCH_BREED_IMAGE, payload: breed };
};

export const fetchBreedImageDone = (images: string[]): IReduxAction => {
  return { type: FETCH_BREED_IMAGE_DONE, payload: images };
};

export const fetchBreedImageError = (): IReduxAction => {
  return { type: FETCH_BREED_IMAGE_ERROR };
};
