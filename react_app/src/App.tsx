import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import Alert from "./components/Alert";
import { authLoader } from "./utils/auth";
import ProfilePage from "./pages/ProfilePage";
import PageSkeleton from "./components/Skeleton";
import SignUp from "./pages/SignUp";
import { useAppSelector } from "./hooks/useAppDispatch";
import axios from "axios";

axios.defaults.baseURL = import.meta.env.VITE_API_URL

const router = createBrowserRouter([
  { id: "login", path: "/login", Component: LoginPage },
  { id: "signup", path: "/signup", Component: SignUp },
  {
    id: "home",
    path: "/",
    Component: HomePage,
    loader: authLoader,
  },
  {
    id: "profile",
    path: "/profile",
    Component: ProfilePage,
    loader: authLoader,
  },
]);

function App() {
  const error = useAppSelector((state) => state.error);
  return (
    <>
      {error.show && <Alert message={error.message} />}
      <RouterProvider router={router} fallbackElement={<PageSkeleton />} />
    </>
  );
}

export default App;
