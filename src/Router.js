import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/GIK-client" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}
