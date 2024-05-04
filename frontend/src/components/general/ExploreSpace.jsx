import mars from "../../assets/mars.png";
import door from "../../assets/door1.png";
import satelite from "../../assets/satelite2.png";

const ExploreSpace = () => {
  return (
    <div className="bg-stone-900 min-h-screen flex flex-col p-4 items-center justify-center">
      <div className="flex flex-col items-center">
        <h1 className="text-white font-mono text-3xl m-1">
          Explore More About Space Here 🚀
        </h1>
        <div className="flex items-center mb-2">
          <h1 className="text-white font-mono text-xl  mr-3">
            Curious About the Weather
          </h1>

          <a
            href="/weather"
            className="bg-green-800 hover:bg-red-700 
            text-white py-1 px-3 rounded-lg font-mono"
          >
            Click Here
          </a>
        </div>
      </div>

      <div className="flex justify-center gap-8">
        <div className="flex flex-col items-center border border-red-600  px-16 py-8 rounded-lg">
          <h1 className="text-white font-mono my-3 text-xl">
            Picture of the day
          </h1>
          <img src={door} alt="Picture of the day" className="w-48 h-48" />
          <p className="text-white font-mono text-center my-3">
            NASA's Picture of the Day is a daily feature on NASA's website that
            showcases captivating images or videos related to space, astronomy,
            and Earth science. Each day, NASA releases a new POTD along with a
            brief description providing context or interesting information about
            the featured image or video.
          </p>
          <a
            href="/pic"
            className="bg-red-700 hover:bg-red-500 
            text-white p-2 rounded-lg font-mono my-3 items-center"
          >
            Explore
          </a>
        </div>
        <div className="flex flex-col items-center border border-red-600 px-16 py-8 rounded-lg">
          <h1 className="text-white font-mono my-3 text-xl">Explore Mars</h1>
          <img src={mars} alt="Mars" className="w-48 h-48" />
          <p className="text-white font-mono text-center my-3">
            The Mars Rover Photos API, offers access to a wealth of captivating
            imagery captured by the rovers exploring the Martian surface. With
            this API, users can retrieve photos taken by rovers such as
            Curiosity, Opportunity, and Perseverance, providing a glimpse into
            the ongoing exploration of the Red Planet.
          </p>
          <a
            href="/mars"
            className=" bg-red-700 hover:bg-red-500 text-white p-2
            rounded-lg font-mono my-3"
          >
            Explore
          </a>
        </div>
        <div className="flex flex-col items-center border border-red-600  px-16 py-8 rounded-lg">
          <h1 className="text-white font-mono my-3 text-xl">Earth Imagery</h1>
          <img src={satelite} alt="Earth Imagery" className="w-48 h-48" />
          <p className="text-white font-mono text-center my-3">
            The NASA Earth Imagery API provided by NASA that allows developers
            to access and integrate a wealth of satellite imagery of Earth into
            their own applications, websites, and software projects. Through the
            API, developers can retrieve high-resolution imagery captured by
            NASA's Earth-observing satellites.
          </p>
          <a
            href="/earth"
            className=" bg-red-700 hover:bg-red-500 text-white p-2
            rounded-lg font-mono my-3"
          >
            Explore
          </a>
        </div>
      </div>
    </div>
  );
};

export default ExploreSpace;
