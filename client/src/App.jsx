import { useEffect, useState } from "react";
import axios from "axios";

import "./App.css";

function BlogPosts({ blogList }) {
  return (
    <section className="flex flex-col items-start gap-12">
      {blogList.map((blog) => (
        <div className="flex items-center justify-center gap-9" key={blog.eid}>
          <img
            className="h-[15rem] w-[22.5rem] rounded-3xl object-cover"
            src={blog.photos[0]}
            alt=""
          />

          <div className="flex flex-col gap-4 text-neutral-500">
            <div>
              <h2 className="text-2xl font-semibold text-neutral-950">
                {blog.title}
              </h2>
              <p>
                {blog.description.length > 100
                  ? `${blog.description.slice(0, 100)} ...`
                  : blog.description}
              </p>
              <a className="text-sky-500 underline" href={blog.url}>
                อ่านต่อ
              </a>
              <div className="flex gap-3">
                <p>หมวด</p>

                {blog.tags.map((tag, index) => (
                  <>
                    {index === blog.tags.length - 1 && <p>และ</p>}

                    <a className="underline" href="" key={index}>
                      {tag}
                    </a>
                  </>
                ))}
              </div>
            </div>

            <figure className="flex gap-7">
              {blog.photos.slice(1, 4).map((photo, index) => (
                <img
                  className="size-24 rounded-lg object-cover"
                  src={photo}
                  alt=""
                  key={index}
                />
              ))}
            </figure>
          </div>
        </div>
      ))}
    </section>
  );
}

function App() {
  const [inputChange, setInputChange] = useState("");
  const [blogList, setBlogList] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:4001/trips?keywords=${inputChange}`,
      );

      // log
      console.log(response.data.data);

      setBlogList([...response.data.data]);
    } catch (error) {
      console.log(error);
    } finally {
    }
  };

  useEffect(() => {
    fetchData();
  }, [inputChange]);

  return (
    <div className="App">
      <section className="m-auto flex w-full max-w-screen-xl flex-col gap-12 px-10 py-24">
        <div className="flex w-full flex-col items-center gap-8">
          <h1 className="text-5xl font-semibold text-sky-500">เที่ยวไหนดี</h1>

          {/* Search bar */}
          <div className="flex w-full flex-col gap-1 px-32">
            <p className="text-neutral-950">ค้นหาที่เที่ยว</p>
            <input
              className="w-full border-b-2 placeholder:text-center"
              type="text"
              placeholder="หาที่เที่ยวแล้วไปกัน ..."
              onChange={(e) => setInputChange(e.target.value)}
            />
          </div>
        </div>

        {/* Blog posts */}
        <BlogPosts blogList={blogList} />
      </section>
    </div>
  );
}

export default App;
