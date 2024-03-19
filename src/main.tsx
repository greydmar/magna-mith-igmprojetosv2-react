import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import ReactDOM from "react-dom/client";
import { App } from "./App.tsx";
import { initSimpleQueries } from "simple-queries-react";
import { simpleQueriesConfig } from "./simpleQueriesConfig.ts";

initSimpleQueries(simpleQueriesConfig);

ReactDOM.createRoot(document.getElementById("root")!).render(<App />);
