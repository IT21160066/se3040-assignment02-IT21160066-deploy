import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import astronut from "../../assets/astro2.png";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UserSignup = () => {
  const [userDetails, setUserDetails] = useState({
    userName: "",
    email: "",
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

  const handleRegistration = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8000/user/register", userDetails);
      setUserDetails({
        userName: "",
        email: "",
        password: "",
      });
      toast.success("Registration successful!", {
        style: { backgroundColor: "#333333", color: "#FFA500" },
      });
      navigate("/login");
      console.log(userDetails);
    } catch (err) {
      console.error("Registration failed:", err);
      setErrorMessage("Registration failed. Please try again later.");
    }
  };

  return (
    <div className="bg-stone-950 min-h-screen p-4 flex justify-center items-center">
      <div className="flex flex-row-reverse">
        <img src={astronut} alt="" className="w-64 h-w-64 mr-16" />
      </div>
      <div className="flex flex-col items-center border border-red-800 rounded-lg p-8 ">
        <h1 className="text-white font-mono my-2 text-3xl">Registration</h1>
        {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}
        <form onSubmit={handleRegistration}>
          <h2 className="text-white my-2 font-mono">Sign-up Here</h2>

          <input
            className="py-2 my-2 w-full outline-none rounded-md font-mono"
            type="text"
            placeholder=" Enter your name"
            name="userName"
            required
            value={userDetails.userName}
            onChange={handleInputChange}
          />

          <input
            className="py-2 my-2 w-full outline-none rounded-md font-mono"
            type="email"
            placeholder=" Enter your email"
            name="email"
            required
            value={userDetails.email}
            onChange={handleInputChange}
          />

          <input
            className="py-2 my-2 w-full outline-none rounded-md font-mono"
            type="password"
            placeholder=" Enter your password"
            name="password"
            required
            value={userDetails.password}
            onChange={handleInputChange}
          />

          <button className="text-white font-mono bg-red-700 hover:bg-red-500 my-2 px-4 py-2 rounded-md">
            Register
          </button>
        </form>
        <p className="text-white font-mono">Already Have an account?</p>
        <Link to="/login" className="text-red-500 hover:text-red-400 font-mono">
          Move to Login
        </Link>
      </div>
    </div>
  );
};

export default UserSignup;
