import React, { Fragment, lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import {
  // AuthGuard,
  // GuestGuard,
  LoadingScreen,
} from "./components/RolesGuard/index";
import { ROUTES } from "./constants/routes";
import VerticalLayout from "./pages/Layouts/Vertical";

export const renderRoutes = (routes) => {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Switch>
        {routes.map((route, i) => {
          console.log(route.guard, route.title);
          const Guard = route.guard || Fragment;
          const Layout = route.layout || Fragment;
          const Component = route.component;
          return (
            <Route
              key={i.toString()}
              path={route.path}
              exact={route.exact}
              render={(props) => (
                // <Guard>
                <Layout>
                  {route.routes ? (
                    renderRoutes(route.routes)
                  ) : (
                    <Component {...props} />
                  )}
                </Layout>
                // </Guard>
              )}
            />
          );
        })}
      </Switch>
    </Suspense>
  );
};

const routes = [
  {
    title: "Login",
    exact: false,
    path: ROUTES.LOGIN,
    component: lazy(() => import("../src/components/Auth/Login")),
  },
  {
    title: "Forgot",
    exact: true,
    path: ROUTES.FORGOT,
    component: lazy(() =>
      import("./components/Auth/ForgotPassword/ForgotPassword")
    ),
  },
  {
    title: "Register",
    exact: true,
    path: ROUTES.REGISTER,
    component: lazy(() => import("./pages/SignUp/SignUp")),
  },
  {
    title: "Home",
    exact: true,
    path: ROUTES.HOME,
    layout: VerticalLayout,
    component: lazy(() => import("./pages/Home/Home")),
  },
  {
    title: "Search",
    exact: true,
    path: ROUTES.SEARCH,
    layout: VerticalLayout,
    component: lazy(() => import("./pages/Search/index")),
  },
  {
    title: "detail",
    exact: true,
    path: ROUTES.DETAIL,
    layout: VerticalLayout,
    component: lazy(() => import("../src/pages/Details/Details")),
  },
  {
    title: "Cart",
    exact: true,
    path: ROUTES.CART,
    layout: VerticalLayout,
    component: lazy(() => import("../src/pages/Cart/Cart")),
  },
  {
    title: "Checkout",
    path: ROUTES.CHECKOUT,
    // guard: AuthGuard,
    layout: VerticalLayout,
    component: lazy(() => import("./pages/CheckOut/CheckOut")),
  },
  {
    title: "Contact",
    path: ROUTES.CONTACT,
    // guard: AuthGuard,
    layout: VerticalLayout,
    component: lazy(() => import("./pages/Contact/Contact")),
  },
  {
    path: "*",
    component: lazy(() => import("./pages/Notfound/Notfound")),
  },
];

export default routes;
