import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavbarComponent from "./components/NavbarComponent";
import Home from "./pages/Home";
import Login from "./components/Login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Dashboard from "./components/Dashboard";
import Register from "./components/Register";
import StudentList from "./pages/StudentList";
import ExamList from "./pages/ExamList";
import ExamDetails from "./pages/ExamDetails";
import CreateExam from "./pages/CreateExam";
import TakeExam from "./pages/TakeExam";
import Result from "./pages/Result";
import ExamResults from "./pages/ExamResults";
import StudentExamList from "./pages/StudentExamList";

function App() {
  return (
    <Router>
      <NavbarComponent />
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/students" element={<StudentList />} />
        <Route path="/exams" element={<ExamList />} />
        <Route path="/exams/view/:id" element={<ExamDetails />} />
        <Route path="/exams/create" element={<CreateExam />} />
        <Route path="/exams/take/:id" element={<TakeExam />} />
        <Route path="/result/:id" element={<Result />} />
        <Route path="/exams/results/:examId" element={<ExamResults />} />
        <Route path="/exam-list" element={<StudentExamList />} />
      </Routes>
    </Router>
  );
}

export default App;
