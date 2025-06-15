import React from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import AnimatedContent from "./components/AnimatedContent";
import { Home } from "./pages/Home";
import { WorkExperience } from "./pages/WorkExperience";
import { Skills } from "./pages/Skills";
import { Projects } from "./pages/Projects";
import { Contact } from "./pages/Contact";
import { NotFound } from "./pages/NotFound";
import SideBar from "./components/SideBar/SideBar";

import Squares from "./components/Squares";

function AnimatedRoutes() {
  const location = useLocation();

  const reverse = false;

  return (
    <Routes location={location} key={location.pathname}>
      <Route
        path="/"
        element={
          <AnimatedContent
            distance={600}
            direction="vertical"
            reverse={reverse}
            config={{ tension: 90, friction: 15 }}
            initialOpacity={0}
            animateOpacity={false}
            scale={1}
            threshold={0.2}
          >
            <Home />
          </AnimatedContent>
        }
      />
      <Route
        path="/experience"
        element={
          <AnimatedContent
            distance={600}
            direction="vertical"
            reverse={reverse}
            config={{ tension: 90, friction: 15 }}
            initialOpacity={0}
            animateOpacity={false}
            scale={1}
            threshold={0.2}
          >
            <WorkExperience />
          </AnimatedContent>
        }
      />
      <Route
        path="/skills"
        element={
          <AnimatedContent
            distance={600}
            direction="vertical"
            reverse={reverse}
            config={{ tension: 90, friction: 15 }}
            initialOpacity={0}
            animateOpacity={false}
            scale={1}
            threshold={0.2}
          >
            <Skills />
          </AnimatedContent>
        }
      />
      <Route
        path="/projects"
        element={
          <AnimatedContent
            distance={600}
            direction="vertical"
            reverse={reverse}
            config={{ tension: 90, friction: 15 }}
            initialOpacity={0}
            animateOpacity={false}
            scale={1}
            threshold={0.2}
          >
            <Projects />
          </AnimatedContent>
        }
      />
      <Route
        path="/contact"
        element={
          <AnimatedContent
            distance={600}
            direction="vertical"
            reverse={reverse}
            config={{ tension: 90, friction: 15 }}
            initialOpacity={0}
            animateOpacity={false}
            scale={1}
            threshold={0.2}
          >
            <Contact />
          </AnimatedContent>
        }
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div
        className="h-screen overflow-y-scroll hide-scrollbar shadow-lg"
        style={{
          background:
            "linear-gradient(135deg,rgba(146, 158, 104, 1) 0%, rgba(51, 50, 50, 1) 40%, rgba(18, 17, 17, 1) 100%)",
        }}>
        <div style={{ position: "relative", zIndex: 10 }}>
          <Squares
            speed={0.2}
            squareSize={90}
            direction="diagonal"
            borderColor="#B6B6B6"
            hoverFillColor="#A7B94B"
            style={{ pointerEvents: "auto" }}
          />
        </div>
        <div style={{ position: "relative", zIndex: 15 }}>
          <SideBar />
          <AnimatedRoutes />
        </div>
        <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
      </div>
    </BrowserRouter>
  );
}

export default App;
