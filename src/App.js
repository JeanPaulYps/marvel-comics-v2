import { Provider } from "react-redux";
import { LastComics } from "./pages/LastComics";
import { store } from "./store";
import { HashRouter, Switch, Route } from "react-router-dom";
import { Layout } from "./components";
import { Checkout } from "./pages/Checkout";
import { Payment } from "./pages/Payment";
import { Summary } from "./pages/Summary"



function App() {
  return (
    <Provider store={store}>
      <HashRouter basename="/">
        <Layout>
          <Switch>
            <Route exact path="/" component={LastComics}/>
            <Route exact path="/checkout" component={Checkout}/>
            <Route exact path="/payment" component={Payment}/>
            <Route exact path="/summary" component={Summary}/>
          </Switch>
        </Layout>
      </HashRouter>
    </Provider>
  );
}

export default App;
