import { BASE_URI, tokenKey } from '../components/config';

export async function showUser() {
  const token = sessionStorage.getItem(tokenKey);
  const response = await fetch(`${BASE_URI}/users`, {
    method: 'GET',
    headers: {
      Authorization: `Token token=${token}`,
    },
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
  return user;
}

export async function getListName() {
  const token = sessionStorage.getItem(tokenKey);
  const response = await fetch(`${BASE_URI}/list_name`, {
    method: 'GET',
    headers: {
      Authorization: `Token token=${token}`,
    },
  });
  const list = await response.json();
  let data;
  if (!response.ok) {
    try {
      data = await response.json();
    } catch (error) {
      throw new Error(response.status);
    }
    throw new Error(data.error);
  }
  return list;
}
