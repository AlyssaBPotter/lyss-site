import "./App.css";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import BookListPage from "./pages/BookListPage";
import BookPage from "./pages/BookPage";
import UpcomingPage from "./pages/UpcomingPage";
import AboutPage from "./pages/AboutPage";
import Footer from "./components/Footer";
// import { useMediaQuery } from "react-responsive";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  // const isDesktopOrLaptop = useMediaQuery({
  //   query: "(min-width: 1224px)",
  // });
  // const isBigScreen = useMediaQuery({ query: "(min-width: 1824px)" });
  // const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  // const isPortrait = useMediaQuery({ query: "(orientation: portrait)" });
  // const isRetina = useMediaQuery({ query: "(min-resolution: 2dppx)" });

  return (
    <Router basename="/lyss-site">
      <div className="container">
        <div className="app">
          <Header />
          <Routes>
            <Route path="/" exact element={<HomePage />} />{" "}
            {/* 'exact' to only render this page when the path is exactly that */}
            <Route path="/books" element={<BookListPage />} />
            <Route path="/upcoming" element={<UpcomingPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/book/:id" element={<BookPage />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
