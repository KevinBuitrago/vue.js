
import { get } from 'axios'

const protocol = 'https://'
const hostgetUser = 'jsonplaceholder.typicode.com/users'
const hostgeTask = 'jsonplaceholder.typicode.com/todos?userId='

function getUsers () {
  const API_URL = `${protocol}${hostgetUser}`
  return get(API_URL, {})
}
function getTask ({ id }) {
  const API_URL = `${protocol}${hostgeTask}${id}`
  return get(API_URL, {})
}

export {
  getUsers,
  getTask
}
