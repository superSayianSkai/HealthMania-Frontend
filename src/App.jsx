import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MyPage from "./pages/MyPage";
import AiPage from "./pages/AiPage";
import AIQuery from "./component/AIQueries";
import Auth from "./pages/Auth";
import HomePage from "./pages/HomePage";
import ResetPassword from "./pages/ResetPassword";
import GetPasswordOTP from "./pages/GetPasswordOTP";
import ProtectedRoute from "./component/ProtectedRoute";
import UserHistory from "./pages/UserHistory";
import ModelOption from "./component/ModelOption";
import HealthIntelligenceAge from "./component/HealthIntelligenceAge";
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
      element: <MyPage />,
    },
    // ✅ Protect all AI-related routes
    {
      path: "history",
      element: <UserHistory />,
    },
    {
      path: "/health-intelligence-age",
      element: <HealthIntelligenceAge />,
    },
    {
      path: "ai-page",
      element: <ProtectedRoute />, // ✅ Wrap these in `ProtectedRoute`
      children: [
        {
          path: ":aiType/:id",
          element: <AiPage />,
        },
        {
          path: "ai-query/:aiType/:subAiType/:id",
          element: <AIQuery />,
        },
        {
          path: "ai-query/choose-ai/:aiType/:id",
          element: <ModelOption />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
