import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./pages/App";
import Login from "./pages/login";
import Register from "./pages/register";
import RecipeDetails from "./components/RecipeDetails";
import "./styles.css";
import AddRecipePage from "./pages/AddRecipePage";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/recipe/:id" element={<RecipeDetails />} />
        <Route path="/add-recipe" element={<AddRecipePage />} />      
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
