import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import Alert from "./components/Alert";
import { authLoader } from "./utils/auth";
import ProfilePage from "./pages/ProfilePage";
import PageSkeleton from "./components/Skeleton";

const router = createBrowserRouter([
  { id: "login", path: "/login", Component: LoginPage },
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
  return (
    <>
      {false && <Alert />}
      <RouterProvider router={router} fallbackElement={<PageSkeleton />} />
    </>
  );
}

export default App;
