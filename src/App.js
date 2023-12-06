import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DetailPage from "./pages/DetailPage";
import Navbar from "./components/Navbar";
import SearchPage from "./pages/SearchPage";
import WishPage from "./pages/WishPage";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search/:keyword" element={<SearchPage />} />
        <Route path="/:id" element={<DetailPage />} />
        <Route path="/wishlist" element={<WishPage />} />

      </Routes>
    </>
  );
}
