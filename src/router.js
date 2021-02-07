import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import Home from "./pages/Home";
import DetailedUser from "./pages/DetailedUser";
import Episode from "./pages/Episode";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/episode/:id">
          <Episode />
        </Route>
        <Route exact path="/character/:id">
          <DetailedUser />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
