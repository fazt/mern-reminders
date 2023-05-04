import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import TaskFormPage from "./pages/TaskFormPage";

function App() {
  return (
    <BrowserRouter>
      <div className="bg-neutral-950 h-screen">
        <div className="container mx-auto">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/create" element={<TaskFormPage />} />
            <Route path="/edit/:id" element={<TaskFormPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
