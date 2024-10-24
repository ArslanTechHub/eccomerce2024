import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Cart from "./features/cart/Cart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/Signup",
    element: <SignupPage />,
  },
  {
    path: "/cart",
    element: <Cart/>,
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
      {/* <Home /> */}
      {/* <LoginPage></LoginPage> */}
      {/* <SignupPage/> */}
    </div>
  );
}

export default App;
