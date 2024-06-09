import React from "react";
import ReactDOM from "react-dom/client"; 
import App from "./App";
import "./index.css";
import AppContextProvider from "./context/AppContext";
import {ThemeProvider} from "./context/ThemeContext";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(

<BrowserRouter>

<ThemeProvider>

<AppContextProvider>
       <App />
</AppContextProvider>

    </ThemeProvider>


</BrowserRouter>
    


    

  
);
