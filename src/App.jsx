import React, { useEffect, useRef, useState } from "react";
import { BrowserRouter, Route, Routes, useLocation, useNavigate } from "react-router-dom";
import AnimatedContent from "./components/AnimatedContent";
import { Home } from "./pages/Home";
import { WorkExperience } from "./pages/WorkExperience";
import { Skills } from "./pages/Skills";
import { Projects } from "./pages/Projects";
import { Contact } from "./pages/Contact";
import { NotFound } from "./pages/NotFound";
import SideBar from './components/SideBar/SideBar';

import Squares from "./components/Squares";

const routesOrder = [
  "/",
  "/experience",
  "/skills",
  "/projects",
  "/contact",
];

function AnimatedRoutes({ direction }) {
  const location = useLocation();

  const reverse = direction == "down";

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
      <Route
        path="*"
        element={<NotFound />}
      />
    </Routes>
  );
}

function ScrollRouter() {
  const navigate = useNavigate();
  const location = useLocation();
  const containerRef = useRef(null);
  const wheelTimeoutRef = useRef(null);
  const [direction, setDirection] = useState("down");

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleWheel = (event) => {
      if (wheelTimeoutRef.current) return; // debounce

      const scrollTop = container.scrollTop;
      const scrollHeight = container.scrollHeight;
      const clientHeight = container.clientHeight;

      if (event.deltaY > 0) {
        // Scrolling down
        setDirection("down");
        if (scrollTop + clientHeight >= scrollHeight - 10) {
          const currentIndex = routesOrder.indexOf(location.pathname);
          if (currentIndex >= 0 && currentIndex < routesOrder.length - 1) {
            wheelTimeoutRef.current = setTimeout(() => {
              navigate(routesOrder[currentIndex + 1]);
              wheelTimeoutRef.current = null;
            }, 200);
          }
        }
      } else if (event.deltaY < 0) {
        // Scrolling up
        setDirection("up");
        if (scrollTop <= 10) {
          const currentIndex = routesOrder.indexOf(location.pathname);
          if (currentIndex > 0) {
            wheelTimeoutRef.current = setTimeout(() => {
              setTimeout(() => {
                navigate(routesOrder[currentIndex - 1]);
                wheelTimeoutRef.current = null;
              }, 100);
            }, 200);
          }
        }
      }
    };

    container.addEventListener("wheel", handleWheel, { passive: true });
    return () => {
      container.removeEventListener("wheel", handleWheel);
      if (wheelTimeoutRef.current) {
        clearTimeout(wheelTimeoutRef.current);
      }
    };
  }, [location.pathname, navigate]);

  return (
    <div
      ref={containerRef}
      className="h-screen overflow-y-scroll hide-scrollbar shadow-lg"
      style={{ background: "linear-gradient(135deg,rgba(146, 158, 104, 1) 0%, rgba(51, 50, 50, 1) 40%, rgba(18, 17, 17, 1) 100%)" }}
    >
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
        <AnimatedRoutes direction={direction} />
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
  );
}

function App() {
  return (
    <BrowserRouter>
      <ScrollRouter />
    </BrowserRouter>
  );
}

export default App;
