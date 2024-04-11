import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";

export const Root = () => {

    return (
        <div className="App">
          <Header />
          <div id="detail">
            <Outlet />
          </div>
        </div>
    ); 

}