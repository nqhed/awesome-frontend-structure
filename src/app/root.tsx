import LoginView from "@/presentation/views/auth/login.view";
import BlogDetailView from "@/presentation/views/blog/blog-detail.view";
import BlogListView from "@/presentation/views/blog/blog-list.view";
import DashboardView from "@/presentation/views/dashboard/dashboard.view";
import { Routes, Route } from "react-router";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<DashboardView />} />
        <Route path="/blogs">
          <Route index element={<BlogListView />} />
          <Route path=":id" element={<BlogDetailView />} />
        </Route>
        <Route path="/auth">
          <Route path="login" element={<LoginView />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
