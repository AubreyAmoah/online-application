import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap, faHome } from "@fortawesome/free-solid-svg-icons";

import { useNavigate } from "react-router-dom";

const Preview = ({ form, isActive, toggleActive }) => {
  const navigate = useNavigate();
  const handleFormSubmit = () => {
    navigate("/image-upload");
  };

  return (
    <div
      className={
        isActive
          ? "bg-[#00000094] w-full min-h-screen absolute top-0 left-0 py-8 z-10"
          : "hidden"
      }
    >
      <div className="bg-zinc-100 rounded-md p-6 w-[800px] ml-auto mr-auto max-md:mt-2 max-md:w-full">
        <div className="flex items-center justify-between w-full max-md:flex-col max-md:justify-center max-md:gap-6">
          <div className="flex items-center gap-4 text-xl">
            <FontAwesomeIcon icon={faGraduationCap} />
            <div className="flex flex-col">
              <span>Universe City</span> <span>College</span>
            </div>
          </div>
          <div className="flex flex-col ">
            <span>Universe City College</span>
            <span>123 Universe Street, Ghana</span>
            <span>universe@mail.com</span>
            <span>+(123)1234567</span>
          </div>
        </div>

        <div className="flex flex-col">
          <h1>Form summary</h1>
          <p>Please go through one more time before submiting form</p>
        </div>

        <div className="flex flex-col mt-6">
          <h2 className=" mb-2">Full Name</h2>
          <div className="flex gap-2 max-md:flex-col">
            <div className={`"flex flex-col w-[33.33%] max-md:w-full"`}>
              {form.firstname === "" ? "N/A" : form.firstname}
            </div>

            <div className="flex flex-col w-[33.33%] max-md:w-full">
              {form.middlename === "" ? "N/A" : form.middlename}
            </div>

            <div className="flex flex-col w-[33.33%] max-md:w-full">
              {form.lastname === "" ? "N/A" : form.lastname}
            </div>
          </div>
        </div>

        <div className="flex flex-col mt-6">
          <h2 className=" mb-2">Date of Birth</h2>
          <div className="flex gap-2 max-md:flex-col">
            <div className={`"flex flex-col w-[33.33%] max-md:w-full"`}>
              {form.dob === "" ? "N/A" : form.dob}
            </div>
          </div>
        </div>

        <div className="flex flex-col mt-6">
          <h2 className=" mb-2">Gender</h2>
          <div className="flex gap-2 max-md:flex-col">
            <div className={`"flex flex-col w-[33.33%] max-md:w-full"`}>
              {form.gender === "" ? "N/A" : form.gender}
            </div>
          </div>
        </div>

        <div className="flex flex-col mt-6">
          <h2 className=" mb-2">Country</h2>
          <div className="flex gap-2 max-md:flex-col">
            <div className={`"flex flex-col w-[33.33%] max-md:w-full"`}>
              {form.country === "" ? "N/A" : form.country}
            </div>
          </div>
        </div>

        <div className="flex flex-col mt-6">
          <h2 className=" mb-2">Contact Details</h2>
          <div className="flex gap-2 max-md:flex-col">
            <div className={`"flex flex-col w-[50%] max-md:w-full"`}>
              {form.contact === "" ? "N/A" : form.contact}
            </div>

            <div className="flex flex-col w-[50%] max-md:w-full">
              {form.email === "" ? "N/A" : form.email}
            </div>
          </div>
        </div>

        <div className="flex flex-col mt-6">
          <h2 className=" mb-2">Next of Kin</h2>
          <div className="flex gap-2 max-md:flex-col">
            <div className={`"flex flex-col w-[33.33%] max-md:w-full"`}>
              {form.kin_firstname === "" ? "N/A" : form.kin_firstname}
            </div>

            <div className="flex flex-col w-[33.33%] max-md:w-full">
              {form.kin_lastname === "" ? "N/A" : form.kin_lastname}
            </div>

            <div className="flex flex-col w-[33.33%] max-md:w-full">
              {form.kin_relation === "" ? "N/A" : form.kin_relation}
            </div>
          </div>
        </div>

        <div className="flex flex-col mt-6">
          <h2 className=" mb-2">Next of kin contact details</h2>
          <div className="flex gap-2 max-md:flex-col">
            <div className={`"flex flex-col w-[50%] max-md:w-full"`}>
              {form.kin_phone === "" ? "N/A" : form.kin_phone}
            </div>

            <div className="flex flex-col w-[50%] max-md:w-full">
              {form.kin_email === "" ? "N/A" : form.kin_email}
            </div>
          </div>
        </div>

        <div className="flex flex-col mt-6">
          <h2 className=" mb-2">Higest Qualification and institution</h2>
          <div className="flex gap-2 max-md:flex-col">
            <div className={`"flex flex-col w-[33.33%] max-md:w-full"`}>
              {form.qualification === "" ? "N/A" : form.qualification}
            </div>

            <div className="flex flex-col w-[33.33%] max-md:w-full">
              {form.institution === "" ? "N/A" : form.institution}
            </div>

            <div className="flex flex-col w-[33.33%] max-md:w-full">
              {form.completion === "" ? "N/A" : form.completion}
            </div>
          </div>
        </div>

        <div className="flex flex-col mt-6">
          <h2 className=" mb-2">Admission Type and program</h2>
          <div className="flex gap-2 max-md:flex-col">
            <div className={`"flex flex-col w-[33.33%] max-md:w-full"`}>
              {form.academic_cred === "" ? "N/A" : form.academic_cred}
            </div>

            <div className="flex flex-col w-[33.33%] max-md:w-full">
              {form.admission_type === "" ? "N/A" : form.admission_type}
            </div>

            <div className="flex flex-col w-[33.33%] max-md:w-full">
              {form.program === "" ? "N/A" : form.program}
            </div>
          </div>
        </div>

        <div className="flex flex-col mt-6">
          <h2 className=" mb-2">Payment Method</h2>
          <div className="flex gap-2 max-md:flex-col">
            <div className={`"flex flex-col w-[100%] max-md:w-full"`}>
              {form.payment_method === "" ? "N/A" : form.payment_method}
            </div>
          </div>
        </div>

        <div className="flex mt-6 justify-between items-center">
          <button
            onClick={handleFormSubmit}
            className="rounded-md p-4 text-white bg-green-600 w-[100px]"
          >
            Approve
          </button>
          <button
            onClick={toggleActive}
            className="rounded-md p-4 text-white bg-red-600 w-[100px]"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Preview;
