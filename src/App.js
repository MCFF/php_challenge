import "./App.css";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import ContactList from "./Controller/ContactListController";
import ContactDetails from "./Controller/ContactDetailsController";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ContactList} />
        <Route exact path="/details/:id" component={ContactDetails} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
