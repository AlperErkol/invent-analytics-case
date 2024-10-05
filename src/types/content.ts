enum ContentType {
  Movie = "movie",
  Series = "series",
  Episodes = "episodes",
}

interface ContentSearchParams {
  title: string;
  type: ContentType;
  releaseYear: string;
}

interface Option {
  value: string | number;
  label: string;
}

export { ContentType };
export type { ContentSearchParams, Option };
