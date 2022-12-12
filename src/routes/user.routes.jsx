import { Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home";
import { ViewMeal } from "../pages/ViewMeal";
import { ViewOrder } from "../pages/ViewOrder";
import { UserOrders } from "../pages/UserOrders";
import { Favorites } from "../pages/Favorites";
import { NotFound } from "../pages/NotFound";


export function UserRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/orders/:id" element={<ViewOrder />} />
      <Route path="/meals/favorites" element={<Favorites />} />
      <Route path="/meals/:id" element={<ViewMeal />} />
      <Route path="/orders" element={<UserOrders />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
