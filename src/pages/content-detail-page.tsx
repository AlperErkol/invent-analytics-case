import { useQuery } from "@tanstack/react-query";
import { getContentById } from "../service/omdb";
import { useIMDbId } from "../hooks/use-imdb-id";
import { Dot } from "lucide-react";
import Badge from "../components/ui/badge";
import Rating from "../components/rating";
import ContentDetailMeta from "../components/content-detail-meta";
import PageTitle from "../components/page-title";

const ContentDetialPage = () => {
  const id = useIMDbId();

  const { data, isPending, isError } = useQuery({
    queryKey: [],
    queryFn: async () => await getContentById(id),
  });

  if (isPending) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error!</p>;
  }

  console.log(data);
  const {
    Title: title,
    Ratings: ratings,
    Runtime: duration,
    Genre: genre,
    Director: director,
    Year: year,
    Plot,
    Actors: actors,
    Language: language,
    Writer: writer,
    Country: country,
    Poster: poster,
  } = data;

  const genreList = genre.split(",");

  return (
    <div className="content-detail-page">
      <div className="content-detail-page-poster w-full py-2 flex gap-4 h-96 overflow-hidden">
        <img
          className="object-fill rounded-md"
          src={poster}
          alt={title + " .Displaying on Invest analytics case poster."}
        />
        <div className="content-detail-page-header w-full border rounded-md p-4">
          <div className="flex flex-col mb-6">
            <PageTitle title={title} />
            <div className="flex gap-2 text-sm font-semibold">
              <span>{duration}</span>
              <Dot size={20} />
              <span>{year}</span>
              <Dot size={20} />
              <span>{country}</span>
            </div>
          </div>
          <div className="flex gap-4">
            {ratings.map((rating: any) => (
              <Rating rating={rating} />
            ))}
          </div>
        </div>
      </div>
      <div className="content-detail-page-details w-full">
        <div className="flex gap-2 py-2">
          {genreList.map((genre: string, index: number) => (
            <Badge key={index} label={genre} />
          ))}
        </div>
        <div className="border-b pb-2">
          <p>{Plot}</p>
        </div>
        <div>
          <ContentDetailMeta title="Director(s)" description={director} />
          <ContentDetailMeta title="Writer(s)" description={writer} />
          <ContentDetailMeta title="Actor(s)" description={actors} />
          <ContentDetailMeta title="Language(s)" description={language} />
        </div>
      </div>
    </div>
  );
};

export default ContentDetialPage;
