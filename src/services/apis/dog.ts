import create from "@Services/api"

// API's
const apiRaw = create('breeds/list/all')
const apiWithBreed = (breed: string) => create(`breed/${breed}/images`)


// API calls
export const getRace = () => apiRaw.get()

export const getImages = (breed: string) => apiWithBreed(breed).get()
