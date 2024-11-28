import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NotificationPage from "./pages/NotificationPage";
import MyPage from "./pages/MyPage";
import AiPage from "./pages/AiPage";
import NavRouter from "./route/NavRouter";
import AIQuery from "./component/AIQueries";
import WorkoutPage from "./pages/WorkoutPage";
import ExperimentPage from "./sandbox/ExperimentPage";

const App = () => {
  const router = createBrowserRouter([
    // {
    //   path: "",
    //   element: <ExperimentPage />,
    // },
    {
      path: "/",
      element: (
        <NavRouter>
          <HomePage />
        </NavRouter>
      ),
    },
    {
      path: "aiPage/:AIType",
      element: (
        <NavRouter>
          <AiPage />
        </NavRouter>
      ),
    },
    {
      path: "notificationPage",
      element: (
        <NavRouter>
          <NotificationPage />
        </NavRouter>
      ),
    },
    {
      path: "myPage",
      element: (
        <NavRouter>
          <MyPage />
        </NavRouter>
      ),
    },
    {
      path: "Aipage/aiQuery/:AIType",
      element: <AIQuery />,
    },
    {
      path: "/workout",
      element: <WorkoutPage />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
