import { RouterProvider } from "react-router-dom";
import { router } from "./router/router";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { loadEntries } from "./slices/diarySlice";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const saved = localStorage.getItem("diary_entries");
    if (saved) {
      dispatch(loadEntries(JSON.parse(saved)));
    }
  }, [dispatch]);

  return <RouterProvider router={router} />;
};

export default App
