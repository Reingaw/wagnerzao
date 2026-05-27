import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { JsonFormatter } from "./pages/JsonFormatter";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { FlashcardCreator } from "./pages/FlashcardCreator";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/json-formatter" element={<JsonFormatter />} />
        <Route path="/flashcard-creator" element={<FlashcardCreator />} />
      </Route>
    </Routes>
  );
};
