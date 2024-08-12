import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap, faHome } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ErrorText from "../components/ErrorText";

const MainPage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  // const [isError, setError] = useState(false);
  const [imagePreview, setImagePreview] = useState(
    "https://miro.medium.com/v2/resize:fit:500/format:webp/1*DSNfSDcOe33E2Aup1Sww2w.jpeg"
  );
  const [isActive, setActive] = useState(false);
  const toggleActive = () => {
    setActive(!isActive);
  };
  const [isMale, setIsMale] = useState(false);
  const toggleMale = () => {
    setIsMale(!isMale);
  };
  const [isFemale, setIsFemale] = useState(false);
  const toggleFemale = () => {
    setIsFemale(!isFemale);
  };
  const [isYes, setIsYes] = useState(false);
  const toggleYes = () => {
    setIsYes(!isYes);
  };
  const [isNo, setIsNo] = useState(false);
  const toggleNo = () => {
    setIsNo(!isNo);
    form.languages = "";
  };

  const [isCC, setIsCC] = useState(false);
  const toggleCC = () => {
    setIsCC(!isCC);
  };
  const [isPerson, setIsPerson] = useState(false);
  const togglePerson = () => {
    setIsPerson(!isPerson);
  };
  const [isFirstNameError, setFirstNameError] = useState(false);
  const toggleFirstnameError = () => {
    setFirstNameError(!isFirstNameError);
  };
  const [isMiddleNameError, setMiddleNameError] = useState(false);
  const toggleMiddlenameError = () => {
    setMiddleNameError(!isMiddleNameError);
  };
  const [isLastNameError, setLastNameError] = useState(false);
  const toggleLastnameError = () => {
    setLastNameError(!isLastNameError);
  };
  const [isBirthDateError, setBirthDateError] = useState(false);
  const toggleBirthdateError = () => {
    setBirthDateError(!isBirthDateError);
  };
  const [isGenderError, setGenderError] = useState(false);
  const toggleGenderError = () => {
    setGenderError(!isGenderError);
  };
  const [isCountryError, setCountryError] = useState(false);
  const toggleCountryerror = () => {
    setCountryError(!isCountryError);
  };
  const [isPhoneError, setPhoneError] = useState(false);
  const togglePhone = () => {
    setPhoneError(!isPhoneError);
  };
  const [isEmailError, setEmailError] = useState(false);
  const toggleEmailerror = () => {
    setEmailError(!isEmailError);
  };
  const [isKinFnameError, setKinFnameError] = useState(false);
  const toggleKinfnameerror = () => {
    setKinFnameError(!isKinFnameError);
  };
  const [isKinLnameError, setKinLnameError] = useState(false);
  const toggleKinlnameerror = () => {
    setKinLnameError(!isKinLnameError);
  };
  const [isKinRelationError, setKinRelationError] = useState(false);
  const toggleKinrelationerror = () => {
    setKinRelationError(!isKinRelationError);
  };
  const [isKinPhoneError, setKinPhoneError] = useState(false);
  const toggleKinphoneerror = () => {
    setKinPhoneError(!isKinPhoneError);
  };
  const [isKinEmailError, setKinEmailError] = useState(false);
  const toggleKinemailerror = () => {
    setKinEmailError(!isKinEmailError);
  };
  const [isLanguageError, setLanguageError] = useState(false);
  const toggleLanguageerror = () => {
    setLanguageError(!isLanguageError);
  };
  const [isQualificationError, setQualificationError] = useState(false);
  const toggleQualificationerror = () => {
    setQualificationError(!isQualificationError);
  };
  const [isInstitutionError, setInstitutionError] = useState(false);
  const toggleInstitutionerror = () => {
    setInstitutionError(!isInstitutionError);
  };
  const [isCompletionError, setCompletionError] = useState(false);
  const toggleCompletionerror = () => {
    setCompletionError(!isCompletionError);
  };
  const [isAcademicCredError, setAcademicCredError] = useState(false);
  const toggleAcademicCrederror = () => {
    setAcademicCredError(!isAcademicCredError);
  };
  const [isAdmissionTypeError, setAdmissionTypeError] = useState(false);
  const toggleAdmissionTypeerror = () => {
    setAdmissionTypeError(!isAdmissionTypeError);
  };
  const [isProgramError, setProgramError] = useState(false);
  const toggleProgramerror = () => {
    setProgramError(!isProgramError);
  };
  const [isProofError, setProofError] = useState(false);
  const toggleProoferror = () => {
    setProofError(!isProofError);
  };
  const [isPaymentError, setPaymentError] = useState(false);
  const togglePaymenterror = () => {
    setPaymentError(!isPaymentError);
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
    languages: localStorage.getItem("languages") || "",
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
    localStorage.setItem("firstname", form.firstname);
    localStorage.setItem("middlename", form.middlename);
    localStorage.setItem("lastname", form.lastname);
    localStorage.setItem("dob", form.dob);
    localStorage.setItem("gender", form.gender);
    localStorage.setItem("country", form.country);
    localStorage.setItem("contact", form.contact);
    localStorage.setItem("email", form.email);
    localStorage.setItem("kin_firstname", form.kin_firstname);
    localStorage.setItem("kin_lastname", form.kin_lastname);
    localStorage.setItem("kin_relation", form.kin_relation);
    localStorage.setItem("kin_phone", form.kin_phone);
    localStorage.setItem("kin_email", form.kin_email);
    localStorage.setItem("languages", form.languages);
    localStorage.setItem("qualification", form.qualification);
    localStorage.setItem("institution", form.institution);
    localStorage.setItem("completion", form.completion);
    localStorage.setItem("academic_cred", form.academic_cred);
    localStorage.setItem("admission_type", form.admission_type);
    localStorage.setItem("program", form.program);
    localStorage.setItem("payment_method", form.payment_method);
  }, [
    form.firstname,
    form.middlename,
    form.lastname,
    form.dob,
    form.gender,
    form.country,
    form.contact,
    form.email,
    form.kin_firstname,
    form.kin_lastname,
    form.kin_relation,
    form.kin_phone,
    form.kin_email,
    form.languages,
    form.qualification,
    form.institution,
    form.completion,
    form.academic_cred,
    form.admission_type,
    form.program,
    form.payment_method,
  ]);

  useEffect(() => {
    if (form.gender === "male") {
      toggleMale();
    }

    if (form.gender === "female") {
      toggleFemale();
    }

    if (form.languages.length > 0) {
      toggleYes();
    }

    if (form.languages === "") {
      toggleNo();
    }

    if (form.payment_method === "creditcard") {
      toggleCC();
    }

    if (form.payment_method === "person") {
      togglePerson();
    }
  }, []);

  const handleNext = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const handleSubmit = () => {
    if (form.firstname === "") {
      setCurrentStep(1);
      return toggleFirstnameError();
    }

    if (form.lastname === "") {
      setCurrentStep(1);
      return toggleLastnameError();
    }

    if (form.middlename === "") {
      setCurrentStep(1);
      return toggleMiddlenameError();
    }

    if (form.dob === "") {
      setCurrentStep(1);
      return toggleBirthdateError();
    }

    if (form.gender === "") {
      setCurrentStep(1);
      return toggleGenderError();
    }

    if (form.country === "") {
      setCurrentStep(1);
      return toggleCountryerror();
    }

    if (form.contact === "") {
      setCurrentStep(1);
      return togglePhone();
    }

    if (form.email === "") {
      setCurrentStep(1);
      return toggleEmailerror();
    }

    if (form.kin_firstname === "") {
      setCurrentStep(1);
      return toggleKinfnameerror();
    }

    if (form.kin_lastname === "") {
      setCurrentStep(1);
      return toggleKinlnameerror();
    }

    if (form.kin_relation === "") {
      setCurrentStep(1);
      return toggleKinrelationerror();
    }

    if (form.kin_phone === "") {
      setCurrentStep(1);
      return toggleKinphoneerror();
    }

    if (form.qualification === "") {
      setCurrentStep(2);
      return toggleQualificationerror();
    }

    if (form.institution === "") {
      setCurrentStep(2);
      return toggleInstitutionerror();
    }

    if (form.completion === "") {
      setCurrentStep(2);
      return toggleCompletionerror();
    }

    if (form.admission_type === "") {
      setCurrentStep(2);
      return toggleAdmissionTypeerror();
    }

    if (form.academic_cred === "") {
      setCurrentStep(2);
      return toggleAcademicCrederror();
    }

    if (form.program === "") {
      setCurrentStep(2);
      return toggleProgramerror();
    }

    if (form.payment_method === "") {
      setCurrentStep(3);
      return togglePaymenterror();
    }

    toggleActive();
  };

  useEffect(() => {
    const savedImage = localStorage.getItem("savedImage");
    if (savedImage) {
      setImagePreview(savedImage);
    }
  }, []);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const imageDataUrl = reader.result;
        setImagePreview(imageDataUrl);
        localStorage.setItem("savedImage", imageDataUrl); // Save the image to localStorage
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <div className="relative">
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
            <h2 className=" mb-2">Languages</h2>
            <div className="flex gap-2 max-md:flex-col">
              <div className={`"flex flex-col w-[50%] max-md:w-full"`}>
                {form.languages === "" ? "N/A" : form.languages}
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
            <h2 className=" mb-2">Proof of Qualification</h2>
            <div className="flex gap-2 max-md:flex-col">
              <div className={`"flex flex-col w-[100%] max-md:w-full"`}>
                <img
                  src={imagePreview}
                  alt="preview"
                  height={100}
                  width={100}
                />
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
            <button className="rounded-md p-4 text-white bg-green-600 w-[100px]">
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
        {currentStep === 1 && (
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
              <p>Enter your admission information below</p>
            </div>

            <div className="flex flex-col mt-6">
              <h2 className=" mb-2">Name</h2>
              <div className="flex gap-2 max-md:flex-col">
                <div className={`"flex flex-col w-[33.33%] max-md:w-full"`}>
                  <input
                    onChange={(e) => {
                      setFirstNameError(false);
                      setForm({ ...form, firstname: e.target.value });
                    }}
                    placeholder="Firstname"
                    className={`rounded-md outline-none p-2 bg-transparent ${
                      isFirstNameError
                        ? "border-red-500 border-[1px]"
                        : "border-zinc-500 border-[1px]"
                    }`}
                    type="text"
                    id="firstName"
                    value={form.firstname}
                  />
                  <ErrorText
                    body={isFirstNameError ? "Field must not be empty" : ""}
                  />
                </div>

                <div className="flex flex-col w-[33.33%] max-md:w-full">
                  <input
                    onChange={(e) => {
                      setMiddleNameError(false);
                      setForm({ ...form, middlename: e.target.value });
                    }}
                    placeholder="Middlename"
                    className={`rounded-md outline-none p-2 bg-transparent ${
                      isMiddleNameError
                        ? "border-red-500 border-[1px]"
                        : "border-zinc-500 border-[1px]"
                    }`}
                    type="text"
                    id="middleName"
                    value={form.middlename}
                  />
                  <ErrorText
                    body={isMiddleNameError ? "Field must not be empty" : ""}
                  />
                </div>

                <div className="flex flex-col w-[33.33%] max-md:w-full">
                  <input
                    onChange={(e) => {
                      setLastNameError(false);
                      setForm({ ...form, lastname: e.target.value });
                    }}
                    placeholder="Lastname"
                    className={`rounded-md outline-none p-2 bg-transparent ${
                      isLastNameError
                        ? "border-red-500 border-[1px]"
                        : "border-zinc-500 border-[1px]"
                    }`}
                    type="text"
                    id="lastName"
                    value={form.lastname}
                  />{" "}
                  <ErrorText
                    body={isLastNameError ? "Field must not be empty" : ""}
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col mt-6">
              <h2 className=" mb-2">Birth Date</h2>
              <div className="flex gap-2 max-md:flex-col">
                <div className="flex flex-col w-[33.33%] max-md:w-full">
                  <input
                    onChange={(e) => {
                      setBirthDateError(false);
                      setForm({ ...form, dob: e.target.value });
                    }}
                    placeholder="Birth Date"
                    className={`rounded-md outline-none p-2 bg-transparent ${
                      isBirthDateError
                        ? "border-red-500 border-[1px]"
                        : "border-zinc-500 border-[1px]"
                    }`}
                    type="date"
                    id="birthDate"
                    value={form.dob}
                  />
                  <ErrorText
                    body={isBirthDateError ? "Field must not be empty" : ""}
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-between mt-6 max-md:flex-col">
              <div className="flex flex-col w-[40%] max-md:w-full">
                <h2 className="mb-2">Gender</h2>
                <div className="flex justify-between text-xl items-center max-md:flex-col max-md:items-start">
                  <div className="flex gap-2 items-center">
                    <input
                      onChange={(e) => {
                        setGenderError(false);
                        if (isFemale) {
                          toggleFemale();
                        }
                        toggleMale();
                        setForm({ ...form, gender: e.target.value });
                      }}
                      className="p-2 bg-transparent border-zinc-500 border-[1px] rounded-md outline-none"
                      type="radio"
                      id="male"
                      value={"male"}
                      checked={isMale ? true : false}
                    />

                    <label htmlFor="male">Male</label>
                  </div>
                  <div className="flex gap-2 items-center">
                    <input
                      onChange={(e) => {
                        setGenderError(false);
                        if (isMale) {
                          toggleMale();
                        }
                        toggleFemale();
                        setForm({ ...form, gender: e.target.value });
                      }}
                      className="p-2 bg-transparent border-zinc-500 border-[1px] rounded-md outline-none"
                      type="radio"
                      id="female"
                      value={"female"}
                      checked={isFemale ? true : false}
                    />
                    <label htmlFor="female">Female</label>
                  </div>
                </div>
                <ErrorText body={isGenderError ? "Select a gender" : ""} />
              </div>

              <div className="flex flex-col w-[50%] max-md:w-full">
                <h2 className="mb-2">Of which country are you a citizen</h2>
                <select
                  onChange={(e) => {
                    setCountryError(false);
                    setForm({ ...form, country: e.target.value });
                  }}
                  value={form.country}
                  className={`rounded-md outline-none p-2 bg-transparent ${
                    isCountryError
                      ? "border-red-500 border-[1px]"
                      : "border-zinc-500 border-[1px]"
                  }`}
                >
                  <option value="">Please Select</option>
                  <option value="United States">United States</option>
                  <option value="Afghanistan">Afghanistan</option>
                  <option value="Albania">Albania</option>
                  <option value="Algeria">Algeria</option>
                  <option value="American Samoa">American Samoa</option>
                  <option value="Andorra">Andorra</option>
                  <option value="Angola">Angola</option>
                  <option value="Anguilla">Anguilla</option>
                  <option value="Antigua and Barbuda">
                    Antigua and Barbuda
                  </option>
                  <option value="Argentina">Argentina</option>
                  <option value="Armenia">Armenia</option>
                  <option value="Aruba">Aruba</option>
                  <option value="Australia">Australia</option>
                  <option value="Austria">Austria</option>
                  <option value="Azerbaijan">Azerbaijan</option>
                  <option value="The Bahamas">The Bahamas</option>
                  <option value="Bahrain">Bahrain</option>
                  <option value="Bangladesh">Bangladesh</option>
                  <option value="Barbados">Barbados</option>
                  <option value="Belarus">Belarus</option>
                  <option value="Belgium">Belgium</option>
                  <option value="Belize">Belize</option>
                  <option value="Benin">Benin</option>
                  <option value="Bermuda">Bermuda</option>
                  <option value="Bhutan">Bhutan</option>
                  <option value="Bolivia">Bolivia</option>
                  <option value="Bosnia and Herzegovina">
                    Bosnia and Herzegovina
                  </option>
                  <option value="Botswana">Botswana</option>
                  <option value="Brazil">Brazil</option>
                  <option value="Brunei">Brunei</option>
                  <option value="Bulgaria">Bulgaria</option>
                  <option value="Burkina Faso">Burkina Faso</option>
                  <option value="Burundi">Burundi</option>
                  <option value="Cambodia">Cambodia</option>
                  <option value="Cameroon">Cameroon</option>
                  <option value="Canada">Canada</option>
                  <option value="Cape Verde">Cape Verde</option>
                  <option value="Cayman Islands">Cayman Islands</option>
                  <option value="Central African Republic">
                    Central African Republic
                  </option>
                  <option value="Chad">Chad</option>
                  <option value="Chile">Chile</option>
                  <option value="China">China</option>
                  <option value="Christmas Island">Christmas Island</option>
                  <option value="Cocos (Keeling) Islands">
                    Cocos (Keeling) Islands
                  </option>
                  <option value="Colombia">Colombia</option>
                  <option value="Comoros">Comoros</option>
                  <option value="Congo">Congo</option>
                  <option value="Cook Islands">Cook Islands</option>
                  <option value="Costa Rica">Costa Rica</option>
                  <option value="Cote d&#x27;Ivoire">Cote d&#x27;Ivoire</option>
                  <option value="Croatia">Croatia</option>
                  <option value="Cuba">Cuba</option>
                  <option value="Curaçao">Curaçao</option>
                  <option value="Cyprus">Cyprus</option>
                  <option value="Czech Republic">Czech Republic</option>
                  <option value="Democratic Republic of the Congo">
                    Democratic Republic of the Congo
                  </option>
                  <option value="Denmark">Denmark</option>
                  <option value="Djibouti">Djibouti</option>
                  <option value="Dominica">Dominica</option>
                  <option value="Dominican Republic">Dominican Republic</option>
                  <option value="Ecuador">Ecuador</option>
                  <option value="Egypt">Egypt</option>
                  <option value="El Salvador">El Salvador</option>
                  <option value="Equatorial Guinea">Equatorial Guinea</option>
                  <option value="Eritrea">Eritrea</option>
                  <option value="Estonia">Estonia</option>
                  <option value="Ethiopia">Ethiopia</option>
                  <option value="Falkland Islands">Falkland Islands</option>
                  <option value="Faroe Islands">Faroe Islands</option>
                  <option value="Fiji">Fiji</option>
                  <option value="Finland">Finland</option>
                  <option value="France">France</option>
                  <option value="French Polynesia">French Polynesia</option>
                  <option value="Gabon">Gabon</option>
                  <option value="The Gambia">The Gambia</option>
                  <option value="Georgia">Georgia</option>
                  <option value="Germany">Germany</option>
                  <option value="Ghana">Ghana</option>
                  <option value="Gibraltar">Gibraltar</option>
                  <option value="Greece">Greece</option>
                  <option value="Greenland">Greenland</option>
                  <option value="Grenada">Grenada</option>
                  <option value="Guadeloupe">Guadeloupe</option>
                  <option value="Guam">Guam</option>
                  <option value="Guatemala">Guatemala</option>
                  <option value="Guernsey">Guernsey</option>
                  <option value="Guinea">Guinea</option>
                  <option value="Guinea-Bissau">Guinea-Bissau</option>
                  <option value="Guyana">Guyana</option>
                  <option value="Haiti">Haiti</option>
                  <option value="Honduras">Honduras</option>
                  <option value="Hong Kong">Hong Kong</option>
                  <option value="Hungary">Hungary</option>
                  <option value="Iceland">Iceland</option>
                  <option value="India">India</option>
                  <option value="Indonesia">Indonesia</option>
                  <option value="Iran">Iran</option>
                  <option value="Iraq">Iraq</option>
                  <option value="Ireland">Ireland</option>
                  <option value="Israel">Israel</option>
                  <option value="Italy">Italy</option>
                  <option value="Jamaica">Jamaica</option>
                  <option value="Japan">Japan</option>
                  <option value="Jersey">Jersey</option>
                  <option value="Jordan">Jordan</option>
                  <option value="Kazakhstan">Kazakhstan</option>
                  <option value="Kenya">Kenya</option>
                  <option value="Kiribati">Kiribati</option>
                  <option value="North Korea">North Korea</option>
                  <option value="South Korea">South Korea</option>
                  <option value="Kosovo">Kosovo</option>
                  <option value="Kuwait">Kuwait</option>
                  <option value="Kyrgyzstan">Kyrgyzstan</option>
                  <option value="Laos">Laos</option>
                  <option value="Latvia">Latvia</option>
                  <option value="Lebanon">Lebanon</option>
                  <option value="Lesotho">Lesotho</option>
                  <option value="Liberia">Liberia</option>
                  <option value="Libya">Libya</option>
                  <option value="Liechtenstein">Liechtenstein</option>
                  <option value="Lithuania">Lithuania</option>
                  <option value="Luxembourg">Luxembourg</option>
                  <option value="Macau">Macau</option>
                  <option value="Macedonia">Macedonia</option>
                  <option value="Madagascar">Madagascar</option>
                  <option value="Malawi">Malawi</option>
                  <option value="Malaysia">Malaysia</option>
                  <option value="Maldives">Maldives</option>
                  <option value="Mali">Mali</option>
                  <option value="Malta">Malta</option>
                  <option value="Marshall Islands">Marshall Islands</option>
                  <option value="Martinique">Martinique</option>
                  <option value="Mauritania">Mauritania</option>
                  <option value="Mauritius">Mauritius</option>
                  <option value="Mayotte">Mayotte</option>
                  <option value="Mexico">Mexico</option>
                  <option value="Micronesia">Micronesia</option>
                  <option value="Moldova">Moldova</option>
                  <option value="Monaco">Monaco</option>
                  <option value="Mongolia">Mongolia</option>
                  <option value="Montenegro">Montenegro</option>
                  <option value="Montserrat">Montserrat</option>
                  <option value="Morocco">Morocco</option>
                  <option value="Mozambique">Mozambique</option>
                  <option value="Myanmar">Myanmar</option>
                  <option value="Nagorno-Karabakh">Nagorno-Karabakh</option>
                  <option value="Namibia">Namibia</option>
                  <option value="Nauru">Nauru</option>
                  <option value="Nepal">Nepal</option>
                  <option value="Netherlands">Netherlands</option>
                  <option value="Netherlands Antilles">
                    Netherlands Antilles
                  </option>
                  <option value="New Caledonia">New Caledonia</option>
                  <option value="New Zealand">New Zealand</option>
                  <option value="Nicaragua">Nicaragua</option>
                  <option value="Niger">Niger</option>
                  <option value="Nigeria">Nigeria</option>
                  <option value="Niue">Niue</option>
                  <option value="Norfolk Island">Norfolk Island</option>
                  <option value="Turkish Republic of Northern Cyprus">
                    Turkish Republic of Northern Cyprus
                  </option>
                  <option value="Northern Mariana">Northern Mariana</option>
                  <option value="Norway">Norway</option>
                  <option value="Oman">Oman</option>
                  <option value="Pakistan">Pakistan</option>
                  <option value="Palau">Palau</option>
                  <option value="Palestine">Palestine</option>
                  <option value="Panama">Panama</option>
                  <option value="Papua New Guinea">Papua New Guinea</option>
                  <option value="Paraguay">Paraguay</option>
                  <option value="Peru">Peru</option>
                  <option value="Philippines">Philippines</option>
                  <option value="Pitcairn Islands">Pitcairn Islands</option>
                  <option value="Poland">Poland</option>
                  <option value="Portugal">Portugal</option>
                  <option value="Puerto Rico">Puerto Rico</option>
                  <option value="Qatar">Qatar</option>
                  <option value="Republic of the Congo">
                    Republic of the Congo
                  </option>
                  <option value="Romania">Romania</option>
                  <option value="Russia">Russia</option>
                  <option value="Rwanda">Rwanda</option>
                  <option value="Saint Barthelemy">Saint Barthelemy</option>
                  <option value="Saint Helena">Saint Helena</option>
                  <option value="Saint Kitts and Nevis">
                    Saint Kitts and Nevis
                  </option>
                  <option value="Saint Lucia">Saint Lucia</option>
                  <option value="Saint Martin">Saint Martin</option>
                  <option value="Saint Pierre and Miquelon">
                    Saint Pierre and Miquelon
                  </option>
                  <option value="Saint Vincent and the Grenadines">
                    Saint Vincent and the Grenadines
                  </option>
                  <option value="Samoa">Samoa</option>
                  <option value="San Marino">San Marino</option>
                  <option value="Sao Tome and Principe">
                    Sao Tome and Principe
                  </option>
                  <option value="Saudi Arabia">Saudi Arabia</option>
                  <option value="Senegal">Senegal</option>
                  <option value="Serbia">Serbia</option>
                  <option value="Seychelles">Seychelles</option>
                  <option value="Sierra Leone">Sierra Leone</option>
                  <option value="Singapore">Singapore</option>
                  <option value="Slovakia">Slovakia</option>
                  <option value="Slovenia">Slovenia</option>
                  <option value="Solomon Islands">Solomon Islands</option>
                  <option value="Somalia">Somalia</option>
                  <option value="Somaliland">Somaliland</option>
                  <option value="South Africa">South Africa</option>
                  <option value="South Ossetia">South Ossetia</option>
                  <option value="South Sudan">South Sudan</option>
                  <option value="Spain">Spain</option>
                  <option value="Sri Lanka">Sri Lanka</option>
                  <option value="Sudan">Sudan</option>
                  <option value="Suriname">Suriname</option>
                  <option value="Svalbard">Svalbard</option>
                  <option value="eSwatini">eSwatini</option>
                  <option value="Sweden">Sweden</option>
                  <option value="Switzerland">Switzerland</option>
                  <option value="Syria">Syria</option>
                  <option value="Taiwan">Taiwan</option>
                  <option value="Tajikistan">Tajikistan</option>
                  <option value="Tanzania">Tanzania</option>
                  <option value="Thailand">Thailand</option>
                  <option value="Timor-Leste">Timor-Leste</option>
                  <option value="Togo">Togo</option>
                  <option value="Tokelau">Tokelau</option>
                  <option value="Tonga">Tonga</option>
                  <option value="Transnistria Pridnestrovie">
                    Transnistria Pridnestrovie
                  </option>
                  <option value="Trinidad and Tobago">
                    Trinidad and Tobago
                  </option>
                  <option value="Tristan da Cunha">Tristan da Cunha</option>
                  <option value="Tunisia">Tunisia</option>
                  <option value="Turkey">Turkey</option>
                  <option value="Turkmenistan">Turkmenistan</option>
                  <option value="Turks and Caicos Islands">
                    Turks and Caicos Islands
                  </option>
                  <option value="Tuvalu">Tuvalu</option>
                  <option value="Uganda">Uganda</option>
                  <option value="Ukraine">Ukraine</option>
                  <option value="United Arab Emirates">
                    United Arab Emirates
                  </option>
                  <option value="United Kingdom">United Kingdom</option>
                  <option value="Uruguay">Uruguay</option>
                  <option value="Uzbekistan">Uzbekistan</option>
                  <option value="Vanuatu">Vanuatu</option>
                  <option value="Vatican City">Vatican City</option>
                  <option value="Venezuela">Venezuela</option>
                  <option value="Vietnam">Vietnam</option>
                  <option value="British Virgin Islands">
                    British Virgin Islands
                  </option>
                  <option value="Isle of Man">Isle of Man</option>
                  <option value="US Virgin Islands">US Virgin Islands</option>
                  <option value="Wallis and Futuna">Wallis and Futuna</option>
                  <option value="Western Sahara">Western Sahara</option>
                  <option value="Yemen">Yemen</option>
                  <option value="Zambia">Zambia</option>
                  <option value="Zimbabwe">Zimbabwe</option>
                  <option value="other">Other</option>
                </select>
                <ErrorText />
              </div>
            </div>

            <div className="flex flex-col mt-6">
              <h2 className=" mb-2">Contact</h2>
              <div className="flex gap-2 max-md:flex-col">
                <div className="flex flex-col w-[50%] max-md:w-full">
                  <input
                    onChange={(e) => {
                      setForm({ ...form, contact: e.target.value });
                    }}
                    value={form.contact}
                    className="p-2 bg-transparent border-zinc-500 border-[1px] rounded-md outline-none"
                    type="text"
                    placeholder="Phone number"
                  />
                  <ErrorText />{" "}
                </div>
                <div className="flex flex-col w-[50%] max-md:w-full">
                  <input
                    onChange={(e) => {
                      setForm({ ...form, email: e.target.value });
                    }}
                    value={form.email}
                    className="p-2 bg-transparent border-zinc-500 border-[1px] rounded-md outline-none"
                    type="email"
                    placeholder="email"
                  />
                  <ErrorText
                    body={isCountryError ? "Field must not be empty" : ""}
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col mt-6">
              <h2 className=" mb-2">Next of Kin</h2>
              <div className="flex gap-2 max-md:flex-col">
                <div className="flex flex-col w-[33.33%] max-md:w-full">
                  <input
                    onChange={(e) => {
                      setKinFnameError(false);
                      setForm({ ...form, kin_firstname: e.target.value });
                    }}
                    value={form.kin_firstname}
                    className={`rounded-md outline-none p-2 bg-transparent ${
                      isKinFnameError
                        ? "border-red-500 border-[1px]"
                        : "border-zinc-500 border-[1px]"
                    }`}
                    type="text"
                    placeholder="Firstname"
                    autoFocus={isKinFnameError ? true : false}
                  />{" "}
                  <ErrorText
                    body={isKinFnameError ? "Field must not be empty" : ""}
                  />
                </div>
                <div className="flex flex-col w-[33.33%] max-md:w-full">
                  <input
                    onChange={(e) => {
                      setKinLnameError(false);
                      setForm({ ...form, kin_lastname: e.target.value });
                    }}
                    value={form.kin_lastname}
                    className={`rounded-md outline-none p-2 bg-transparent ${
                      isKinLnameError
                        ? "border-red-500 border-[1px]"
                        : "border-zinc-500 border-[1px]"
                    }`}
                    type="text"
                    placeholder="Lastname"
                    autoFocus={isKinLnameError ? true : false}
                  />
                  <ErrorText
                    body={isKinLnameError ? "Field must not be empty" : ""}
                  />
                </div>
                <div className="flex flex-col w-[33.33%] max-md:w-full">
                  <input
                    onChange={(e) => {
                      setKinRelationError(false);
                      setForm({ ...form, kin_relation: e.target.value });
                    }}
                    value={form.kin_relation}
                    className={`rounded-md outline-none p-2 bg-transparent ${
                      isKinRelationError
                        ? "border-red-500 border-[1px]"
                        : "border-zinc-500 border-[1px]"
                    }`}
                    type="text"
                    placeholder="Relationship"
                    autoFocus={isKinRelationError ? true : false}
                  />
                  <ErrorText
                    body={isKinRelationError ? "Field must not be empty" : ""}
                  />
                </div>
              </div>

              <div className="flex flex-col mt-6">
                <h2 className=" mb-2">Next of Kin Contact</h2>
                <div className="flex gap-2 max-md:flex-col">
                  <div className="flex flex-col w-[50%] max-md:w-full">
                    <input
                      onChange={(e) => {
                        setKinPhoneError(false);
                        setForm({ ...form, kin_phone: e.target.value });
                      }}
                      value={form.kin_phone}
                      className={`rounded-md outline-none p-2 bg-transparent ${
                        isKinPhoneError
                          ? "border-red-500 border-[1px]"
                          : "border-zinc-500 border-[1px]"
                      }`}
                      type="text"
                      placeholder="Phone number"
                      autoFocus={isKinPhoneError ? true : false}
                    />
                    <ErrorText
                      body={isKinPhoneError ? "Field must not be empty" : ""}
                    />
                  </div>
                  <div className="flex flex-col w-[50%] max-md:w-full">
                    <input
                      onChange={(e) => {
                        setForm({ ...form, kin_email: e.target.value });
                      }}
                      value={form.kin_email}
                      className="p-2 bg-transparent border-zinc-500 border-[1px] rounded-md outline-none"
                      type="email"
                      placeholder="email"
                    />
                    <ErrorText />{" "}
                  </div>
                </div>
              </div>

              <div className="flex flex-col mt-6">
                <h2 className=" mb-2">
                  Do you speak any languages other than English
                </h2>
                <div className="flex gap-2 text-xl max-md:flex-col">
                  <div className="flex gap-2 w-[50%]">
                    <input
                      onChange={(e) => {
                        setLanguageError(false);
                        if (isNo) {
                          toggleNo();
                        }
                        toggleYes();
                      }}
                      className="p-2 bg-transparent border-zinc-500 border-[1px] rounded-md  outline-none"
                      type="radio"
                      placeholder="Phone number"
                      id="langYes"
                      checked={isYes ? true : false}
                    />
                    <label htmlFor="langYes">Yes</label>
                  </div>

                  <div className="flex gap-2 w-[50%]">
                    <input
                      onChange={(e) => {
                        setLanguageError(false);
                        if (isYes) {
                          toggleYes();
                        }
                        toggleNo();
                      }}
                      className="p-2 bg-transparent border-zinc-500 border-[1px] rounded-md  outline-none"
                      type="radio"
                      placeholder="Phone number"
                      id="langNo"
                      checked={isNo ? true : false}
                    />
                    <label htmlFor="langNo">No</label>
                  </div>
                </div>
                <ErrorText body={isLanguageError ? "CHoose at one" : ""} />

                <div className="flex flex-col mt-4">
                  {isYes && (
                    <>
                      {" "}
                      <span>Please List them</span>{" "}
                      <textarea
                        onChange={(e) => {
                          setForm({ ...form, languages: e.target.value });
                        }}
                        value={form.languages}
                        className="p-2 bg-transparent border-zinc-500 border-[1px] rounded-md  outline-none h-[200px] max-md:w-full"
                      ></textarea>
                    </>
                  )}
                </div>
              </div>

              <div className="flex mt-6 justify-end items-center">
                <button
                  onClick={handleNext}
                  className="rounded-md p-4 text-white bg-sky-900 w-[100px]"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        )}

        {currentStep === 2 && (
          <div className="bg-zinc-100 rounded-md p-6 w-[800px] ml-auto mr-auto mt-28 max-md:w-full max-md:mt-2">
            <div className="flex py-4">
              <h2>Education</h2>
            </div>
            <hr />
            <div className="flex flex-col mt-6">
              <div className="flex gap-2 justify-between mb-2">
                <h2 className="">Highest Qualification</h2>
                <h2 className="max-md:hidden">Year of Completion</h2>
              </div>

              <div className="flex gap-2 max-md:flex-col">
                <div className="flex flex-col w-[33.33%] max-md:w-full">
                  <select
                    onChange={(e) => {
                      setQualificationError(false);
                      setForm({ ...form, qualification: e.target.value });
                    }}
                    value={form.qualification}
                    className={`rounded-md outline-none p-2 bg-transparent ${
                      isQualificationError
                        ? "border-red-500 border-[1px]"
                        : "border-zinc-500 border-[1px]"
                    }`}
                    autoFocus={isQualificationError ? true : false}
                  >
                    <option value={""}>Please Select</option>
                    <option value={"wassce"}>Wassce</option>
                    <option value={"diploma"}>Diploma</option>
                    <option value={"degree"}>Degree</option>
                  </select>
                  <ErrorText
                    body={isQualificationError ? "Field must not be empty" : ""}
                  />
                </div>
                <div className="flex flex-col w-[33.33%] max-md:w-full">
                  <input
                    onChange={(e) => {
                      setInstitutionError(false);
                      setForm({ ...form, institution: e.target.value });
                    }}
                    value={form.institution}
                    placeholder="Institution"
                    className={`rounded-md outline-none p-2 bg-transparent ${
                      isInstitutionError
                        ? "border-red-500 border-[1px]"
                        : "border-zinc-500 border-[1px]"
                    }`}
                    type="text"
                    autoFocus={isInstitutionError ? true : false}
                  />
                  <ErrorText
                    body={isInstitutionError ? "Field must not be empty" : ""}
                  />
                </div>
                <div className="flex flex-col w-[33.33%] max-md:w-full">
                  <input
                    onChange={(e) => {
                      setCompletionError(false);
                      setForm({ ...form, completion: e.target.value });
                    }}
                    value={form.completion}
                    placeholder="Year of Completion"
                    className={`rounded-md outline-none p-2 bg-transparent ${
                      isCompletionError
                        ? "border-red-500 border-[1px]"
                        : "border-zinc-500 border-[1px]"
                    }`}
                    type="date"
                    autoFocus={isCompletionError ? true : false}
                  />{" "}
                  <ErrorText
                    body={isCompletionError ? "Field must not be empty" : ""}
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col mt-6">
              <h2 className=" mb-2">Admission Type</h2>
              <div className="flex gap-2 max-md:flex-col">
                <div className="flex flex-col w-[33.33%] max-md:w-full">
                  <select
                    onChange={(e) => {
                      setAcademicCredError(false);
                      setForm({ ...form, academic_cred: e.target.value });
                    }}
                    value={form.academic_cred}
                    autoFocus={isAcademicCredError ? true : false}
                    className={`rounded-md outline-none p-2 bg-transparent ${
                      isAcademicCredError
                        ? "border-red-500 border-[1px]"
                        : "border-zinc-500 border-[1px]"
                    }`}
                  >
                    <option value={"diploma"}>Diploma</option>
                    <option value={"degree"}>Degree</option>
                    <option value={"masters"}>Masters</option>
                  </select>
                  <ErrorText
                    body={isAcademicCredError ? "Field must not be empty" : ""}
                  />
                </div>

                <div className="flex flex-col w-[33.33%] max-md:w-full">
                  <select
                    onChange={(e) => {
                      setAdmissionTypeError(false);
                      setForm({ ...form, admission_type: e.target.value });
                    }}
                    value={form.admission_type}
                    className={`rounded-md outline-none p-2 bg-transparent ${
                      isAdmissionTypeError
                        ? "border-red-500 border-[1px]"
                        : "border-zinc-500 border-[1px]"
                    }`}
                    autoFocus={isAdmissionTypeError ? true : false}
                  >
                    <option value={""}>Sandwich / Regular</option>
                    <option value={"regular"}>Regular</option>
                    <option value={"sandwich"}>Sandwich</option>
                  </select>
                  <ErrorText
                    body={isAdmissionTypeError ? "Field must not be empty" : ""}
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col mt-6">
              <h2 className=" mb-2">Program</h2>
              <div className="flex gap-2">
                <div className="flex flex-col w-[33.33%] max-md:w-full">
                  <select
                    onChange={(e) => {
                      setProgramError(false);
                      setForm({ ...form, program: e.target.value });
                    }}
                    value={form.program}
                    className={`rounded-md outline-none p-2 bg-transparent ${
                      isProgramError
                        ? "border-red-500 border-[1px]"
                        : "border-zinc-500 border-[1px]"
                    }`}
                    autoFocus={isProgramError ? true : false}
                  >
                    <option value={""}>Please Select</option>
                    {form.academic_cred === "diploma" && (
                      <>
                        {" "}
                        <option value={"DiplomaComputerScience"}>
                          Diploma in Computer Science
                        </option>
                        <option value={"DiplomaCyberSecurity"}>
                          Diploma in Cyber Security
                        </option>
                        <option value={"DiplomaInfoSec"}>
                          Diploma in Information Security
                        </option>
                      </>
                    )}

                    {form.academic_cred === "degree" && (
                      <>
                        {" "}
                        <option value={"DegreeComputerScience"}>
                          Degree in Computer Science
                        </option>
                        <option value={"DegreeCyberSecurity"}>
                          Degree in Cyber Security
                        </option>
                        <option value={"DegreeInfoSec"}>
                          Degree in Information Security
                        </option>
                      </>
                    )}

                    {form.academic_cred === "masters" && (
                      <>
                        {" "}
                        <option value={"MasterComputerScience"}>
                          Master in Computer Science
                        </option>
                        <option value={"MasterCyberSecurity"}>
                          Master in Cyber Security
                        </option>
                        <option value={"MasterInfoSec"}>
                          Master in Information Security
                        </option>
                      </>
                    )}
                  </select>
                  <ErrorText
                    body={isProgramError ? "Field must not be empty" : ""}
                  />{" "}
                </div>
              </div>
            </div>

            <div className="flex flex-col mt-6">
              <h2 className=" mb-2">Proof of Qualification</h2>
              <div className="flex gap-2 max-md:flex-col">
                <div className="flex flex-col w-[33.33%] max-md:w-full">
                  <label
                    className={`${
                      form.email !== ""
                        ? "h-[200px] w-[200px] rounded-md cursor-pointer"
                        : "hidden"
                    }`}
                    htmlFor="image-proof"
                  >
                    <img
                      src={imagePreview}
                      alt=""
                      className="h-full w-full"
                    ></img>
                  </label>
                  <input
                    name="image-proof"
                    id="image-proof"
                    onChange={handleImageChange}
                    type="file"
                    accept=".jpg,.jpeg,.png"
                    className="p-2 bg-transparent border-zinc-500 border-[1px] rounded-md outline-none hidden"
                  />

                  <ErrorText />
                </div>

                <div className=" w-[66.67%] max-md:w-full">
                  <span>
                    You are required to upload a scanned image of your higest
                    qualification as proof
                  </span>
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
                onClick={handleNext}
                className="rounded-md p-4 text-white bg-sky-900 w-[100px]"
              >
                Next
              </button>
            </div>
          </div>
        )}

        {currentStep === 3 && (
          <div className="bg-zinc-100 rounded-md p-6 w-[800px] ml-auto mr-auto mt-28 max-md:w-full max-md:mt-2">
            <div className="flex py-4">
              <div className="flex flex-col">
                <h2>Application Fee</h2>
                <span>
                  Payment is due 3 days prior to the start of the class
                </span>
              </div>
            </div>
            <hr />

            <div className="flex">
              <div className="flex flex-col">
                <h2>Payment Method</h2>
                <div className="flex text-l gap-8">
                  <div className="flex gap-2">
                    <input
                      onChange={(e) => {
                        setPaymentError(false);
                        setForm({ ...form, payment_method: e.target.value });
                        if (isPerson) {
                          togglePerson();
                        }
                        toggleCC();
                      }}
                      type="checkbox"
                      checked={isCC ? true : false}
                      value={"creditcard"}
                    />
                    <span>Credit Card</span>{" "}
                  </div>

                  <div className="flex gap-2">
                    <input
                      onChange={(e) => {
                        setPaymentError(false);
                        setForm({ ...form, payment_method: e.target.value });
                        if (isCC) {
                          toggleCC();
                        }
                        togglePerson();
                      }}
                      type="checkbox"
                      value={"person"}
                      checked={isPerson ? true : false}
                    />
                    <span>In-person</span>
                  </div>
                </div>
                <ErrorText body={isPaymentError ? "Choose an option" : ""} />
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
        )}
      </div>
    </div>
  );
};

export default MainPage;
