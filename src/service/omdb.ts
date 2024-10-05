import axios from "axios";

const BASE_URL = "https://www.omdbapi.com";

const getContent = async (title: string, page: number) => {
  try {
    const response = await axios.get(
      BASE_URL + `/?s=${title}&page=${page}&apikey=9aea43e0`
    );
    return response.data;
  } catch (error) {
    console.error("An error occured : ", error);
  }
};

export { getContent };
