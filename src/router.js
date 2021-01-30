import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import Home from "./pages/Home";
import DetailedUser from "./pages/DetailedUser";


const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
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
