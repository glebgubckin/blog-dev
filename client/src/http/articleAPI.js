import { $host, $authHost } from './index'

export const getAll = async () => {
  const {data} = await $host.get('api/article/')
  return data
}

export const getOne = async (id) => {
  const {data} = await $host.get(`api/article/${id}`)
  return data
}

export const create = async (title, description, borderColor, access) => {
  const {data} = await $authHost.post('api/article/', {title, description, borderColor, access})
  return data
}

export const update = async (id, title, description, borderColor, access) => {
  const {data} = await $authHost.put(`api/article/${id}`, {title, description, borderColor, access})
  return data
}

export const destroy = async (id) => {
  const {data} = await $authHost.delete(`api/article/${id}`)
  return data
}