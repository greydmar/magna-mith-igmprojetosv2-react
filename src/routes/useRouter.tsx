import { useMediaQuery } from "@mui/material";
import { Error404 } from "@pages/error404";
import { LayoutMain, LayoutMobile } from "@theme";
import { RouteObject, createBrowserRouter } from "react-router-dom";
import { Routes } from "src/types/types";

const ROUTES: Record<string, { routes: Function }> = import.meta.glob(
  "/src/pages/**/routes.tsx",
  {
    eager: true,
  }
);

export const useRouter = () => {
  const isSmallScreen = useMediaQuery("(max-width:800px)");

  const LayoutElement = isSmallScreen ? LayoutMobile : LayoutMain;

  const pageRoutes: RouteObject[] = [];
  const loadRoutes = async () => {
    for (const path in ROUTES) {
      const routes = ROUTES[path].routes();
      pageRoutes.push(
        ...routes.map((item: Routes) => {
          const Element = item?.element;
          return {
            path: item?.path,
            element: (
              <LayoutElement>
                <Element />
              </LayoutElement>
            ),
          };
        })
      );
    }
  };

  loadRoutes();

  const router = createBrowserRouter([
    ...pageRoutes,
    {
      path: "*",
      element: (
        <LayoutElement>
          <Error404 />
        </LayoutElement>
      ),
    },
  ]);

  return { router };
};
