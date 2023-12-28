//Layout
import { LearningLayout } from "~/Components/admin/Layouts";

//Pages
import Courses from "~/Components/admin/Pages/Courses";
import Home from "~/Components/admin/Pages/Home";
import Login from "~/Components/admin/Pages/Login";
import Register from "~/Components/admin/Pages/Register";
import CourseDetail from "~/Components/admin/Pages/CourseDetail";
import Learning from "~/Components/admin/Pages/Learning";
import Dashboard from "~/Components/admin/Pages/Dashboard";
import AddCourse from "~/Components/admin/Pages/AddCourse";
import AddChapter from "~/Components/admin/Pages/AddChapter";

const publicRouters = [
  { path: "/", component: Home },
  { path: "/admin", component: Home },
  { path: "/courses", component: Courses },
  { path: "/login", component: Login, layout: null },
  { path: "/register", component: Register, layout: null },
  { path: "/coursedetail/:courseId", component: CourseDetail },
  { path: "/learning/:courseId", component: Learning, layout: LearningLayout },
  { path: "/dashboard", component: Dashboard },
  { path: "/addcourse", component: AddCourse },
  { path: "/addchapter", component: AddChapter },
];

const privateRouters = [];

export { publicRouters, privateRouters };
