import { BrowserRouter } from "react-router-dom";

import { AuthRoutes } from "./auth.routes";
import { UserRoutes } from "./user.routes";
import { AdmRoutes } from "./admin.routes";

export function Routes() {
  return (
    <BrowserRouter>
      <AuthRoutes />
    </BrowserRouter>
  );
}
