import "./App.css";
import Main from "./component-tree/Main";
import Profile from "./component-tree/Profile";
import Search from "./component-tree/Search";
import User from "./component-tree/User";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col">
            <Profile>
              <User />
            </Profile>
          </div>
          <div className="col">
            <Main />
          </div>
          <div className="col">
            <Search />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
