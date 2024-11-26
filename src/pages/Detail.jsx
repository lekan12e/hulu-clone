import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { PlayCircleOutline } from "@mui/icons-material";

const Detail = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [error, setError] = useState(null);
  const urlProduce = (str) => {
    const new_str = str.split(" ").join("+");

    return new_str;
  };

  useEffect(() => {
    const fetchData = async () => {
      const url = `https://imdb-top-100-movies.p.rapidapi.com/${id}`; // Adjust this endpoint as per your API
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
        setItem(result);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchData();
  }, [id]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!item) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-10">
      <img
        src={item.image}
        alt={item.title || "Detail Image"}
        className="w-full md:w-1/3 md:h-96 object-cover"
      />
      <h1 className="text-3xl font-bold mt-5">
        {item.title || "Detail Title"}
      </h1>
      <p className="mt-3">{item.description || "No description available."}</p>
      <a
        href={`https://www.youtube.com/results?search_query=${urlProduce(
          item.title
        )}+trailer`}
        target="_blank">
        <p className="cursor-pointer flex flex-col items-center group sm:flex-row sm:space-y-0 sm:space-x-3">
          <PlayCircleOutline className="h-10" />{" "}
          <h5 className="transform duration-150 ease-in-out group-hover:scale-110">
            play trailer
          </h5>
        </p>
      </a>
    </div>
  );
};

export default Detail;
