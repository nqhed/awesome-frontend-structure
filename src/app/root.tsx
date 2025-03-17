import LoginView from "@/presentation/features/auth/login.view";
import BlogDetailView from "@/presentation/features/blog/blog-detail.view";
import BlogListView from "@/presentation/features/blog/blog-list.view";
import DashboardView from "@/presentation/features/dashboard/dashboard.view";
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
