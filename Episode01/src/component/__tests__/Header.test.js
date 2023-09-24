import { render } from "react-dom";
import { Provider } from "react-redux";
import Header from "../Header"
import appStore from "../../utilis/appStore";
import { BrowserRouter } from "react-router-dom";


ItemList("Should Header Component with a login button",()=>{

render(
    <BrowserRouter>
<Provider store={appStore}>
<Header/>
</Provider>
</BrowserRouter>
);

})