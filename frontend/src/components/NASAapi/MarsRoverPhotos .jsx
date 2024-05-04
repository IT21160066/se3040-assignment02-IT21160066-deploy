import { useState, useEffect } from "react";
import axios from "axios";
import { API_Key } from "../../config/APIkey";
import Loading from "../general/Loading.jsx";

const MarsRoverPhotos = () => {
  const [photos, setPhotos] = useState([]);
  const [error, setError] = useState(null);
  const [displayedPhotos, setDisplayedPhotos] = useState(10);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos",
          {
            params: {
              sol: 1000, // Example sol (Martian day)
              api_key: API_Key,
            },
          }
        );
        setPhotos(response.data.photos);
        console.log(response.data.photos[0]);
      } catch (err) {
        console.log("Error fetching photos:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (error)
    return (
      <div className="text-xl font-mono">Error fetching photos: {error}</div>
    );

  if (loading) return <Loading />;

  const loadMorePhotos = () => {
    setDisplayedPhotos(displayedPhotos + 10);
  };

  const filterData = photos.filter((data) => {
    return data.camera.full_name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
  });

  console.log("filterdata >>>", filterData);

  return (
    <div className="bg-stone-900 min-h-screen p-4">
      <h1 className="text-white font-mono text-center justify-center p-3 text-3xl">
        Mars Rover Photos
      </h1>
      <label htmlFor="search" className=" text-white mr-2 text-lg">
        Search here
      </label>
      <span>
        <input
          type="text"
          id="search"
          placeholder="Search here"
          className="px-6 py-2 bg-red-200 border border-red-600 rounded-md mb-4 outline-none"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </span>
      <div className="grid griid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
        {filterData.slice(0, displayedPhotos).map((photo) => (
          <div
            key={photo.id}
            className="px-8 py-16 text-slate-300 font-mono flex flex-col items-center justify-center rounded-lg bg-stone-800"
          >
            <div className="flex flex-col items-start">
              <h1 className="text-red-500">Martian Day : {photo.sol}</h1>
              <h1>Rover Name : {photo.rover.name}</h1>
              <h1>Earth Date : {photo.earth_date}</h1>
              <h1>Camera Name : {photo.camera.full_name}</h1>
            </div>
            <img
              src={photo.img_src}
              alt="Mars Rover"
              className="mt-3 w-96 h-96"
            />
          </div>
        ))}
      </div>
      {displayedPhotos < filterData.length && (
        <div className="flex items-center justify-center">
          <button
            onClick={loadMorePhotos}
            className="bg-red-700 hover:bg-red-500 text-white font-bold mt-3 py-2 px-4 rounded"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default MarsRoverPhotos;
