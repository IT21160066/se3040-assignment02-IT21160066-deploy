import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import astronut from "../../assets/astro2.png";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UserLogin = () => {
  const [userDetails, setUserDetails] = useState({
    userName: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:8000/user/login",
        userDetails
      );
      setUserDetails({
        userName: "",
        password: "",
      });
      localStorage.setItem("token", res.data.accessToken);

      if (res.status === 200) {
        toast.success("Login successful!", {
          style: { backgroundColor: "#333333", color: "#FFA500" },
        });
        navigate("/explore");
      }
      console.log(res.data.accessToken);
    } catch (err) {
      console.error("Login failed:", err);
      setErrorMessage("Login failed. Please try again later.");
    }
  };

  return (
    <div className="bg-stone-950 min-h-screen flex justify-center items-center">
      <div className="flex flex-reverse">
        <img src={astronut} alt="" className="w-64 h-w-64 mr-16" />
      </div>
      <div className="flex flex-col items-center border border-red-800 rounded-lg p-10">
        <h1 className="text-white font-mono my-2 text-3xl">
          Login in to your account here
        </h1>
        {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}
        <form onSubmit={handleLogin}>
          <h2 className="text-white my-2 font-mono">Login</h2>

          <input
            className="py-2 my-2 w-full outline-none rounded-md font-mono"
            type="text"
            placeholder=" Enter your user name"
            name="userName"
            value={userDetails.userName}
            onChange={handleInputChange}
          />

          <input
            className="py-2 my-2 w-full outline-none rounded-md font-mono"
            type="password"
            placeholder=" Enter your password"
            name="password"
            value={userDetails.password}
            onChange={handleInputChange}
          />

          <button className="text-white font-mono bg-red-700 hover:bg-red-500 my-2 px-4 py-2 rounded-md">
            Login
          </button>
        </form>
        <Link
          to="/register"
          className="text-red-500 hover:text-red-400 font-mono"
        >
          Go back to Sign-up
        </Link>
      </div>
    </div>
  );
};

export default UserLogin;
