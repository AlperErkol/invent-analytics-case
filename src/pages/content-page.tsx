import { useMutation } from "@tanstack/react-query";
import { getContent } from "../service/omdb";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import "../styles/content-page.scss";

const ContentPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [title, setTitle] = useState<string>("Pokemon");
  const currentPage = parseInt(searchParams.get("page") || "1");

  const { data, mutate } = useMutation({
    mutationKey: [title, currentPage],
    mutationFn: async ({ title, page }: { title: string; page: number }) => {
      return await getContent(title, page);
    },
  });

  useEffect(() => {
    mutate({ title, page: currentPage });
  }, [currentPage]);

  const onSearchHandle = () => {
    setSearchParams({ page: "1" });
    mutate({ title, page: 1 });
  };

  const calculateNextPage = (isPrev: boolean) => {
    if (isPrev) {
      setSearchParams({ page: (currentPage - 1).toString() });
      return;
    }
    setSearchParams({ page: (currentPage + 1).toString() });
  };

  return (
    <div className="content-page">
      <div className="content-page-header pt-6 pb-4">
        <input
          type="text"
          placeholder="Search movie, tv series or tv episodes"
          value={title}
          onChange={(event: any) => setTitle(event.target.value)}
        />
        <select name="type" id="type">
          <option value="all">All</option>
          <option value="movie">Movies</option>
          <option value="series">TV Series</option>
          <option value="episode">Episodes</option>
        </select>
        <button onClick={() => onSearchHandle()}>Search</button>
      </div>
      <div className="content-page-body">
        <table className="content-page-body-table">
          <tr>
            <th>Name</th>
            <th>Release Data</th>
            <th>IMDb ID</th>
          </tr>
          {data &&
            data.Search &&
            data.Search.length > 0 &&
            data.Search.map((content: any, index: number) => (
              <tr key={index}>
                <td>{content.Title}</td>
                <td>{content.Year}</td>
                <td>{content.imdbID}</td>
              </tr>
            ))}
        </table>
        <div className="content-page-body-footer">
          {data && <small>{data.totalResults} contents are retrieved.</small>}
          <div>
            <button
              disabled={currentPage === 1}
              onClick={() => calculateNextPage(true)}
            >
              Prev
            </button>
            <button onClick={() => calculateNextPage(false)}>Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentPage;
