import { useMutation } from "@tanstack/react-query";
import { getContent } from "../service/omdb";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { ContentSearchParams, ContentType } from "../types/content";
import Input from "../components/ui/input";
import Button from "../components/ui/button";
import { Search } from "lucide-react";
import Select from "../components/ui/select";
import { searchTypeOptions } from "../util/content";
import "../styles/content-page.scss";
import Pagination from "../components/ui/pagination";
import DataTable from "../components/ui/data-table";
import { useNavigate } from "react-router-dom";
import DataStatusBoundry from "../components/data-status-boundry";

const ContentPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [contentSearchParams, setContentSearchParams] =
    useState<ContentSearchParams>({
      title: "Pokemon",
      type: ContentType.Movie,
      releaseYear: "",
    });
  const navigate = useNavigate();
  const { title, type, releaseYear } = contentSearchParams;
  const currentPage = parseInt(searchParams.get("page") || "1");

  const { data, mutate, isPending, isError, isSuccess } = useMutation({
    mutationFn: ({
      contentSearchParams,
      page,
    }: {
      contentSearchParams: ContentSearchParams;
      page: number;
    }) => {
      return getContent(contentSearchParams, page);
    },
  });

  useEffect(() => {
    mutate({ contentSearchParams, page: currentPage });
  }, [currentPage]);

  const onSearchHandle = () => {
    setSearchParams({ page: "1" });
    mutate({ contentSearchParams, page: 1 });
  };

  const onRowClickHandle = (id: string) => {
    navigate(`/content/${id}`);
  };

  const calculateNextPage = (isPrev: boolean) => {
    if (isPrev) {
      setSearchParams({ page: (currentPage - 1).toString() });
      return;
    }
    setSearchParams({ page: (currentPage + 1).toString() });
  };

  const columns: string[] = ["Name", "Release Date", "Type", "IMDb ID"];
  return (
    <div className="content-page">
      <div className="content-page-header flex gap-4 pt-6 pb-4">
        <Input
          id="search-title"
          label="Title"
          placeholder="Title"
          value={title}
          onChange={(event: any) =>
            setContentSearchParams({
              ...contentSearchParams,
              title: event.target.value,
            })
          }
        />
        <Input
          id="search-release-year"
          label="Release Year"
          placeholder="1999"
          value={releaseYear}
          onChange={(event: any) =>
            setContentSearchParams({
              ...contentSearchParams,
              releaseYear: event.target.value,
            })
          }
        />
        <div className="flex flex-col">
          <Select
            label="Type"
            options={searchTypeOptions}
            value={type}
            onChange={(event: any) =>
              setContentSearchParams({
                ...contentSearchParams,
                type: event.target.value,
              })
            }
          />
        </div>

        <div className="flex flex-col justify-end">
          <Button
            disabled={title === ""}
            icon={<Search size={18} />}
            label="Search"
            onClick={() => onSearchHandle()}
          />
        </div>
      </div>
      <div className="content-page-body">
        <DataTable
          columns={columns}
          data={data}
          isPending={isPending}
          onRowClick={onRowClickHandle}
        />
        {(isPending || isError) && (
          <DataStatusBoundry
            isPending={isPending}
            isError={isError}
            isSuccess={isSuccess}
            data={data}
          />
        )}
        <Pagination
          currentPage={currentPage}
          rowCount={data?.totalResults}
          onClick={calculateNextPage}
        />
      </div>
    </div>
  );
};

export default ContentPage;
