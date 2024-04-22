import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import "./App.css";
import { HomePage } from "./pages/HomePage";
import { Bio } from "./pages/Bio";
import { Resume } from "./pages/Resume";
import { BrowserRouter } from "react-router-dom";
import { SocialIcons } from "./components/icons";
import { Header } from "./components/header";
import withRouter from "./hooks/withRouter";

function _ScrollToTop(props) {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return props.children;
}
const ScrollToTop = withRouter(_ScrollToTop);

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Header />
        <Routes>
          <Route path="/me" element={<HomePage />} />
          <Route path="/me/bio" element={<Bio />} />
          <Route path="/me/resume" element={<Resume />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
        <SocialIcons />
      </ScrollToTop>
    </BrowserRouter>
  );
}
