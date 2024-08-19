import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Form from "../components/Form";
import Preview from "../components/Preview";

const MainPage = () => {
  const [isActive, setActive] = useState(false);
  const toggleActive = () => {
    setActive(!isActive);
  };
  const [form, setForm] = useState({
    firstname: localStorage.getItem("firstname") || "",
    lastname: localStorage.getItem("lastname") || "",
    middlename: localStorage.getItem("middlename") || "",
    dob: localStorage.getItem("dob") || "",
    gender: localStorage.getItem("gender") || "",
    country: localStorage.getItem("country") || "",
    contact: localStorage.getItem("contact") || "",
    email: localStorage.getItem("email") || "",
    kin_firstname: localStorage.getItem("kin_firstname") || "",
    kin_lastname: localStorage.getItem("kin_lastname") || "",
    kin_relation: localStorage.getItem("kin_relation") || "",
    kin_phone: localStorage.getItem("kin_phone") || "",
    kin_email: localStorage.getItem("kin_email") || "",
    qualification: localStorage.getItem("qualification") || "",
    institution: localStorage.getItem("institution") || "",
    completion: localStorage.getItem("completion") || "",
    academic_cred: localStorage.getItem("academic_cred") || "",
    admission_type: localStorage.getItem("admission_type") || "",
    program: localStorage.getItem("program") || "",
    payment_method: localStorage.getItem("payment_method") || "",
  });

  useEffect(() => {
    // Save the value to localStorage whenever it changes
    // localStorage.setItem("firstname", form.firstname);
    // localStorage.setItem("middlename", form.middlename);
    // localStorage.setItem("lastname", form.lastname);
    // localStorage.setItem("dob", form.dob);
    // localStorage.setItem("gender", form.gender);
    // localStorage.setItem("country", form.country);
    // localStorage.setItem("contact", form.contact);
    // localStorage.setItem("email", form.email);
    // localStorage.setItem("kin_firstname", form.kin_firstname);
    // localStorage.setItem("kin_lastname", form.kin_lastname);
    // localStorage.setItem("kin_relation", form.kin_relation);
    // localStorage.setItem("kin_phone", form.kin_phone);
    // localStorage.setItem("kin_email", form.kin_email);
    // localStorage.setItem("qualification", form.qualification);
    // localStorage.setItem("institution", form.institution);
    // localStorage.setItem("completion", form.completion);
    // localStorage.setItem("academic_cred", form.academic_cred);
    // localStorage.setItem("admission_type", form.admission_type);
    // localStorage.setItem("program", form.program);
    // localStorage.setItem("payment_method", form.payment_method);
  }, [
    // form.firstname,
    // form.middlename,
    // form.lastname,
    // form.dob,
    // form.gender,
    // form.country,
    // form.contact,
    // form.email,
    // form.kin_firstname,
    // form.kin_lastname,
    // form.kin_relation,
    // form.kin_phone,
    // form.kin_email,
    // form.qualification,
    // form.institution,
    // form.completion,
    // form.academic_cred,
    // form.admission_type,
    // form.program,
    // form.payment_method,
  ]);


  return (
    <div className="relative">
      <Preview
        form={form}
        isActive={isActive}
        toggleActive={toggleActive}
      />
      <div className="bg-zinc-100 h-20 w-full flex items-center justify-center">
        <span className="text-xl">College Admission Form</span>
      </div>

      <Link
        className="w-[60px] h-[60px] rounded-full bg-sky-900 text-white flex flex-col justify-center items-center absolute top-12 left-5"
        to="/"
      >
        <FontAwesomeIcon icon={faHome} />
      </Link>
      <Form
        form={form}
        setForm={setForm}
        toggleActive={toggleActive}
      />
    </div>
  );
};

export default MainPage;
