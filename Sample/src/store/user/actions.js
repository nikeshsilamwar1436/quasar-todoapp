/*
export const someAction = (state) => {}
 */
import { axiosInstance } from 'boot/axios'
import { LocalStorage } from 'quasar'

export const login = (context, credentials) => {
  return new Promise((resolve, reject) => {
    axiosInstance.post('/Registers', {
      email: credentials.email,
      password: credentials.password
    })
      .then(response => {
        console.log(response.data.accessToken)
        LocalStorage.set('token', response.data.accessToken)
        resolve(response)
      })
      .catch(error => {
        console.log(error)
        reject(error)
      })
  })
}
export const register = (commit, creds) => {
  return axiosInstance.post('/Registers', creds)
    .then(res => {
      console.log(res.data.accessToken)
      LocalStorage.set('token', res.data.accessToken)
    })
}
export const task = (commit, creds) => {
  return axiosInstance.post('/TaskDetails', creds)
    .then(res => {
      console.log(res.data.accessToken)
      LocalStorage.set('token', res.data.accessToken)
    })
}
export const deletetask = (commit, creds) => {
  return axiosInstance.delete('/TaskDetails', {
    taskid: creds.taskId
  })
}
export const logout = (commit, creds) => {
  localStorage.removeItem('token')
  localStorage.removeItem('expiration')
}
