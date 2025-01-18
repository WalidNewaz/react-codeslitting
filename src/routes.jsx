import { Suspense, lazy } from "react";

import Layout from "./Layout";
import NotFound from "./404";
import Loading from "./components/Loading";

/** Utils */
import { delayPromise } from "./utils";

/** Components */
import withOutlet from "./hocs/withOutlet";

/** Lazy components */
const Home = lazy(() => delayPromise(import("./pages/Home"), 2000));
const Electronics = lazy(() =>
  delayPromise(import("./pages/Electronics"), 2000)
);
const MobilePhones = lazy(() =>
  delayPromise(import("./pages/MobilePhones"), 2000)
);
const Product = lazy(() => delayPromise(import("./pages/Product"), 2000));

const HomePage = withOutlet(Home, "home");
const ElectronicsPage = withOutlet(Electronics, "electronics");
const MobilePhonesPage = withOutlet(MobilePhones, "mobile-phones");
const ProductPage = withOutlet(Product, "product");

const routes = [
  {
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        id: "home",
        path: "/",
        element: (
          <Suspense fallback={<Loading />}>
            <HomePage />
          </Suspense>
        ),
        handle: { breadcrumb: "Home" },
        children: [
          {
            id: "electronics",
            path: "electronics",
            element: (
              <Suspense fallback={<Loading />}>
                <ElectronicsPage />
              </Suspense>
            ),
            handle: { breadcrumb: "Electronics" },
            children: [
              {
                id: "mobile-phones",
                path: "mobile-phones",
                element: (
                  <Suspense fallback={<Loading />}>
                    <MobilePhonesPage />
                  </Suspense>
                ),
                handle: { breadcrumb: "Mobile Phones" },
                children: [
                  {
                    id: "product",
                    path: ":productId",
                    element: (
                      <Suspense fallback={<Loading />}>
                        <ProductPage />
                      </Suspense>
                    ),
                    handle: { breadcrumb: "Product Details" },
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];
export default routes;
