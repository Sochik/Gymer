import { Link } from "react-router-dom";
import { blogPosts, tips, topStories } from "../Data/itemsData";

// Example data for stories, blog, and tips

export default function Aside() {
  return (
    <div className="flex flex-col h-full items-start justify-center w-full mt-8 md:py-8">
      {/* Categories */}
      <div className="flex flex-col w-full">
        <h5 className="text-white px-6 md:px-2 mb-6 uppercase text-xl font-bold font-oswald">
          Categories
        </h5>
        {[
          { category: "Flexibility", classes: "10" },
          { category: "Cardio", classes: "12" },
          { category: "Strength", classes: "15" },
          { category: "Combat", classes: "13" },
          { category: "Strength", classes: "15" },
          { category: "Dance", classes: "10" },
          { category: "Flexibility", classes: "10" },
        ].map((cate, index) => {
          const isEven = index % 2 === 0;
          const cellBg = isEven ? "bg-backdrop" : "bg-secondary";
          return (
            <div key={index} className="flex flex-col w-full text-sm h-full">
              <Link
                to={`/classes?category=${cate.category}`}
                className={`flex w-full py-2 px-6 md:px-4 justify-between ${cellBg} group text-text items-center`}
              >
                <h5 className="group-hover:text-primary">{cate.category}</h5>
                <p className="group-hover:text-white">{cate.classes}</p>
              </Link>
            </div>
          );
        })}
      </div>

      {/* Top Stories */}
      <div className="flex flex-col mt-12 w-full">
        <h5 className="text-white px-6 md:px-2 mb-6 uppercase text-xl font-bold font-oswald">
          Top Stories
        </h5>
        {topStories.map((story, idx) => (
          <Link
            to={story.link}
            key={idx}
            className="flex items-center gap-3 px-6 md:px-4 py-2 group hover:bg-backdrop rounded"
          >
            <img
              src={story.photo}
              alt={story.headline}
              className="w-12 h-12 object-cover rounded"
            />
            <div>
              <h6 className="text-light font-oswald font-normal group-hover:text-light">
                {story.headline}
              </h6>
              <span className="text-xs text-text">{story.date}</span>
            </div>
          </Link>
        ))}
      </div>

      {/* Blog */}
      <div className="flex flex-col mt-6 w-full">
        <h5 className="text-white px-6 md:px-2 mb-6 uppercase text-xl font-bold font-oswald">
          Blog
        </h5>
        {blogPosts.map((post, idx) => (
          <Link
            to={post.link}
            key={idx}
            className="flex items-center gap-3 px-6 md:px-4 py-2 group hover:bg-backdrop rounded"
          >
            <img
              src={post.photo}
              alt={post.headline}
              className="w-12 h-12 object-cover rounded"
            />
            <div>
              <h6 className="text-light font-oswald font-normal group-hover:text-light">
                {post.headline}
              </h6>
              <span className="text-xs text-text">{post.date}</span>
            </div>
          </Link>
        ))}
      </div>

      {/* Tips */}
      <div className="flex flex-col mt-6 w-full">
        <h5 className="text-white px-6 md:px-2 mb-6 uppercase text-xl font-bold font-oswald">
          Tips
        </h5>
        {tips.map((tip, idx) => (
          <Link
            to={tip.link}
            key={idx}
            className="flex items-center gap-3 px-6 md:px-4 py-2 group hover:bg-backdrop rounded"
          >
            <img
              src={tip.photo}
              alt={tip.headline}
              className="w-12 h-12 object-cover rounded"
            />
            <div>
              <h6 className="text-light font-oswald font-normal group-hover:text-light">
                {tip.headline}
              </h6>
              <span className="text-xs text-text">{tip.date}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
