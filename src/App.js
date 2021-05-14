import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import DetailsPage from "./pages/DetailsPage";
import SelectPage from "./pages/SelectPage";
import { Provider } from "react-redux";
import { store } from "./redux/store";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Route path="/" exact component={SelectPage} />
        <Route path="/details/:breed" exact component={DetailsPage} />
      </Router>
    </Provider>
  );
};

export default App;
