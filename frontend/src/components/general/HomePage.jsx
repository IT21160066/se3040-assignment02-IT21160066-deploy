import planet from "../../assets/planet1.png";
import astro from "../../assets/astro1.png";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Loading from "../general/Loading.jsx";

const HomePage = () => {
  const [loading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  if (loading) return <Loading />;

  return (
    <div className="bg-stone-900 min-h-screen flex flex-col">
      <div className="flex items-center justify-between px-8 py-4">
        <h1 className="font-mono text-3xl text-slate-50 hover:text-red-500 flex items-center">
          Welcome to the Space!
          <span>
            <img src={planet} alt="planet" className="w-28 h-w-28" />
          </span>
        </h1>

        <div className="flex items-center">
          <h3 className="text-white mr-4 font-mono">Register through here</h3>

          <a
            href="/register"
            className="bg-red-700 hover:bg-red-500 
            text-white p-2 rounded-lg font-mono"
          >
            Register
          </a>
        </div>
      </div>
      <div className="flex justify-center items-center px-8 py-4">
        <div className="max-w-md ">
          <h2 className="text-white text-2xl font-mono mb-4">Explore More</h2>
          <p className="text-red-500 hover:text-red-400 mb-4 font-mono">
            In the vast expanse of space, humanity's curiosity knows no bounds.
            From the earliest civilizations gazing up at the night sky to the
            modern-day marvels of space exploration, our fascination with the
            cosmos has driven us to explore the unknown.
          </p>
          <p className="text-red-500 hover:text-red-400 mb-6 font-mono">
            Space applications have revolutionized our understanding of the
            universe, from discoveries about distant galaxies to the exploration
            of neighboring planets like Mars. Satellites orbiting high above
            Earth provide crucial data for weather forecasting, and monitoring
            environmental changes.
          </p>
          <h3 className="text-white font-mono">
            Already haev an account? Sign-up here
          </h3>
          <a
            href="/login"
            className="bg-red-700 hover:bg-red-500 font-mono text-white rounded-lg p-2 mt-4 inline-block"
          >
            Sign up
          </a>
        </div>
        <motion.div
          className="px-32 py-16 ml-24 circular-animation"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1, rotate: 360 }}
          transition={{ duration: 5, loop: Infinity, ease: "linear" }}
        >
          <img src={astro} alt="astronut" className="max-w-xs" />
        </motion.div>
      </div>
    </div>
  );
};

export default HomePage;
