import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import BlogDetails from "./Pages/Blog/BlogDetails";
import Blogs from "./Pages/Blogs/Blogs";
import Home from "./Pages/Home/Home/Home";
import Projects from "./Pages/Projects/Projects/Projects";
import Footer from "./Pages/Shared/Footer/Footer";
import Header from "./Pages/Shared/Header/Header";

function App() {
    return (
        <div className="">
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/blogs" element={<Blogs />} />

                    <Route path="/blog/:id" element={<BlogDetails />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;
