import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import router from "./routes/router";
import { UserProvider } from "./context/UserContext";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
      staleTime: 5 * 60 * 1000,
    },
  },
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <QueryClientProvider client={queryClient}> */}
    <UserProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </UserProvider>
    {/* </QueryClientProvider> */}
  </StrictMode>
);
