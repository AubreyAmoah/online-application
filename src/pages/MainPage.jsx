import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap, faHome } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ErrorText from "../components/ErrorText";

const MainPage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isError, setError] = useState(false);
  const [isActive, setActive] = useState(false);
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

  const handleNext = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };
  return (
    <div className="">
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
                <span>123 Dadesen Street, Winnba,</span>
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
                <div className="flex flex-col w-[33.33%] max-md:w-full">
                  <input
                    placeholder="Firstname"
                    className="p-2 bg-transparent border-zinc-500 border-[1px] rounded-md outline-none"
                    type="text"
                    id="firstName"
                  />
                  <ErrorText />
                </div>

                <div className="flex flex-col w-[33.33%] max-md:w-full">
                  <input
                    placeholder="Middlename"
                    className="p-2 bg-transparent border-zinc-500 border-[1px] rounded-md outline-none"
                    type="text"
                    id="middleName"
                  />
                  <ErrorText />
                </div>

                <div className="flex flex-col w-[33.33%] max-md:w-full">
                  {" "}
                  <input
                    placeholder="Lastname"
                    className="p-2 bg-transparent border-zinc-500 border-[1px] rounded-md outline-none"
                    type="text"
                    id="lastName"
                  />{" "}
                  <ErrorText />
                </div>
              </div>
            </div>

            <div className="flex flex-col mt-6">
              <h2 className=" mb-2">Birth Date</h2>
              <div className="flex gap-2 max-md:flex-col">
                <div className="flex flex-col w-[33.33%] max-md:w-full">
                  <input
                    placeholder="Birth Date"
                    className="p-2 bg-transparent border-zinc-500 border-[1px] rounded-md outline-none"
                    type="date"
                    id="birthDate"
                  />
                  <ErrorText />
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
                        if (isFemale) {
                          toggleFemale();
                        }
                        toggleMale();
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
                        if (isMale) {
                          toggleMale();
                        }
                        toggleFemale();
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
                <ErrorText />
              </div>

              <div className="flex flex-col w-[50%] max-md:w-full">
                <h2 className="mb-2">Of which country are you a citizen</h2>
                <select className="p-2 bg-transparent border-zinc-500 border-[1px] rounded-md w-[80%] outline-none max-md:w-full">
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
                    className="p-2 bg-transparent border-zinc-500 border-[1px] rounded-md outline-none"
                    type="text"
                    placeholder="Phone number"
                  />
                  <ErrorText />{" "}
                </div>
                <div className="flex flex-col w-[50%] max-md:w-full">
                  <input
                    className="p-2 bg-transparent border-zinc-500 border-[1px] rounded-md outline-none"
                    type="email"
                    placeholder="email"
                  />
                  <ErrorText />
                </div>
              </div>
            </div>

            <div className="flex flex-col mt-6">
              <h2 className=" mb-2">Next of Kin</h2>
              <div className="flex gap-2 max-md:flex-col">
                <div className="flex flex-col w-[33.33%] max-md:w-full">
                  <input
                    className="p-2 bg-transparent border-zinc-500 border-[1px] rounded-md outline-none"
                    type="text"
                    placeholder="Firstname"
                  />{" "}
                  <ErrorText />
                </div>
                <div className="flex flex-col w-[33.33%] max-md:w-full">
                  <input
                    className="p-2 bg-transparent border-zinc-500 border-[1px] rounded-md outline-none"
                    type="text"
                    placeholder="Lastname"
                  />
                  <ErrorText />
                </div>
                <div className="flex flex-col w-[33.33%] max-md:w-full">
                  <input
                    className="p-2 bg-transparent border-zinc-500 border-[1px] rounded-md outline-none"
                    type="text"
                    placeholder="Relationship"
                  />
                  <ErrorText />
                </div>
              </div>

              <div className="flex flex-col mt-6">
                <h2 className=" mb-2">Next of Kin Contact</h2>
                <div className="flex gap-2 max-md:flex-col">
                  <div className="flex flex-col w-[50%] max-md:w-full">
                    <input
                      className="p-2 bg-transparent border-zinc-500 border-[1px] rounded-md outline-none"
                      type="text"
                      placeholder="Phone number"
                    />
                    <ErrorText />
                  </div>
                  <div className="flex flex-col w-[50%] max-md:w-full">
                    <input
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
                <ErrorText />

                <div className="flex flex-col mt-4">
                  {isYes && (
                    <>
                      {" "}
                      <span>Please List them</span>{" "}
                      <textarea className="p-2 bg-transparent border-zinc-500 border-[1px] rounded-md  outline-none h-[200px] max-md:w-full"></textarea>
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
                  <select className="p-2 bg-transparent border-zinc-500 border-[1px] rounded-md outline-none">
                    <option value={""}>Please Select</option>
                    <option value={"wassce"}>Wassce</option>
                    <option value={"diploma"}>Diploma</option>
                    <option value={"degree"}>Degree</option>
                  </select>
                  <ErrorText />
                </div>
                <div className="flex flex-col w-[33.33%] max-md:w-full">
                  <input
                    placeholder="Institution"
                    className="p-2 bg-transparent border-zinc-500 border-[1px] rounded-md outline-none"
                    type="text"
                  />
                  <ErrorText />
                </div>
                <div className="flex flex-col w-[33.33%] max-md:w-full">
                  <input
                    placeholder="Year of Completion"
                    className="p-2 bg-transparent border-zinc-500 border-[1px] rounded-md outline-none"
                    type="date"
                  />{" "}
                  <ErrorText />{" "}
                </div>
              </div>
            </div>

            <div className="flex flex-col mt-6">
              <h2 className=" mb-2">Admission Type</h2>
              <div className="flex gap-2 max-md:flex-col">
                <div className="flex flex-col w-[33.33%] max-md:w-full">
                  <select className="p-2 bg-transparent border-zinc-500 border-[1px] rounded-md outline-none">
                    <option value={"diploma"}>Diploma</option>
                    <option value={"degree"}>Degree</option>
                    <option value={"masters"}>Masters</option>
                  </select>
                  <ErrorText />
                </div>

                <div className="flex flex-col w-[33.33%] max-md:w-full">
                  <select className="p-2 bg-transparent border-zinc-500 border-[1px] rounded-md outline-none">
                    <option value={"regular"}>Regular</option>
                    <option value={"sandwich"}>Sandwich</option>
                  </select>
                  <ErrorText />
                </div>
              </div>
            </div>

            <div className="flex flex-col mt-6">
              <h2 className=" mb-2">Program</h2>
              <div className="flex gap-2">
                <div className="flex flex-col w-[33.33%] max-md:w-full">
                  <select className="p-2 bg-transparent border-zinc-500 border-[1px] rounded-md outline-none">
                    <option value={""}>Please Select</option>
                    <option value={"diploma"}>Diploma</option>
                    <option value={"degree"}>Degree</option>
                    <option value={"masters"}>Masters</option>
                  </select>
                  <ErrorText />{" "}
                </div>
              </div>
            </div>

            <div className="flex flex-col mt-6">
              <h2 className=" mb-2">Proof of Qualification</h2>
              <div className="flex gap-2 max-md:flex-col">
                <div className="flex flex-col w-[33.33%] max-md:w-full">
                  <input
                    type="file"
                    className="p-2 bg-transparent border-zinc-500 border-[1px] rounded-md outline-none"
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
                        if (isPerson) {
                          togglePerson();
                        }
                        toggleCC();
                      }}
                      type="checkbox"
                      checked={isCC ? true : false}
                    />
                    <span>Credit Card</span>{" "}
                  </div>

                  <div className="flex gap-2">
                    <input
                      onChange={(e) => {
                        if (isCC) {
                          toggleCC();
                        }
                        togglePerson();
                      }}
                      type="checkbox"
                      checked={isPerson ? true : false}
                    />
                    <span>In-person</span>{" "}
                  </div>
                </div>
                <ErrorText />
              </div>
            </div>

            <div className="flex mt-6 justify-between items-center">
              <button
                onClick={handleBack}
                className="rounded-md p-4 text-white bg-gray-500 w-[100px]"
              >
                back
              </button>
              <button className="rounded-md p-4 text-white bg-green-600 w-[100px]">
                Next
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MainPage;