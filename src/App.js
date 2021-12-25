import React, { useEffect, useState } from "react";

import "./App.css";
import Loading from "./sections/Loading";
import Page from "./Page";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 2800);
  }, []);

  return <div className="App">{!loading ? <Loading /> : <Page />}</div>;
}

export default App;
