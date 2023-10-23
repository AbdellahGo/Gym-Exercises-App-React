import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import Home from "./pages/Home";
import ExerciseDetails from "./pages/ExerciseDetails";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="exercise/:id" element={<ExerciseDetails />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
