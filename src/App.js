import { useState } from "react";
import Main from "./component-tree/Main";
import Profile from "./component-tree/Profile";
import Search from "./component-tree/Search";
import User from "./component-tree/User";
import "./App.css";

function App() {
  const [appName, setAppName] = useState("default");

  const onChange = (e) => {
    setAppName(e.target.value);
  };

  console.log("app rendered");

  return (
    <div className="App mt-5">
      <div className="d-flex justify-content-center align-items-center flex-column">
        <h2
          style={{
            textAlign: "center",
          }}
        >
          {appName}
        </h2>
        <input style={{
        maxWidth: "250px"
      }} className="form-control" type="text" onChange={onChange} />
      </div>

      <div
        className="container border p-4 shadow-sm"
        style={{ height: "80vh" }}
      >
        <div className="row">
          <div className="col">
            <Profile>
              <User />
            </Profile>
          </div>
          <div className="col">
            <Main />
          </div>
          <div
            className="col "
            style={{ overflowY: "scroll", maxHeight: "600px" }}
          >
            <Search />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
