import { BASE_URI, tokenKey } from '../components/config';

export async function login(credentials) {
  const response = await fetch(`${BASE_URI}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials),
  });
  const user = await response.json();
  let data;
  if (!response.ok) {
    try {
      data = await response.json();
    } catch (error) {
      throw new Error(response.status);
    }
    throw new Error(data.error);
  }
  sessionStorage.setItem(tokenKey, user.token);
  return user;
}
