import { BrowserRouter, Switch, Route } from "react-router-dom";
import Logo from "./components/Logo";
import Home from "./pages/Home";
import Add from "./pages/Add";
import Edit from "./pages/Edit";

const Router = () => {
  return (
    <BrowserRouter>
      <Logo />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/add" component={Add} />
        <Route exact path="/edit/:id" component={Edit} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
