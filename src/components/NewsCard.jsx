import { CiShare2 } from "react-icons/ci";
import { FaStar, FaEye, FaRegBookmark, FaShareAlt } from "react-icons/fa";
import { Link } from "react-router";

const NewsCard = ({ news }) => {
  const {
     title,
     rating,
     total_view,
     author,
     thumbnail_url,
     details,
     tags,
     id
        } = news;

  return (
    <article className="bg-base-100 rounded-xl shadow-md overflow-hidden p-5 ">
      {/* Author Info */}
      <div className="flex justify-between items-center mb-3 bg-base-200">
        <div className="flex items-center gap-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <h3 className="font-semibold text-gray-800">{author.name}</h3>
            <p className="text-gray-500 text-sm">
              {new Date(news.author.published_date).toLocaleDateString()}
            </p>
          </div>
        </div>
        <button className="flex gap-2 text-gray-500 hover:text-primary">
          <FaRegBookmark />
          <FaShareAlt />
        </button>
      </div>

      {/* Title */}
      <h2 className="text-lg font-bold text-gray-900 mb-3 leading-snug">
        {title}
      </h2>

      {/* Image */}
      <figure className="rounded-lg overflow-hidden mb-3">
        <img
          src={thumbnail_url}
          alt="News Thumbnail"
          className="w-full h-52 object-cover"
        />
      </figure>

      {/* Details */}
      <div className="px-4 text-accent">
        {details.length > 200 ? (
          <>
            {details.slice(0, 200)}...
            <Link
              to={`/news-details/${id}`}
              className="text-primary font-semibold cursor-pointer hover:underline"
            >
              Read More
            </Link>
          </>
        ) : (
          details
        )}
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center border-t pt-3 text-gray-600 text-sm">
        <div className="flex items-center gap-1  text-orange-400">
          <FaStar />
          <span className="font-semibold text-gray-700">{rating.number}</span>
        </div>
        <div className="flex  items-center gap-1">
          <FaEye />
          <span>{total_view}</span>
        </div>
      </div>
    </article>
  );
};

export default NewsCard;
