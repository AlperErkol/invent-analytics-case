import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/error-page";
import HomePage from "./pages/home-page";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Layout from "./layout";
import ContentPage from "./pages/content-page";
import ContentDetailPage from "./pages/content-detail-page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "content",
    element: <ContentPage />,
  },
  {
    path: "content/:imdbID",
    element: <ContentDetailPage />,
  },
]);

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Layout>
        <RouterProvider router={router} />
      </Layout>
    </QueryClientProvider>
  </React.StrictMode>
);
