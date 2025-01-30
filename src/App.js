import "./App.css";
import {
  CareersPage,
  HomePage,
  NewsPage,
  ThinkingPage,
  Contact,
  WorkPage,
  AboutPage,
  Blog,
} from "./pages/index";
import { ResetScroll } from "./container/components/index";
import { Routes, Route } from "react-router-dom";
import { useRef } from "react";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

function App() {
  const containerRef = useRef(null);

  return (
    <>
      <LocomotiveScrollProvider
        options={{
          smooth: true,
          smartphone: {
            smooth: true,
          },
          tablet: {
            smooth: true,
          },
        }}
        watch={[]}
        containerRef={containerRef}
      >
        <ResetScroll>
          <main data-scroll-container ref={containerRef}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/news" element={<NewsPage />} />
              <Route path="/careers" element={<CareersPage />} />
              <Route path="/thinking/*" element={<ThinkingPage />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/work" element={<WorkPage />} />
              <Route path="/about/*" element={<AboutPage />} />
              <Route path="/blog/*" element={<Blog />} />
            </Routes>
          </main>
        </ResetScroll>
      </LocomotiveScrollProvider>
    </>
  );
}

export default App;
