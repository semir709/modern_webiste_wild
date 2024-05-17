import "./App.css";
import { HomePage } from "./pages";
import { Navigation, SmoothScroll } from "./container/commponents/index";

function App() {
  return (
    <>
      <SmoothScroll>
        <div>
          <Navigation />
          <HomePage />
          <div className="h-[2000px] w-[40px]"></div>
        </div>
      </SmoothScroll>
    </>
  );
}

export default App;
