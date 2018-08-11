import axios from 'axios';

function getUsers() {
  return axios.get(`https://jsonplaceholder.typicode.com/users`);
}

function getUser(id) {
  return axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
}

var userUtils = {
  getUsers,
  getUser,
};

// can `import { getUser } from ...`
export { getUsers, getUser };

// cannot `import { getUser } from ...`
export default userUtils;
