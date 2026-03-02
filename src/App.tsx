import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouteObject } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import Index from "./pages/Index";
import Privacy from "./pages/Privacy";
import Support from "./pages/Support";
import NotFound from "./pages/NotFound";
import AlternativeTemplate from "./pages/Alternative";
import UseCaseTemplate from "./pages/UseCase";
import { alternativesData, CompetitorData } from "./data/alternatives";
import { useCasesData, UseCaseData } from "./data/use-cases";
import React from "react";

const queryClient = new QueryClient();

const Providers = ({ children }: { children: React.ReactNode }) => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      {children}
      <Analytics />
    </TooltipProvider>
  </QueryClientProvider>
);

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <Providers><Index /></Providers>,
  },
  {
    path: "/privacy",
    element: <Providers><Privacy /></Providers>,
  },
  {
    path: "/support",
    element: <Providers><Support /></Providers>,
  },
  {
    path: "/alternatives/:slug",
    element: <Providers><AlternativeTemplate /></Providers>,
  },
  {
    path: "/for/:slug",
    element: <Providers><UseCaseTemplate /></Providers>,
  },
  {
    path: "*",
    element: <Providers><NotFound /></Providers>,
  },
];

// Provide vite-react-ssg with the full list of routes to pre-render
export const includedRoutes = [
  "/",
  "/privacy",
  "/support",
  ...alternativesData.map((c: CompetitorData) => `/alternatives/${c.slug}-alternative`),
  ...useCasesData.map((u: UseCaseData) => `/for/${u.slug}`),
];
