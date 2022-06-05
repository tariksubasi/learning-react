import { createContext, useState } from "react";
import Main from "./component-tree/Main";
import Profile from "./component-tree/Profile";
import Search from "./component-tree/Search";
import Controller from "./components/Controller";
import "./App.css";

export const AppStateContext = createContext();

function App() {
  const [appName, setAppName] = useState("default");
  const [background, setBackground] = useState("#ffffff");

  const onChange = (e) => {
    setAppName(e.target.value);
  };

  console.log("app rendered");

  return (
    <div className="App mt-5">
      <AppStateContext.Provider
        value={{
          setBackground,
        }}
      >
        <Controller
          background={background}
          appName={appName}
          onChange={onChange}
        />

        <div
          className="container mt-2 border p-4 shadow-sm"
          style={{ height: "70vh" }}
        >
          <div className="row">
            <div className="col">
              <Profile />
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
      </AppStateContext.Provider>
    </div>
  );
}

export default App;
