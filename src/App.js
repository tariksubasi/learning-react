import Main from "./component-tree/Main";
import Profile from "./component-tree/Profile";
import Search from "./component-tree/Search";
import User from "./component-tree/User";
import "./App.css";

function App() {
  return (
    <div className="App mt-5">
      <h2
        style={{
          textAlign: "center",
        }}
      >
        App
      </h2>
      <div className="container border p-4 shadow-sm"
      style={{ height : "80vh"}}>
        <div className="row">
          <div className="col">
            <Profile>
              <User />
            </Profile>
          </div>
          <div className="col">
            <Main />
          </div>
          <div className="col "   style={{ overflowY: "scroll",maxHeight: "600px"}}>
            <Search />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
