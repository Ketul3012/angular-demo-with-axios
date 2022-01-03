import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios"
import { environment } from "../environments/environment"

// set values for all axios requests
axios.defaults.baseURL = environment.baseUrl
axios.defaults.headers.common["Authorization"] = "" // set this to token returned by server after user logs in
axios.defaults.timeout = 60000

export function getRequest<T>(
  endPoint: string,
  parameters: any = "",
  url: string = "",
  header: any = axios.defaults.headers
) {
  if (url !== "") {
    axios.defaults.baseURL = url
  }
  axios.defaults.headers = {
    ...header,
  }

  return new Promise<AxiosResponse<T>>((resolve, reject) => {
    axios
      .get(endPoint, {
        params: parameters === undefined || parameters === null ? "" : parameters,
      })
      .then(function (response: AxiosResponse<T>) {
        resolve(response)
      })
      .catch(function (error: AxiosError) {
        const errorResponse: AxiosResponse | undefined = error.response
        let errorMessage = errorResponse ? errorResponse.data.StatusMessage : error.message
        if (!errorMessage) {
          errorMessage = "Something went wrong, please try again"
        }
        if (errorResponse && errorResponse.data.StatusMessage === "Network Error") {
          reject(errorResponse.data)
        } else {
          if (errorResponse?.status === 401) {
            reject(errorResponse.data)
          } else {
            reject(errorResponse?.data)
          }
        }
      })
  })
}

export function postRequest<T>(
  endPoint: string,
  parameters: any = {},
  header: any = axios.defaults.headers,
  requestConfig: AxiosRequestConfig | undefined = undefined
) {
  // set this to token returned by server after user logs in
  axios.defaults.headers = {
    ...header,
  }

  return new Promise<AxiosResponse<T>>((resolve, reject) => {
    axios
      .post(endPoint, parameters, requestConfig)
      .then((response: AxiosResponse<T>) => {
        resolve(response)
      })
      .catch((error: AxiosError) => {
        const errorResponse: AxiosResponse | undefined = error.response
        let errorMessage = errorResponse ? errorResponse.data.StatusMessage : error.message
        if (!errorMessage) {
          errorMessage = "Something went wrong, please try again"
        }
        if (errorResponse && errorResponse.data.StatusMessage === "Network Error") {
          reject(errorResponse.data)
        } else {
          if (errorResponse?.status === 401) {
            reject(errorResponse.data)
          } else {
            reject(errorResponse?.data)
          }
        }
      })
  })
}
