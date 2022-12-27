import logo from "./logo.svg";
import "./App.css";
import { router } from "./routes/routes";
import { RouterProvider } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
      {/* <Toaster></Toaster> */}
    </div>
  );
}

export default App;
