import { useMutation } from "@tanstack/react-query";
import { getContent } from "../service/omdb";
import { useEffect, useState } from "react";
import { ContentSearchParams, ContentType } from "../types/content";
import Input from "../components/ui/input";
import Button from "../components/ui/button";
import { Search } from "lucide-react";
import Select from "../components/ui/select";
import { searchTypeOptions, tableColumnFields } from "../util/content";
import "../styles/content-page.scss";
import DataTable from "../components/ui/data-table";
import DataStatusBoundry from "../components/data-status-boundry";
import { usePage } from "../hooks/use-page";

const ContentPage = () => {
  const [currentPage, setSearchParams] = usePage();
  const [contentSearchParams, setContentSearchParams] =
    useState<ContentSearchParams>({
      title: "Pokemon",
      type: ContentType.Movie,
      releaseYear: "",
    });

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

  const { title, type, releaseYear } = contentSearchParams;
  const onSearchHandle = () => {
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
      <header className="content-page-header flex gap-4 pt-6 pb-4">
        <Input
          id="search-title"
          label="Title"
          placeholder="Title"
          value={title}
          onChange={handleInputChange("title")}
        />
        <Input
          id="search-release-year"
          label="Release Year"
          placeholder="1999"
          value={releaseYear}
          onChange={handleInputChange("releaseYear")}
        />
        <Select
          label="Type"
          options={searchTypeOptions}
          value={type}
          onChange={handleInputChange("type")}
        />
        <div className="flex flex-col justify-end">
          <Button
            disabled={title === ""}
            icon={<Search size={18} />}
            label="Search"
            onClick={() => onSearchHandle()}
          />
        </div>
      </header>
      <section className="content-page-body">
        <DataTable columns={tableColumnFields} data={data} />
        <DataStatusBoundry
          isPending={isPending}
          isError={isError}
          data={data}
        />
      </section>
    </div>
  );
};

export default ContentPage;
