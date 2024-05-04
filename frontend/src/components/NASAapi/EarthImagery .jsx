import { useState, useEffect } from "react";
import { API_Key } from "../../config/APIkey";
import Loading from "../general/Loading";
import axios from "axios";

function LandsatComponent() {
  const [earthData, setEarthData] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.nasa.gov/planetary/earth/assets?lon=${-95.33}&lat=${29.78}&date=${encodeURIComponent(
            "2018-01-01"
          )}&dim=${0.1}&api_key=${API_Key}`
        );

        setEarthData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching Landsat imagery:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (error) return <div>Error Fectching Image : {error}</div>;
  if (loading) return <Loading />;

  return (
    <div className="bg-stone-900 min-h-screen flex flex-col justify-center items-center p-4">
      <div className="flex items-center justify-center">
        <h1 className="text-white font-mono text-3xl mb-6">Earth Imagery</h1>
      </div>
      <div className="flex flex-col rounded-lg bg-stone-800 p-3">
        {earthData && (
          <div className="flex flex-col">
            <div className=" flex justify-center">
              <img
                src={earthData.url}
                alt="Earth"
                className="max-w-96 max-h-96 my-4 "
              />
            </div>
            <div className="flex flex-col p-3 justify-center items-center">
              <h1 className="text-red-400 font-mono text-xl">
                Title : {earthData.resource.planet}
              </h1>
              <h1 className="text-red-400 font-mono">
                Show Date : {earthData.date}
              </h1>

              <h1 className="text-red-400 font-mono">
                Service Version : {earthData.service_version}
              </h1>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default LandsatComponent;
