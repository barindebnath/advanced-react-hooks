import { Routes as BrowserRoutes, Route } from "react-router-dom";
import Home from "../pages/Home";
import hooks from "./hooks";

const Routes = () => (
  <BrowserRoutes>
    <Route path="/" element={<Home />} />
    {hooks.map((hook) => (
      <Route key={hook.path} path={hook.path} element={hook.component} />
    ))}
  </BrowserRoutes>
);

export default Routes;
