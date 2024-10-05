import { ContentType, Option } from "../../types/content";

const searchTypeOptions: Option[] = [
  { label: "Movie", value: ContentType.Movie },
  { label: "TV Series", value: ContentType.Series },
  { label: "Episodes", value: ContentType.Episodes },
];

export { searchTypeOptions };
