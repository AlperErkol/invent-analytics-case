import { useEffect, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { Search } from "lucide-react";
import { getContent } from "../api/omdb";
import { usePage } from "../hooks/use-page";
import { ContentSearchParams, ContentType } from "../types/content";
import { searchTypeOptions, tableColumnFields } from "../util/content";
import DataStatusBoundry from "../components/data-status-boundry";
import Input from "../components/ui/input";
import Button from "../components/ui/button";
import Select from "../components/ui/select";
import DataTable from "../components/ui/data-table";
import "../styles/content-page.scss";

const ContentPage = () => {
  const [currentPage, setSearchParams] = usePage();
  const [contentSearchParams, setContentSearchParams] =
    useState<ContentSearchParams>({
      title: "Pokemon",
      type: ContentType.Movie,
      releaseYear: "",
    });

  const { data, mutate, isPending, isError, error } = useMutation({
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

  const { title, type, releaseYear } = contentSearchParams;
  const onSearchHandle = (event: any) => {
    event.preventDefault();
    setSearchParams({ page: "1" });
    mutate({ contentSearchParams, page: 1 });
  };

  const handleInputChange =
    (field: keyof ContentSearchParams) =>
    (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      setContentSearchParams((prev) => ({
        ...prev,
        [field]: event.target.value,
      }));
    };

  return (
    <div className="content-page">
      <form
        onSubmit={(event: any) => onSearchHandle(event)}
        className="flex gap-4 pt-6 pb-4"
      >
        <Input
          data-testid="search-title"
          id="search-title"
          label="Title"
          placeholder="Title"
          value={title}
          onChange={handleInputChange("title")}
        />
        <Input
          data-testid="search-release-year"
          id="search-release-year"
          label="Release Year"
          placeholder="1999"
          value={releaseYear}
          onChange={handleInputChange("releaseYear")}
        />
        <Select
          data-testid="search-type"
          label="Type"
          options={searchTypeOptions}
          value={type}
          onChange={handleInputChange("type")}
        />
        <div className="flex flex-col justify-end">
          <Button
            data-testid="search-submit-button"
            type="submit"
            disabled={title === ""}
            icon={<Search size={18} />}
            label="Search"
          />
        </div>
      </form>
      <section className="content-page-body">
        <DataTable columns={tableColumnFields} data={data} />
        <DataStatusBoundry
          isPending={isPending}
          isError={isError}
          data={data}
          error={error}
        />
      </section>
    </div>
  );
};

export default ContentPage;
