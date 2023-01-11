import { BASE_URI, tokenKey } from '../components/config';

export async function goalsIndex() {
  const token = sessionStorage.getItem(tokenKey);
  const response = await fetch(`${BASE_URI}/goals`, {
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

export async function createGoal(goalData) {
  const token = sessionStorage.getItem(tokenKey);
  const response = await fetch(`${BASE_URI}/goal/create`, {
    method: 'POST',
    headers: {
      Authorization: `Token token=${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(goalData),
  });
  const goal = await response.json();
  let data;
  if (!response.ok) {
    try {
      data = await response.json();
    } catch (error) {
      throw new Error(response.status);
    }
    throw new Error(data.error);
  }
  return goal;
}

export async function showGoal(id) {
  const token = sessionStorage.getItem(tokenKey);
  const response = await fetch(`${BASE_URI}/goal/${id}`, {
    headers: {
      Authorization: `Token token=${token}`,
    },
  });
  const goal = await response.json();
  let data;
  if (!response.ok) {
    try {
      data = await response.json();
    } catch (error) {
      throw new Error(response.status);
    }
    throw new Error(data.error);
  }
  return goal;
}

export async function updateGoal(id, goalData) {
  const token = sessionStorage.getItem(tokenKey);
  const response = await fetch(`${BASE_URI}/goal/${id}`, {
    method: 'PATCH',
    headers: {
      Authorization: `Token token=${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(goalData),
  });
  const goal = await response.json();
  let data;
  if (!response.ok) {
    try {
      data = await response.json();
    } catch (error) {
      throw new Error(response.status);
    }
    throw new Error(data.error);
  }
  return goal;
}
