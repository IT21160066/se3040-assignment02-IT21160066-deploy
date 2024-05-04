import axios from "axios";
import { useState, useEffect } from "react";
import { API_Key } from "../../config/APIkey";
import Loading from "../general/Loading";

const SpaceWeather = () => {
  const [weatherData, setWeatherData] = useState([]);
  const [loadMore, setLoadMore] = useState(9);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedCards, setExpandedCards] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await axios.get(
          `https://api.nasa.gov/DONKI/CME?startDate=YYYY-MM-DD&endDate=YYYY-MM-DD&api_key=${API_Key}`
        );
        setWeatherData(response.data);
        console.log(response.data);
      } catch (error) {
        console.log("Error fetching data", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchWeatherData();
  }, []);

  if (error) return <div>Error Fetching weather Data: {error}</div>;
  if (loading) return <Loading />;

  const loadMoreData = () => {
    setLoadMore(loadMore + 9);
  };

  const filterData = weatherData.filter((data) =>
    data.sourceLocation.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleExpandCard = (activityID) => {
    setExpandedCards((prevState) => ({
      ...prevState,
      [activityID]: !prevState[activityID],
    }));
  };

  console.log("Filtered Data:", filterData);

  return (
    <div className="bg-stone-950 min-h-screen p-4">
      <h1 className="text-white font-mono text-center justify-center p-3 text-3xl">
        NASA Space Weather Notifications
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-3">
        {filterData.slice(0, loadMore).map((wrd) => (
          <div
            key={wrd.activityID}
            className="bg-stone-900 rounded-lg p-4 text-slate-400 border-red-600  font-mono"
          >
            <h2 className="text-md">Catalogue: {wrd.catalog}</h2>
            <h2 className="text-lg">Start Time: {wrd.startTime}</h2>
            <h2 className="text-md mb-2">
              Source Location:: {wrd.sourceLocation}
            </h2>
            <div>
              <h2 className="text-md font-mono mb-2">
                Note:{" "}
                {wrd.note.length > 50
                  ? `${wrd.note.slice(0, 50)}...`
                  : wrd.note}
              </h2>
              {wrd.note.length > 50 && (
                <button
                  onClick={() => toggleExpandCard(wrd.activityID)}
                  className="bg-red-700 hover:bg-red-500 text-white font-mono py-1 px-2 rounded"
                >
                  {expandedCards[wrd.activityID] ? "Show Less" : "Show More"}
                </button>
              )}
              {expandedCards[wrd.activityID] && (
                <h2 className="text-md font-mono mt-2">{wrd.note}</h2>
              )}
            </div>
          </div>
        ))}
      </div>
      {loadMore < filterData.length && (
        <div className="flex items-center justify-center">
          <button
            onClick={loadMoreData}
            className="bg-red-700 hover:bg-red-500 text-white font-bold mt-2 py-2 px-4 rounded"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default SpaceWeather;
