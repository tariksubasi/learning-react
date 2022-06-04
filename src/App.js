import "./App.css";
import Main from "./component-tree/Main";
import Profile from "./component-tree/Profile";
import Search from "./component-tree/Search";
import User from "./component-tree/User";

function App() {
  return (
    <div className="App">
      <Profile>
        <User />
      </Profile>
      <Main />
      <Search />
    </div>
  );
}

export default App;
