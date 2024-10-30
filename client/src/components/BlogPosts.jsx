import { Link } from "lucide-react";
import React from "react";

function BlogPosts({ blogList, setInputChange }) {
  return (
    <section className="flex flex-col items-start gap-14">
      {blogList.map((blog) => (
        <article
          className="flex w-full items-center justify-center gap-10"
          key={blog.eid}
        >
          {/* Blog image */}
          <a href={blog.url} target="_blank">
            <img
              className="h-[17.5rem] w-[25rem] rounded-3xl object-cover"
              src={blog.photos[0]}
              alt=""
            />
          </a>

          {/* Content */}
          <section className="relative flex w-[65%] flex-col gap-5 text-neutral-500">
            {/* Copy link */}
            <button
              className="absolute bottom-0 right-5 flex size-14 items-center justify-center rounded-full border-[3px] border-sky-500"
              onClick={() => {
                navigator.clipboard.writeText(blog.url);
              }}
            >
              <Link className="size-8 text-sky-500" />
            </button>

            <div>
              <a href={blog.url} target="_blank">
                <h2 className="inline text-2xl font-semibold text-neutral-950">
                  {blog.title}
                </h2>
              </a>
              <p>
                {blog.description.length > 100
                  ? `${blog.description.slice(0, 100)} ...`
                  : blog.description}
              </p>
              <a
                className="text-sky-500 underline"
                href={blog.url}
                target="_blank"
              >
                อ่านต่อ
              </a>
              <div className="flex gap-3">
                <p>หมวด</p>

                {blog.tags.map((tag, index) => (
                  <React.Fragment key={index}>
                    {index === blog.tags.length - 1 && <p>และ</p>}

                    <a
                      className="underline"
                      href="#"
                      onClick={() => setInputChange(tag)}
                    >
                      {tag}
                    </a>
                  </React.Fragment>
                ))}
              </div>
            </div>

            <aside className="flex gap-7">
              {blog.photos.slice(1, 4).map((photo, index) => (
                <a href={blog.url} target="_blank" key={index}>
                  <img
                    className="size-28 rounded-lg object-cover"
                    src={photo}
                    alt=""
                  />
                </a>
              ))}
            </aside>
          </section>
        </article>
      ))}
    </section>
  );
}

export default BlogPosts;
