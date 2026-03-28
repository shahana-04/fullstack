import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import CreateExpense from "./pages/CreateExpense";
import MyExpenses from "./pages/MyExpenses";
import AdminPanel from "./pages/AdminPanel";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/create" element={<CreateExpense />} />
        <Route path="/my" element={<MyExpenses />} />
        <Route path="/admin" element={<AdminPanel />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;