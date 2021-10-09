import { Provider } from "react-redux";
import { Header } from "./containers/Header";
import { LastComics } from "./containers/LastComics";
import { store } from "./redux";



function App() {
  return (
    <Provider store={store}>
      <Header/>
      <LastComics/>
    </Provider>
  );
}

export default App;
