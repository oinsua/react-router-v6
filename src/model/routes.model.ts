import { ActionFunction, LazyRouteFunction, LoaderFunction, ShouldRevalidateFunction } from "react-router-dom";

export interface RouteObject {
    path?: string;
    index?: boolean;
    children?: React.ReactNode;
    caseSensitive?: boolean;
    id?: string;
    loader?: LoaderFunction;
    action?: ActionFunction;
    element?: React.ReactNode | null;
    Component?: React.ComponentType | null;
    errorElement?: React.ReactNode | null;
    ErrorBoundary?: React.ComponentType | null;
    shouldRevalidate?: ShouldRevalidateFunction;
  }