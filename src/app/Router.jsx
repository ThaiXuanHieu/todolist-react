import { Route, Switch } from "react-router-dom";
import RegisterForm from "./components/Auth/RegisterForm";
import LoginForm from "./components/Auth/LoginForm";
import TaskPage from "./components/Task/TaskPage";
const Router = () => {
  return (
    <Switch>
      <Route path="/" exact={true} component={LoginForm} />
      <Route path="/register" component={RegisterForm} />
      <Route path="/task" component={TaskPage} />
    </Switch>
  );
};

export default Router;
