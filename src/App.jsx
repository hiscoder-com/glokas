import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";

import Footer from "./components/Footer";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import BookDemoPage from "./components/BookDemoPage";

function AppContent() {
  const location = useLocation();
  const isBookDemoPage = location.pathname === "/book-demo";

  return (
    <div id="top" className="min-h-screen">
      {!isBookDemoPage && <Header />}
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/book-demo" element={<BookDemoPage />} />
      </Routes>
      {!isBookDemoPage && <Footer />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
