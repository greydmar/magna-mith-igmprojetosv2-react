import { CssBaseline, GlobalStyles } from "@mui/material";

import { useGlobalStyles } from "./hooks";
import { useRouter } from "@routes/useRouter";
import { ProviderTheme } from "@theme/providerTheme";
import { RouterProvider } from "react-router-dom";
import { IndiceProvider } from "@context";

export function App() {
  const { globalStyles } = useGlobalStyles();
  const { router } = useRouter();

  return (
    <>
      <CssBaseline />
      <GlobalStyles styles={globalStyles} />
      <ProviderTheme>
        <IndiceProvider>
          <RouterProvider router={router} />
        </IndiceProvider>
      </ProviderTheme>
    </>
  );
}
