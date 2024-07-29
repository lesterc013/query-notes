import axios from 'axios'

const baseUrl = 'http://localhost:3001/notes'

export const getNotes = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

export const createNote = (newNote) =>
  axios.post(baseUrl, newNote).then((res) => res.data)

export const updateNote = async (updatedNote) => {
  const response = await axios.put(`${baseUrl}/${updatedNote.id}`, updatedNote)
  return response.data
}
