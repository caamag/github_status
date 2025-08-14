import axios from "axios";

export const getUserData = async (userName: string) => {
  const response = await axios.get(`https://api.github.com/users/${userName}`);
  return response;
};

export const getRepos = async (userName: string) => {
  const response = await axios.get(
    `https://api.github.com/users/${userName}/repos`
  );
  return response;
};
