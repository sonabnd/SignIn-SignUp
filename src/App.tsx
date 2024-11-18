import "./App.scss";
import { QueryClient, QueryClientProvider } from "react-query";
import { ConfigProvider } from "antd";
import { themeConfig } from "./core/configs/theme.config";
import { ReactQueryDevtools } from "react-query/devtools";
import router from "./router/router.tsx";
import { RouterProvider } from "react-router-dom";
import useGlobalStyles from "./assets/styles/style.ts";

const queryClient = new QueryClient();

function App() {
  useGlobalStyles();
  useGlobalStyles();
  return (
    <QueryClientProvider client={queryClient}>
      <ConfigProvider theme={themeConfig}>
        <div>
          <RouterProvider router={router} />
        </div>
      </ConfigProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
