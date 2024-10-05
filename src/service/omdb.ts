import axios from "axios";
import { ContentSearchParams } from "../types/content";

const BASE_URL = "https://www.omdbapi.com";

const getContent = async (searchParams: ContentSearchParams, page: number) => {
  const { title, releaseYear, type } = searchParams;
  try {
    const response = await axios.get(
      BASE_URL +
        `/?s=${title}&y=${releaseYear}&type=${type}&page=${page}&apikey=9aea43e0`
    );
    return response.data;
  } catch (error) {
    console.error("An error occured during getContent : ", error);
  }
};

const getContentById = async (id: string) => {
  try {
    const response = await axios.get(BASE_URL + `/?i=${id}&apikey=9aea43e0`);
    return response.data;
  } catch (error) {
    console.error("An error occured during getContentById : ", error);
  }
};

export { getContent, getContentById };
