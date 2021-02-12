import { $host, $authHost } from './index'
import jwt_decode from 'jwt-decode'


export const registeration = async (email, password) => {
  const {data} = await $host.post('api/user/registration', {email, password, role: 'user'})
  localStorage.setItem('token', data.token)
  return jwt_decode(data.token)
}

export const login = async (email, password) => {
  const {data} = await $host.post('api/user/login', {email, password})
  localStorage.setItem('token', data.token)
  return jwt_decode(data.token)
}

export const logout = async () => {
  localStorage.removeItem('token')
  return {}
}

export const update = async (id, name, surname, email, password) => {
  const {data} = await $host.put(`api/user/update/${id}`, {name, surname, email, password})
  return data
}

export const check = async () => {
  const {data} = await $authHost.get('api/user/auth')
  localStorage.setItem('token', data.token) 
  return jwt_decode(data.token)
}