import Home from "~/Components/admin/Pages/Home";
import Students from "~/Components/admin/Pages/Students";
import Upload from "~/Components/admin/Pages/Upload";

const publicRouters = [
  { path: "/", component: Home },
  { path: "/students", component: Students },
  { path: "/upload", component: Upload, layout: null },
];

const privateRouters = [];

export { publicRouters, privateRouters };
