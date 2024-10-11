import { Suspense } from "react";
import { AppRoutes } from "./routes/AppRoutes";
import { Spin } from "antd";
import "antd/dist/antd.css";

function App() {
  return (
    <Suspense fallback={<Spin size="large" />}>
      <AppRoutes />
    </Suspense>
  );
}

export default App;
