const API_URL = "https://api.github.com/search/users?q=";
import axios from 'axios';

const token = import.meta.env.VITE_APP_GITHUB_API_KEY;

const githubAPI = axios.create({
  baseURL: 'https://api.github.com',
  headers: {
    Authorization: token ? `token ${token}` : undefined,
  },
});

// Function to fetch user data by username
export const fetchUserData = async (username) => {
  const response = await githubAPI.get(`/users/${username}`);
  return response.data;
};

export const fetchAdvancedUserSearch = async (username, location, minRepos) => {
  let query = '';

  if (username) query += `${username} in:login`;
  if (location) query += ` location:${location}`;
  if (minRepos) query += ` repos:>=${minRepos}`;

  const response = await githubAPI.get(`/search/users?q=${query}`);
  return response.data;
};
