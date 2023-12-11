import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DetailPage from "./pages/DetailPage";
import Navbar from "./components/Navbar";
import SearchPage from "./pages/SearchPage";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search/:keyword" element={<SearchPage />} />
        <Route path="/:id" element={<DetailPage />} />

      </Routes>
    </>
  );
}
