import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <div className="min-h-screen bg-zinc-300">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/application" element={<MainPage />} />
          <Route path="/status" element={<StatusPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

const HomePage = () => {
  const background = {
    backgroundImage: 'url("/images/pen.jpg")',
  };
  return (
    <div
      style={background}
      className="bg-cover bg-fixed bg-center min-h-screen flex flex-col items-center md:justify-center"
    >
      <h1 className="text-white font-bold md:text-4xl bg-slate-600 bg-opacity-50 backdrop-blur-md p-4 rounded-md mt-[200px]">
        College Admission Form
      </h1>

      <div className=" mt-6 text-center flex gap-4">
        <Link
          to="/application"
          className=" bg-sky-900 hover:bg-sky-500 text-white p-4 rounded-md"
        >
          Apply Now
        </Link>

        <Link
          to="/status"
          className=" bg-sky-900 hover:bg-sky-500 text-white p-4 rounded-md"
        >
          Check Status
        </Link>
      </div>
    </div>
  );
};

const MainPage = () => {
  return (
    <>
      <div className="bg-zinc-100 h-20 w-full flex items-center justify-center">
        <span>College Admission Form</span>
      </div>

      <div className="bg-zinc-100 rounded-md p-6 w-[800px] ml-auto mr-auto mt-28">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-4">
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
          <div className="flex gap-2">
            <input
              placeholder="Firstname"
              className="p-2 bg-transparent border-zinc-500 border-[1px] rounded-md w-[33.33%] outline-none"
              type="text"
              id="firstName"
            />
            <input
              placeholder="Middlename"
              className="p-2 bg-transparent border-zinc-500 border-[1px] rounded-md w-[33.33%] outline-none"
              type="text"
              id="middleName"
            />
            <input
              placeholder="Lastname"
              className="p-2 bg-transparent border-zinc-500 border-[1px] rounded-md w-[33.33%] outline-none"
              type="text"
              id="lastName"
            />
          </div>
        </div>

        <div className="flex flex-col mt-6">
          <h2 className=" mb-2">Birth Date</h2>
          <div className="flex gap-2">
            <input
              placeholder="Birth Date"
              className="p-2 bg-transparent border-zinc-500 border-[1px] rounded-md w-[33.33%] outline-none"
              type="date"
              id="birthDate"
            />
          </div>
        </div>

        <div className="flex justify-between mt-6">
          <div className="flex flex-col w-[40%]">
            <h2 className="mb-2">Gender</h2>

            <div className="flex justify-between text-xl items-center">
              <div className="flex gap-2 items-center">
                <input
                  className="p-2 bg-transparent border-zinc-500 border-[1px] rounded-md outline-none"
                  type="radio"
                  id="male"
                  value={"male"}
                />

                <label htmlFor="male">Male</label>
              </div>
              <div className="flex gap-2 items-center">
                <input
                  className="p-2 bg-transparent border-zinc-500 border-[1px] rounded-md outline-none"
                  type="radio"
                  id="female"
                  value={"female"}
                />
                <label htmlFor="female">Female</label>
              </div>
            </div>
          </div>

          <div className="flex flex-col w-[50%]">
            <h2 className="mb-2">Of which country are you a citizen</h2>
            <select className="p-2 bg-transparent border-zinc-500 border-[1px] rounded-md w-[80%] outline-none">
              <option value="">Please Select</option>
            </select>
          </div>
        </div>

        <div className="flex flex-col mt-6">
          <h2 className=" mb-2">Contact</h2>
          <div className="flex gap-2">
            <input
              className="p-2 bg-transparent border-zinc-500 border-[1px] rounded-md w-[50%] outline-none"
              type="text"
              placeholder="Phone number"
            />
            <input
              className="p-2 bg-transparent border-zinc-500 border-[1px] rounded-md w-[50%] outline-none"
              type="email"
              placeholder="email"
            />
          </div>
        </div>

        <div className="flex flex-col mt-6">
          <h2 className=" mb-2">Next of Kin</h2>
          <div className="flex gap-2">
            <input
              className="p-2 bg-transparent border-zinc-500 border-[1px] rounded-md w-[33.33%] outline-none"
              type="text"
              placeholder="Firstname"
            />
            <input
              className="p-2 bg-transparent border-zinc-500 border-[1px] rounded-md w-[33.33%] outline-none"
              type="text"
              placeholder="Lastname"
            />
            <input
              className="p-2 bg-transparent border-zinc-500 border-[1px] rounded-md w-[33.33%] outline-none"
              type="text"
              placeholder="Relationship"
            />
          </div>

          <div className="flex flex-col mt-6">
            <h2 className=" mb-2">Next of Kin Contact</h2>
            <div className="flex gap-2">
              <input
                className="p-2 bg-transparent border-zinc-500 border-[1px] rounded-md w-[50%] outline-none"
                type="text"
                placeholder="Phone number"
              />
              <input
                className="p-2 bg-transparent border-zinc-500 border-[1px] rounded-md w-[50%] outline-none"
                type="email"
                placeholder="email"
              />
            </div>
          </div>

          <div className="flex flex-col mt-6">
            <h2 className=" mb-2">
              Do you speak any languages other than English
            </h2>
            <div className="flex gap-2 text-xl">
              <div className="flex gap-2 w-[50%]">
                <input
                  className="p-2 bg-transparent border-zinc-500 border-[1px] rounded-md  outline-none"
                  type="radio"
                  placeholder="Phone number"
                  id="langYes"
                />
                <label htmlFor="langYes">Yes</label>
              </div>

              <div className="flex gap-2 w-[50%]">
                <input
                  className="p-2 bg-transparent border-zinc-500 border-[1px] rounded-md  outline-none"
                  type="radio"
                  placeholder="Phone number"
                  id="langNo"
                />
                <label htmlFor="langNo">No</label>
              </div>
            </div>

            <div className="flex flex-col mt-4">
              <span>Please List them</span>
              <textarea className="p-2 bg-transparent border-zinc-500 border-[1px] rounded-md  outline-none h-[200px]"></textarea>
            </div>
          </div>

          <div className="flex mt-6 justify-end items-center">
            <button className="rounded-md p-4 text-white bg-sky-900 w-[100px]">
              Next
            </button>
          </div>
        </div>
      </div>

      <div className="bg-zinc-100 rounded-md p-6 w-[800px] ml-auto mr-auto mt-28">
        <div className="flex py-4">
          <h2>Education</h2>
        </div>
        <hr />
        <div className="flex flex-col mt-6">
          <div className="flex gap-2 justify-between mb-2">
            <h2 className="">Highest Qualification</h2>
            <h2 className="">Year of Completion</h2>
          </div>

          <div className="flex gap-2">
            <select className="p-2 bg-transparent border-zinc-500 border-[1px] rounded-md w-[33.33%] outline-none">
              <option value={""}></option>
            </select>
            <input
              placeholder="Institution"
              className="p-2 bg-transparent border-zinc-500 border-[1px] rounded-md w-[33.33%] outline-none"
              type="text"
            />
            <input
              placeholder="Year of Completion"
              className="p-2 bg-transparent border-zinc-500 border-[1px] rounded-md w-[33.33%] outline-none"
              type="date"
            />
          </div>
        </div>

        <div className="flex flex-col mt-6">
          <h2 className=" mb-2">Admission Type</h2>
          <div className="flex gap-2">
            <select className="p-2 bg-transparent border-zinc-500 border-[1px] rounded-md w-[33.33%] outline-none">
              <option value={"diploma"}>Diploma</option>
              <option value={"degree"}>Degree</option>
              <option value={"masters"}>Masters</option>
            </select>

            <select className="p-2 bg-transparent border-zinc-500 border-[1px] rounded-md w-[33.33%] outline-none">
              <option value={"regular"}>Regular</option>
              <option value={"sandwich"}>Sandwich</option>
            </select>
          </div>
        </div>

        <div className="flex flex-col mt-6">
          <h2 className=" mb-2">Program</h2>
          <div className="flex gap-2">
            <select className="p-2 bg-transparent border-zinc-500 border-[1px] rounded-md w-[33.33%] outline-none">
              <option value={""}>Please Select</option>
              <option value={"diploma"}>Diploma</option>
              <option value={"degree"}>Degree</option>
              <option value={"masters"}>Masters</option>
            </select>
          </div>
        </div>

        <div className="flex mt-6 justify-end items-center">
          <button className="rounded-md p-4 text-white bg-sky-900 w-[100px]">
            Next
          </button>
        </div>
      </div>

      <div className="bg-zinc-100 rounded-md p-6 w-[800px] ml-auto mr-auto mt-28">
        <div className="flex py-4">
          <div className="flex flex-col">
            <h2>Application Fee</h2>
            <span>Payment is due 3 days prior to the start of the class</span>
          </div>
        </div>
        <hr />

        <div className="flex">
          <div className="flex flex-col">
            <h2>Payment Method</h2>
            <span>Payment is due 3 days prior to the start of the class</span>
          </div>
        </div>

        <div className="flex mt-6 justify-end items-center">
          <button className="rounded-md p-4 text-white bg-sky-900 w-[100px]">
            Next
          </button>
        </div>
      </div>
    </>
  );
};

const StatusPage = () => {
  return (
    <>
      <h1>Status</h1>
    </>
  );
};

export default App;
