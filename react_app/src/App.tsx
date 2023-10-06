import {
  RouterProvider,
  createBrowserRouter,
  redirect,
} from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import Alert from "./components/Alert";

const router = createBrowserRouter([
  { id: "login", path: "/login", Component: LoginPage },
  {
    id: "home",
    path: "/",
    Component: HomePage,
    loader() {
      const token = localStorage.getItem("token");
      if (!token) {
        return redirect("/login");
      }
      return token;
    },
  },
]);

function App() {
  return (
    <>
      {false && <Alert />}
      <RouterProvider router={router} />
    </>
  );
}

export default App;
