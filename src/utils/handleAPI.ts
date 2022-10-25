import axios from 'axios';

const handleAPI = axios.create({
  baseURL: 'http://localhost:3333',
});

export async function userLogin(email: string, password: string): Promise<void> {
  const result = await handleAPI
    .post('/auth/login', {
      email,
      password,
    })
    .then((response) => response.data)
    .catch((error) => console.log(error));
  return result;
}

export async function userRegister(name: string, email: string, password: string): Promise<void> {
  const result = await handleAPI
    .post('/user', {
      name,
      email,
      password,
    })
    .then((response) => response.data)
    .catch((error) => console.log(error));
  return result;
}
