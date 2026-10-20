import { Link } from "react-router-dom";

function TestCard({ title, image, path }) {
  return (
    <Link to={path} className="block">
      <article className="group relative h-64 sm:h-80 md:h-100 overflow-hidden rounded-2xl shadow-lg">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        <h2 className="absolute bottom-6 right-4 left-4 text-center text-2xl font-bold text-white">
          {title}
        </h2>
      </article>
    </Link>
  );
}

export default TestCard;
