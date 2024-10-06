import axios from "axios";
import { ContentSearchParams } from "../types/content";

const BASE_URL = process.env.REACT_APP_OMDB_API_BASE_URL;
const API_KEY = process.env.REACT_APP_OMDB_API_KEY;

const getContent = async (searchParams: ContentSearchParams, page: number) => {
  const { title, releaseYear, type } = searchParams;
  try {
    const response = await axios.get(
      BASE_URL +
        `/?s=${title}&y=${releaseYear}&type=${type}&page=${page}&apikey=${API_KEY}`
    );
    return response.data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

const getContentById = async (id: string) => {
  try {
    const response = await axios.get(BASE_URL + `/?i=${id}&apikey=${API_KEY}`);
    return response.data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export { getContent, getContentById };
