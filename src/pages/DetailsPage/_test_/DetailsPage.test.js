import React from "react";
import DetailsPage from "../index";
import { unmountComponentAtNode } from "react-dom";
import { render } from "test-utils";
import { createMemoryHistory } from "history";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";

let container = null;

beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});
test("renders with a dog name", () => {
  // render components
  function renderWithRouterMatch(
    ui,
    {
      path = "/details/:breed",
      route = "/details/breedname",
      history = createMemoryHistory({ initialEntries: [route] }),
    } = {}
  ) {
    return {
      ...render(
        <Router history={history}>
          <Route path={path} component={ui} />
        </Router>
      ),
      container,
    };
  }

  const { getByText } = renderWithRouterMatch(DetailsPage, {
    path: "/details/:breed",
    route: "/details/breedname",
  });
  console.log("does this come tru here?");
  // make assertions
  expect(getByText("breedname")).toBeInTheDocument();
});
