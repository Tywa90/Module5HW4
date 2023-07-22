import apiClient from "../client";

export const getById = (resourcePath: string, id: string) => apiClient({
  path: `${resourcePath}/${id}`,
  method: 'GET'
})

export const getByPage = (resourcePath: string, page: number) => apiClient({
  path: `${resourcePath}?page=${page}`,
  method: 'GET'
})
