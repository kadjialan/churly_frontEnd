import { httpClient } from './axios';

export function register(user) {
  return httpClient.post(`users`, user);
}

export function login(email, password) {
  return httpClient.post('login', { email, password });
}

