import { StrictMode } from "react";

import { ChakraProvider } from "@chakra-ui/react";
import ReactDOM from "react-dom/client";

import { ErrorBoundary } from "@/errors";
import { AppRoutes } from "@/scene/AppRoutes";
import { systemTheme } from "./theme/theme";

// Render the app
const rootElement = document.getElementById("root") as HTMLElement;
if (rootElement && !rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
      <ChakraProvider value={systemTheme}>
        <ErrorBoundary>
          <AppRoutes />
        </ErrorBoundary>
      </ChakraProvider>
    </StrictMode>
  );
}
