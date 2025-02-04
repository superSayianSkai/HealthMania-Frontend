  import { createBrowserRouter, RouterProvider } from "react-router-dom";
  import NotificationPage from "./pages/NotificationPage";
  import MyPage from "./pages/MyPage";
  import AiPage from "./pages/AiPage";
  import NavRouter from "./route/NavRouter";
  import AIQuery from "./component/AIQueries";
  import WorkoutPage from "./pages/WorkoutPage";
  import Auth from "./pages/Auth";
  import HomePage from "./pages/HomePage";
  import ResetPassword from "./pages/ResetPassword";
  import GetPasswordOTP from "./pages/GetPasswordOTP";
  import ProtectedRoute from "./component/ProtectedRoute";
  const App = () => {
    const router = createBrowserRouter([
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "signIn",
        element: <Auth />,
      },
      {
        path: "getpasswordotp",
        element: <GetPasswordOTP />,
      },
      {
        path: "resetpassword",
        element: <ResetPassword />,
      },
      {
        path: "myPage",
        element: (
          <NavRouter>
            <MyPage />
          </NavRouter>
        ),
      },
      // ✅ Protect all AI-related routes
      {
        path: "ai-page",
        element: <ProtectedRoute />, // ✅ Wrap these in `ProtectedRoute`
        children: [
          {
            path: ":aiType",
            element: <AiPage />,
          },
          {
            path: "ai-query/:ai-type",
            element: <AIQuery />,
          },
        ],
      },
    ]);

    return <RouterProvider router={router} />;
  };

  export default App;
