import { Route, Switch, Redirect } from "react-router-dom";
import AllQuotes from "./pages/AllQuotes";
import QuoteDetail from "./pages/QuoteDetail";
import NewQuote from "./pages/NewQuote";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Layout>
      <h1>App</h1>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/quotes" exact />
        </Route>
        <Route path="/quotes" exact>
          <AllQuotes>All Quotes</AllQuotes>
        </Route>
        <Route path="/quotes/:quoteId">
          <QuoteDetail></QuoteDetail>
        </Route>
        <Route path="/new-quote">
          <NewQuote></NewQuote>
        </Route>
        <Route path="*"></Route>
      </Switch>
    </Layout>
  );
}

export default App;
