import { useState } from "react";
import ErrorText from "../components/ErrorText";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const StatusPage = () => {
  const [email, setEmail] = useState("");
  const [isInputError, setInputError] = useState(false);
  const toggleInputError = () => {
    setInputError(!isInputError);
  };

  const handleSubmit = () => {
    if (email === "") {
      toggleInputError();
    }
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen overflow-auto">
      <Link
        className="w-[60px] h-[60px] rounded-full bg-sky-900 text-white flex flex-col justify-center items-center absolute top-12 left-5"
        to="/"
      >
        <FontAwesomeIcon icon={faHome} />
      </Link>
      <input
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        type="text"
        placeholder="Enter Your Email"
        className={`rounded-md outline-none p-2 bg-transparent placeholder-black ${
          isInputError
            ? "border-red-500 border-[1px]"
            : "border-zinc-500 border-[1px]"
        }`}
      />{" "}
      <ErrorText body={isInputError ? "Field must not be empty" : ""} />
      <button
        onClick={handleSubmit}
        className=" bg-sky-900 hover:bg-sky-500 text-white p-4 mt-4 rounded-md"
      >
        Check
      </button>
    </div>
  );
};

export default StatusPage;
