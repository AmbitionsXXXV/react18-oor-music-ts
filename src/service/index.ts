import { BASE_URL, TIME_OUT } from './config'
import ETCRequest from './request'

const etcRequest = new ETCRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestSuccessFn: (config) => {
      return config
    }
  }
})

export default etcRequest
