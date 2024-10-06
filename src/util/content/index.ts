import { ContentType, Option } from "../../types/content";

const searchTypeOptions: Option[] = [
  { label: "Movie", value: ContentType.Movie },
  { label: "TV Series", value: ContentType.Series },
  { label: "Episodes", value: ContentType.Episodes },
];

const tableColumnFields: string[] = ["Name", "Release Date", "Type", "IMDb ID"];

export { searchTypeOptions, tableColumnFields };
