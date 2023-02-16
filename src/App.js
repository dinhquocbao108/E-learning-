import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./features/Auth/components/login-register/Login";
import Footer from "./layouts/components/Footer/Footer";
import Header from "./layouts/components/Header/Header";
import About from "./pages/about/About";
import CourseDetail from "./pages/courseDetail/CourseDetail";
import Home from "./pages/home/Home";

function App() {
  return (
    <div>

      <BrowserRouter>
        <Routes>

          <Route path="/" element={
            <>
              <Header />
              <Home />
              <Footer />
            </>
          } />
          <Route
            path="/detail" element={
              <>
                <Header />
                <CourseDetail />
                <Footer />
              </>
            }
          />   <Route
            path="/about" element={
              <>
                <Header />
                <About />
                <Footer />
              </>
            }
          />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
