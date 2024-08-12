import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import MainPage from "./pages/MainPage";
import StatusPage from "./pages/StatusPage";

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

export default App;
