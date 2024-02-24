import "./App.css";
import ClassTeacherHeader from "./Component/ClassTeacherHeader";
import Footer from "./Component/Footer";
import Header from "./Component/Header";
import StudentList from "./Component/StudentList";
import StudentPreview from "./Component/StudentPreview";
import UploadViewExcel from "./Component/StudentPreview";

function App() {
  return (
    <>
      <Header />
      <ClassTeacherHeader />
      <div className="flex">
        <StudentList />
        <StudentPreview />
      </div>

      <Footer />
    </>
  );
}

export default App;
