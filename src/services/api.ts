/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { create } from 'apisauce'
import getEnvVars from '../env'


const apiConf = getEnvVars()

const api = create({
  baseURL: apiConf.baseURL,
  headers: apiConf.headers,
  timeout: apiConf.timeout
})


// addPrefix :: String --> String
const addPrefix = (path: string, optionalBaseURL = '') => {
  return optionalBaseURL ? `${optionalBaseURL}/${path}` : `https://dog.ceo/api/${path}`
}

const getConfig = (config: Record<string, unknown>) => ({
  headers: {}, // NOTE: Here will go the authorization token when needed.

  ...config,
})

/* Exported Functions */

function del(path: string, params: Record<string, unknown>, config: Record<string, unknown>) {
  return api.delete(path, params, getConfig(config))
}

function get(path: string, params = {}, config: { optionalBaseUrl?: string } = {}) {
  if (config.optionalBaseUrl) {
    api.setBaseURL(config.optionalBaseUrl)
  }

  return api.get(
    addPrefix(path, config.optionalBaseUrl),
    params,
    getConfig(config)
  )
}

function post(path: string, data: unknown, config: { optionalBaseUrl?: string }) {
  if (config.optionalBaseUrl) {
    api.setBaseURL(config.optionalBaseUrl)
  }
  return api.post(path, data, getConfig(config))
}

function update(path: string, data: unknown, config: Record<string, unknown>) {
  return api.put(path, data, getConfig(config))
}

export default function (resourceName: string, optionalBaseUrl = '') {
  return {
    delete: (id: number) => del(`${resourceName}/${id}`, {}, {}),
    get: (params?: Record<string, unknown>) => get(resourceName, params, { optionalBaseUrl }),
    getOne: (id: number, params?: Record<string, unknown>) =>
    get(`${resourceName}/${id}`, params, { optionalBaseUrl }),
    post: (body: unknown) => post(resourceName, body, { optionalBaseUrl }),
    update: (id: number, body: unknown) => update(`${resourceName}/${id}`, body, {}),
  }
}
