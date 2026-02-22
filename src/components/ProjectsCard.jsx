// import { useState } from "react";
import { Badge } from "./ui/badge";
import { FaGithubSquare } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";

function ProjectsCard({ url, img, github, title, text, tags }) {
  // const [showFullText, setShowFullText] = useState(false);
  // const wordCount = text.split(" ").length;
  // const shouldTruncate = wordCount > 30;

  // const displayedText =
  //   shouldTruncate && !showFullText
  //     ? text.split(" ").slice(0, 30).join(" ") + "..."
  //     : text;

  return (
    <article className="bg-white rounded-lg shadow-md hover:shadow-xl duration-300 flex flex-col h-full">
      <img
        src={img}
        alt={title}
        className="w-full object-cover object-top rounded-t-lg h-64"
      />
      <div className="p-8 flex flex-col flex-grow">
        <div className="flex-grow">
          <h2 className="text-xl tracking-wide font-medium">{title}</h2>
          <div className="flex flex-wrap gap-2 mt-4 min-h-10">
            {tags.map((tag, i) => (
              <Badge
                key={i}
                variant="secondary"
                className="text-xs bg-emerald-100"
              >
                {tag}
              </Badge>
            ))}
          </div>
          <p className="mt-4 text-slate-700 leading-loose">
            {text}
            {/* {displayedText} */}
            {/* {shouldTruncate && (
            <button onClick={() => setShowFullText(!showFullText)} className="text-emerald-600 ml-1 font-medium">
              {showFullText ? 'See Less' : 'See More'}
            </button>
          )} */}
          </p>
        </div>
        <div className="mt-4 flex gap-x-4">
          <a href={url}>
            <TbWorldWww className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
          </a>
          <a href={github}>
            <FaGithubSquare className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
          </a>
        </div>
      </div>
    </article>
  );
}

export default ProjectsCard;
