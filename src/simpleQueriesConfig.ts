import { SimpleQueriesConfig } from "simple-queries-react";


export const simpleQueriesConfig: SimpleQueriesConfig = {
  
  baseUrl: import.meta.env.VITE_URL_BASE,
  APIs: [
    {
      name: "JAVA",
      baseUrl: import.meta.env.VITE_JAVA,
      headers: {
        'Access-Control-Allow-Origin': "*",
        'Access-Control-Allow-Headers': "*"
      },
    },
    {
      name: "DOT_NET",
      baseUrl: import.meta.env.VITE_DOT_NET,
      headers: {
        'Access-Control-Allow-Origin': "*",
        'Access-Control-Allow-Headers': "*"
      },
    },

  ]
};
