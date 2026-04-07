import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { JsonFormatter } from "./pages/JsonFormatter";
import { DefaultLayout } from "./layouts/DefaultLayout";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/json-formatter" element={<JsonFormatter />} />
      </Route>
    </Routes>
  );
};
