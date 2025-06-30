import logo from "./logo.svg";
import "./App.css";
import MainHeader from "./layouts/MainHeader";
import { RouterProvider } from "react-router-dom";
import { myRouter } from "./router/router";
import { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import ScrollToTopButton from "./components/small-components/ScrollToTop";


function App() {

  useEffect(()=>{
    document.title="Math Monkey"
  }
    ,[]
  )

  return (
    <div className="App">
      <RouterProvider router={myRouter}/>
      <ScrollToTopButton />
    </div>
  );
}

export default App;
