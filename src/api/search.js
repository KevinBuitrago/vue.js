import { get } from 'axios'
import Cookies from 'js-cookie'

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
function setUserLogged (userLogged) {
  Cookies.set('userLogged', userLogged)
}
function getUserLogged () {
  const user = Cookies.get('userLogged')
  return user
}
export {
  getUsers,
  getTask,
  setUserLogged,
  getUserLogged
}
