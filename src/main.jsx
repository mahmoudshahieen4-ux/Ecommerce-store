import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";

// Default to root path on Vercel and other static hosts.
// Use VITE_BASENAME in Vite env when deploying to a subpath like GitHub Pages.
const basename = import.meta.env.VITE_BASENAME || "/";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter basename={basename}>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
