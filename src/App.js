import "./App.css";
import { HomePage } from "./pages";
import { Navigation, SmoothScroll } from "./container/commponents/index";

function App() {
  return (
    <>
      <Navigation />

      <SmoothScroll>
        <HomePage />
        <div className="h-[2000px] w-[40px]"></div>
      </SmoothScroll>
    </>
  );
}

export default App;
