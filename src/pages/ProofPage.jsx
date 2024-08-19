import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";
import { faHome, faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import ErrorText from "../components/ErrorText";

const ProofPage = () => {
  const navigate = useNavigate();
  const [imagePreview, setImagePreview] = useState(
    "https://miro.medium.com/v2/resize:fit:500/format:webp/1*DSNfSDcOe33E2Aup1Sww2w.jpeg"
  );
  const [isImageError, setImageError] = useState(false);

  const handleBack = () => {
    navigate(-1);
  };

  const handleSubmit = () => {
    const payment = localStorage.getItem("payment_method")

    if (payment === 'creditcard') {
        navigate("/payment");
    } else {
        navigate("/thanks");
    }
  };
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const imageDataUrl = reader.result;
        setImagePreview(imageDataUrl);
        localStorage.setItem("savedProof", imageDataUrl); // Save the image to localStorage
      };
      reader.readAsDataURL(file);
    }
  };

  useEffect(() => {
    const savedImage = localStorage.getItem("savedProof");
    if (savedImage) {
      setImagePreview(savedImage);
    }
  }, []);
  return (
    <div className="relative">
      <div className="bg-zinc-100 h-20 w-full flex items-center justify-center">
        <span className="text-xl">College Admission Form</span>
      </div>

      <Link
        className="w-[60px] h-[60px] rounded-full bg-sky-900 text-white flex flex-col justify-center items-center absolute top-12 left-5"
        to="/"
      >
        <FontAwesomeIcon icon={faHome} />
      </Link>

      <div className="w-full h-full">
        <div className="bg-zinc-100 rounded-md p-6 w-[800px] ml-auto mr-auto mt-28 max-md:mt-2 max-md:w-full">
          <div className="flex items-center justify-between w-full max-md:flex-col max-md:justify-center max-md:gap-6">
            <div className="flex items-center gap-4 text-xl">
              <FontAwesomeIcon icon={faGraduationCap} />
              <div className="flex flex-col">
                <span>Universe City</span> <span>College</span>
              </div>
            </div>
            <div className="flex flex-col ">
              <span>Universe City College</span>
              <span>123 Universe Street, Ghana,</span>
              <span>universe@mail.com</span>
              <span>+(123)1234567</span>
            </div>
          </div>

          <div className="flex flex-col">
            <h1>COLLEGE ADMISSIONS FORM</h1>
            <p>Uploaed your Proof of Previous Certificate Below</p>
          </div>

          <div className="flex flex-col mt-6">
            <div className="flex flex-col mt-6 items-center">
              <h2 className=" mb-2">
                Click the Image below to upload an image
              </h2>
              <div className="flex gap-2 max-md:flex-col">
                <div className="flex flex-col w-[100%] item-center max-md:w-full">
                  <input
                    onChange={(e) => {
                      setImageError(false);
                      handleImageChange(e);
                    }}
                    className={` hidden rounded-md outline-none p-2 bg-transparent ${
                      isImageError
                        ? "border-red-500 border-[1px]"
                        : "border-zinc-500 border-[1px]"
                    }`}
                    type="file"
                    id="image"
                  />
                  <ErrorText
                    body={isImageError ? "Field must not be empty" : ""}
                  />
                  <label
                    className={`cursor-pointer rounded-md outline-none h-[300px] w-[300px] ${
                      isImageError
                        ? "border-red-500 border-[1px]"
                        : "border-zinc-500 border-[1px]"
                    }`}
                    htmlFor="image"
                  >
                    <img
                      className="w-full h-full"
                      src={imagePreview}
                      alt="image"
                    />
                  </label>
                </div>
              </div>
            </div>

            <div className="flex mt-6 justify-between items-center">
              <button
                onClick={handleBack}
                className="rounded-md p-4 text-white bg-gray-500 w-[100px]"
              >
                back
              </button>
              <button
                onClick={handleSubmit}
                className="rounded-md p-4 text-white bg-green-600 w-[100px]"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProofPage;
