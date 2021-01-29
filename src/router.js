import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import Home from "./pages/Home";
import DetailedUser from "./pages/DetailedUser";

import characters from "./assets/json/stubCharacters.json";

const Router = () => {
  const characterList = characters.results;

  const getCharacterById = (id) => characterList.find((character) => character.id === id);

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/character/:id">
          <DetailedUser selectCharacter={getCharacterById} />
        </Route>
        <Route exact path="/">
          <Home characters={characterList} />
        </Route>
        <Route exact path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
