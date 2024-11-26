import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Body = ({ category }) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const url =
        category === "movies"
          ? "https://imdb-top-100-movies.p.rapidapi.com/"
          : "https://imdb-top-100-movies.p.rapidapi.com/series/";

      const options = {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "ec8981f2b0msh94681292e269e2cp18f31bjsndfdc48e83c2b",
          "x-rapidapi-host": "imdb-top-100-movies.p.rapidapi.com",
        },
      };

      try {
        setError(null);
        const response = await fetch(url, options);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchData();
  }, [category]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!data.length) {
    return <div>Loading {category === "movies" ? "Movies" : "Series"}...</div>;
  }

  return (
    <section className="grid sm:grid-cols-2 place-items-center sm:px-10 px-16 gap-7 lg:grid-cols-3 pb-20">
      {data.map((item) => (
        <Link to={`/${item.id}`} key={item.id}>
          <div className="group">
            <img
              className="h-60 duration-150 transform w-[30rem] object-cover group-hover:scale-105"
              src={item.image}
              alt={item.title || "Item Image"}
            />
            <div className="flex items-center space-x-10 text-gray-100 p-3">
              <h2 className="transform duration-150 ease-in text-lg items-center group-hover:scale-110 md:text-md cursor-pointer">
                {item.title || "Item Title"}
              </h2>
              <h3 className="rounded-full min-h-[2rem] min-w-[2rem] flex items-center justify-center bg-green-400">
                {item.rating || "?"}
              </h3>
            </div>
          </div>
        </Link>
      ))}
    </section>
  );
};

export default Body;
