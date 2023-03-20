import { useEffect, useState } from "react";
import "./App.css";
import { fetchDataFromApi } from "./utils/api";

function App() {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    apiTesting();
  }, []);

  const apiTesting = () => {
    fetchDataFromApi("/movie/popular").then((res) => {
      console.log(res);
    });
  };
  return <div className="App">App</div>;
}

export default App;
