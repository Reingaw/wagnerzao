import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { CombinedProviders } from "./utils/CombinedProviders.tsx";
import { App } from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CombinedProviders>
      <App />
    </CombinedProviders>
  </StrictMode>,
);
