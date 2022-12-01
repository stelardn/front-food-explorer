import { BrowserRouter } from "react-router-dom";

import { AuthRoutes } from "./auth.routes";
import { UserRoutes } from "./user.routes";
import { AdmRoutes } from "./admin.routes";

import { useAuth } from "../hooks/auth";

export function Routes() {
  const { user } = useAuth();
  return (
    <BrowserRouter>
      {(() => {
        if (user) {
          if (user.isAdmin === true) {
            return <AdmRoutes />;
          } else {
            return <UserRoutes />;
          }
        } else {
          return <AuthRoutes />;
        }
      })()}
    </BrowserRouter>
  );
}
