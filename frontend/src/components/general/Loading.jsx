const Loading = ({ color = "white" }) => {
  return (
    <div className="bg-stone-950 fixed top-0 left-0 w-full h-full flex items-center justify-center bg-opacity-100 z-50">
      <div className="flex items-center justify-center">
        <svg
          className={`animate-spin h-16 w-16 text-${color} mr-3`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          aria-label="Loading"
        >
          <circle
            className="opacity-75"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-100"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 4.418 3.582 8 8 8v-4zm10-1.457A7.963 7.963 0 0120 12h4c0 4.418-3.582 8-8 8v-4zm-2-6.834a3.5 3.5 0 11-7 0 3.5 3.5 0 017 0z"
          ></path>
        </svg>
        <span className={`text-${color}`}>Loading...</span>
      </div>
    </div>
  );
};

export default Loading;

// import { FaRocket } from "react-icons/fa";

// const Loading = ({ color = "white" }) => {
//   return (
//     <div className="bg-stone-950 fixed top-0 left-0 w-full h-full flex items-center justify-center bg-opacity-100 z-50">
//       <div className="flex items-center justify-center">
//         <FaRocket className={`animate-spin h-16 w-16 text-${color} mr-3`} />
//         <span className={`text-${color}`}>Loading...</span>
//       </div>
//     </div>
//   );
// };

// export default Loading;
