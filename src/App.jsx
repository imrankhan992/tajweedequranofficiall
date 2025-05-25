import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import BlogList from "./pages/BlogList";
import BlogDetail from "./pages/BlogDetail";

function App() {
  return (
    <div className="mx-auto ">
      {/* You can keep your header here */}
     

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<BlogList />} />
        <Route path="/blog/:slug" element={<BlogDetail />} />
      </Routes>
    </div>
  );
}

export default App;
