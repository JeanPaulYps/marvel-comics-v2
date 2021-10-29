import { Provider } from "react-redux";
import { LastComics } from "./pages/LastComics";
import { store } from "./store";
import { HashRouter, Switch, Route } from "react-router-dom";
import { Layout } from "./components";



function App() {
  return (
    <Provider store={store}>
      <HashRouter basename="/">
        <Layout>

          <Switch>
            <Route exact path ="/" component={LastComics}/>
          </Switch>

        </Layout>
      </HashRouter>
    </Provider>
  );
}

export default App;
