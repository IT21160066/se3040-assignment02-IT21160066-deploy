import { useState, useEffect } from "react";
import axios from "axios";
import { API_Key } from "../../config/APIkey";
import Loading from "../general/Loading";

const PictureOfTheDat = () => {
  const [image, setImage] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchImageData = async () => {
      try {
        const response = await axios.get(
          "https://api.nasa.gov/planetary/apod",
          {
            params: {
              api_key: API_Key,
            },
          }
        );
        setImage(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching image data:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchImageData();
  }, []);

  if (error) return <div>Error Fectching Image : {error}</div>;
  if (loading) return <Loading />;

  return (
    <div className="bg-stone-900 min-h-screen p-4">
      <div className="flex items-center justify-center">
        <h1 className="text-white font-mono text-3xl mb-6">
          NASA Picture of the Day
        </h1>
      </div>
      <div className="flex rounded-lg bg-stone-800">
        {image && (
          <div className="flex flex-col">
            <div className=" flex justify-center">
              <img
                src={image.url}
                alt="NASA Picture of the Day"
                className="max-w-96 max-h-96 my-4 "
              />
            </div>
            <div className="flex flex-col p-3 justify-center items-center">
              <h1 className="text-red-400 font-mono text-xl">
                Title : {image.title}
              </h1>
              <h1 className="text-red-400 font-mono">
                Show Date : {image.date}
              </h1>
              <p className="text-white font-mono my-2">
                Explanation : {image.explanation}
              </p>
              <h1 className="text-red-400 font-mono">
                Copyright : {image.copyright}
              </h1>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PictureOfTheDat;
