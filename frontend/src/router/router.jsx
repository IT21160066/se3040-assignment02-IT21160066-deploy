import UserSignup from "../components/user/UserSignup";
import UserLogin from "../components/user/UserLogin";
import HomePage from "../components/general/HomePage";
import { Routes, Route } from "react-router-dom";
import PictureOfTheDat from "../components/NASAapi/PictureOfTheDay";
import MarsRoverPhotos from "../components/NASAapi/MarsRoverPhotos ";
import ExploreSpace from "../components/general/ExploreSpace";
import SpaceWeather from "../components/NASAapi/SpaceWeather";
import EarthImagery from "../components/NASAapi/EarthImagery ";

const router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/explore" element={<ExploreSpace />} />
      <Route path="/login" element={<UserLogin />} />
      <Route path="/register" element={<UserSignup />} />
      <Route path="/pic" element={<PictureOfTheDat />} />
      <Route path="/mars" element={<MarsRoverPhotos />} />
      <Route path="/weather" element={<SpaceWeather />} />
      <Route path="/earth" element={<EarthImagery />} />
    </Routes>
  );
};

export default router;
