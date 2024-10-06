import { useQuery } from "@tanstack/react-query";
import { getContentById } from "../api/omdb";
import { useIMDbId } from "../hooks/use-imdb-id";
import { Dot } from "lucide-react";
import Badge from "../components/ui/badge";
import Rating from "../components/rating";
import ContentDetailMeta from "../components/content-detail-meta";
import PageTitle from "../components/page-title";
import Loading from "../components/loading";
import DataError from "../components/data-error";
import NoData from "../components/no-data";

const ContentDetialPage = () => {
  const id = useIMDbId();

  const { data, isPending, isError } = useQuery({
    queryKey: [],
    queryFn: async () => await getContentById(id),
  });

  if (isPending) {
    return <Loading />;
  }

  if (isError) {
    return <DataError />;
  }

  if (data?.Response === "False") {
    return (
      <div className="flex items-center justify-center py-8">
        <NoData message={data.Error} />
      </div>
    );
  }

  const {
    Title,
    Ratings,
    Runtime: duration,
    Genre,
    Director,
    Year,
    Plot,
    Actors,
    Language,
    Writer,
    Country,
    Poster,
  } = data;

  const genreList = Genre.split(",");

  return (
    <div className="content-detail-page">
      <div className="content-detail-page-poster w-full py-2 flex gap-4 h-96 overflow-hidden">
        <img
          className="object-fill rounded-md"
          src={Poster}
          alt={Title + " .Displaying on Invest analytics case poster."}
        />
        <div className="content-detail-page-header w-full border rounded-md p-4">
          <div className="flex flex-col mb-6">
            <PageTitle title={Title} />
            <div className="flex gap-2 text-sm font-semibold">
              <span>{duration}</span>
              <Dot size={20} />
              <span>{Year}</span>
              <Dot size={20} />
              <span>{Country}</span>
            </div>
          </div>
          <div className="flex gap-4">
            {Ratings.map((rating: any, index: number) => (
              <Rating key={index} rating={rating} />
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
          <ContentDetailMeta title="Director(s)" description={Director} />
          <ContentDetailMeta title="Writer(s)" description={Writer} />
          <ContentDetailMeta title="Actor(s)" description={Actors} />
          <ContentDetailMeta title="Language(s)" description={Language} />
        </div>
      </div>
    </div>
  );
};

export default ContentDetialPage;
