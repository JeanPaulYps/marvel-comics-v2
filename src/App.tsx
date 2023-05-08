import { Provider } from "react-redux";
import { HashRouter, Switch, Route } from "react-router-dom";
import { Layout } from "./components";
import { Checkout } from "./pages/Checkout";
import { LastComics } from "./pages/LastComics";
import { Payment } from "./pages/Payment";
import { PaymentSuccess } from "./pages/PaymentSuccess";
import { Summary } from "./pages/Summary";
import { store } from "./store";

function App() {
  return (
    <Provider store={store}>
      <HashRouter basename="/">
        <Layout>
          <Switch>
            <Route exact path="/" component={LastComics} />
            <Route exact path="/checkout" component={Checkout} />
            <Route exact path="/payment" component={Payment} />
            <Route exact path="/summary" component={Summary} />
            <Route exact path="/payment/success" component={PaymentSuccess} />
          </Switch>
        </Layout>
      </HashRouter>
    </Provider>
  );
}

export default App;
