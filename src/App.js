import "./App.css";
import { HomePage } from "./pages";
import { SmoothScroll } from "./container/commponents/index";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <SmoothScroll>
        <div>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/winter"
              element={<div className="h-[1200px] w-full bg-red-300"></div>}
            />
          </Routes>
          <div className="h-[2000px] w-[40px]"></div>
        </div>
      </SmoothScroll>
    </>
  );
}

export default App;
