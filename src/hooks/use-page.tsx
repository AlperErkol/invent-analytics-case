import { SetURLSearchParams, useSearchParams } from "react-router-dom";

function usePage(): [number, SetURLSearchParams] {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = parseInt(searchParams.get("page") || "1");

  return [currentPage, setSearchParams];
}

export { usePage };
