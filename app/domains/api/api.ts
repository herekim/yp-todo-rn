export const API_ROOT = 'http://3.35.194.197:8000'

export const API_PATH = {
  TODO: 'todo',
}

export const API = {
  GET_TODOS: `${API_ROOT}/${API_PATH.TODO}/`,
  CREATE_TODO: `${API_ROOT}/${API_PATH.TODO}/`,
  UPDATE_TODO: (id: number) => `${API_ROOT}/${API_PATH.TODO}/${id}/`,
  DELETE_TODO: (id: number) => `${API_ROOT}/${API_PATH.TODO}/${id}/`,
}
