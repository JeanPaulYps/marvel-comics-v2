import { Provider } from "react-redux";
import { Header } from "./containers/Header";
import { LastComics } from "./pages/LastComics";
import { store } from "./store";



function App() {
  return (
    <Provider store={store}>
      <Header/>
      <LastComics/>
    </Provider>
  );
}

export default App;
