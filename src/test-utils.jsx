//gives the render method provided by the testing library access to the store

import { render } from "@testing-library/react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import DetailsPage from "./pages/DetailsPage";
import SelectPage from "./pages/SelectPage";

const AllTheProviders = ({ children }) => {
  return (
    <Provider store={store}>
      <Router>
        {/* <Route path="/" exact component={SelectPage} /> */}
        <Route path="/details/:breed" exact component={DetailsPage} />
      </Router>
    </Provider>
  );
};

const customRender = (ui, options) =>
  render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from "@testing-library/react";

// override render method
export { customRender as render };
