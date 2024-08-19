import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

const PaymentPage = () => {
  return (
    <div className="relative h-screen w-screen overflow-auto">
      <Link
        className="w-[60px] h-[60px] rounded-full bg-sky-900 text-white flex flex-col justify-center items-center absolute top-5 right-5 z-10"
        to="/"
      >
        <FontAwesomeIcon icon={faHome} />
      </Link>
      <div className="absolute top-0 left-[50%] -translate-x-1/2 bg-white min-h-[100px] w-[600px] rounded-md p-4 shadow-md flex flex-col text-zinc-700 max-[630px]:w-full max-[300px]:text-[14px] max-[250px]:text-[12px]">
        <h1 className="text-[30px] font-bold max-[300px]:text-[20px]">
          Payment Form
        </h1>
        <p className="mb-2">Enter Your Card Details below</p>
        <hr />
        <div className="flex justify-between w-full mt-8 mb-4 font-bold">
          <p>Application Form</p>
          <p>
            <span>200.00</span>GHS
          </p>
        </div>
        <hr />
        <div className="flex justify-end w-full mt-20 mb-4 font-bold">
          <p className=" mr-8">Total</p>
          <p>
            <span>200.00</span>GHS
          </p>
        </div>

        <hr />

        <h1 className="mt-8 font-bold">Credit Card Details</h1>
        <div className="flex w-full justify-between mt-4 max-[440px]:flex-col max-[440px]:item-center max-[440px]:justify-center">
          <input
            type="text"
            name=""
            id=""
            placeholder="First Name"
            className=" py-2 px-2 rounded-sm w-[48%] border max-[440px]:w-full"
          />
          <input
            type="text"
            name=""
            id=""
            placeholder="Last Name"
            className="py-2 px-2 rounded-sm w-[48%] border max-[440px]:w-full max-[440px]:mt-4"
          />
        </div>

        <div className="flex w-full justify-between mt-4 max-[440px]:flex-col max-[440px]:item-center max-[440px]:justify-center">
          <input
            type="text"
            name=""
            id=""
            placeholder="1234 1234 1234 1234"
            className=" py-2 px-2 rounded-sm w-[48%] border max-[440px]:w-full"
          />
          <input
            type="text"
            name=""
            id=""
            placeholder="CVC"
            className="py-2 px-2 rounded-sm w-[48%] border max-[440px]:w-full max-[440px]:mt-4"
          />
        </div>

        <div className="flex w-full justify-start mt-4 mb-4">
          <input
            type="text"
            name=""
            id=""
            placeholder="MM / YY"
            className=" py-2 px-2 rounded-sm w-[48%] border"
          />
        </div>

        <hr />

        <h1 className="mt-8 font-bold">Email</h1>
        <div className="flex w-full justify-between mt-4">
          <input
            type="email"
            name=""
            id=""
            placeholder="example@mail.com"
            className="py-2 px-2 rounded-sm w-[48%] border max-[440px]:w-full max-[440px]:mt-4"
          />
        </div>

        <button className=" bg-sky-900 hover:bg-sky-500 text-white p-4 rounded-md w-[150px] mt-8 ml-auto mr-auto text-center">
          Submit
        </button>

        <button className=" bg-sky-900 hover:bg-sky-500 text-white p-4 rounded-md w-[150px] mt-8 ml-auto mr-auto text-center">
          Pay Later
        </button>
      </div>
    </div>
  );
};

export default PaymentPage;
