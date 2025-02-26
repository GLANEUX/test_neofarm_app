import { createBrowserHistory } from "history";
import {
  unstable_HistoryRouter as HistoryRouter,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

import { Error404 } from "@/errors";
import { HomePage } from "@/scene/home/HomePage";

export const AppRoutes = () => {
  return (
    <HistoryRouter
      // @ts-expect-error
      history={createBrowserHistory({ window })}
      basename="/test"
    >
      <Routes>
        <Route path="/" element={<Navigate to="home" replace />} />
        <Route path="home/*" element={<HomePage />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </HistoryRouter>
  );
};
