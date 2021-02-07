import { SERVER_URL } from "../utils/consts";

export const getCharacters = async (params) => {
  const searchParams = new URLSearchParams(params);
  const response = await fetch(`${SERVER_URL}/character?${searchParams.toString()}`);
  return response.json();
};

export const getCharacter = async (id) => {
  const response = await fetch(`${SERVER_URL}/character/${id}`);
  return response.json();
};

export const getEpisode = async (url) => {
  const response = await fetch(url[0]);
  return response.json();
};

export const getEpisodes = async (episodes) => {
  const response = await fetch(`${SERVER_URL}/episode/${episodes}`);
  return response.json();
};
