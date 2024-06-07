import { AuthLayout, Header } from "./components";
import { BookDetails, Home, Login, Signup } from "./pages";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route
            path="/book-details/:id"
            element={
              <AuthLayout>
                {" "}
                <BookDetails />
              </AuthLayout>
            }
          />

          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
