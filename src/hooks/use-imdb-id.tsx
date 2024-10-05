import { useParams } from "react-router-dom";

function useIMDbId() {
  const { imdbID } = useParams<{ imdbID: string }>();
  return imdbID as string;
}

export { useIMDbId };
