import { useEffect, useState } from "react";
import axios from "axios";

import "./App.css";
import Header from "./components/Header";
import BlogPosts from "./components/BlogPosts";

function App() {
  const [inputChange, setInputChange] = useState("");
  const [blogList, setBlogList] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:4001/trips?keywords=${inputChange}`,
      );

      setBlogList([...response.data.data]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchTimeout = setTimeout(() => {
      fetchData();
    }, 500);

    return () => clearTimeout(fetchTimeout);
  }, [inputChange]);

  return (
    <div className="App">
      <main className="m-auto flex w-full max-w-screen-xl flex-col gap-14 px-10 py-24">
        <Header inputChange={inputChange} setInputChange={setInputChange} />
        <BlogPosts blogList={blogList} setInputChange={setInputChange} />
      </main>
    </div>
  );
}

export default App;
