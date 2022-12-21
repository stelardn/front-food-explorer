import { Routes, Route } from "react-router-dom";

import { AdmOrders } from "../pages/AdmOrders";
import { Home } from "../pages/Home";
import { NewMeal } from "../pages/NewMeal";
import { UpdateMeal } from "../pages/UpdateMeal";
import { ViewOrder } from "../pages/ViewOrder";
import { NotFound } from "../pages/NotFound";

export function AdmRoutes() {
  return (
    <Routes>
      <Route path="/orders" element={<AdmOrders />} />
      <Route path="/" element={<Home />} />
      <Route path="/meals/new" element={<NewMeal />} />
      <Route path="/meals/:id" element={<UpdateMeal />} />
      <Route path="/orders/:id" element={<ViewOrder />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
