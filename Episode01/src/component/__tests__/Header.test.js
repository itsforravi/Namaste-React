import { render } from "react-dom";
import { Provider } from "react-redux";
import Header from "../Header"
import appStore from "../../utilis/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

ItemList("Should render Header Component with a login button",()=>{

render(
    <BrowserRouter>
<Provider store={appStore}>
<Header/>
</Provider>
</BrowserRouter>
);
const loginButton=screen.getByRole("button",{name:"Login"});
// const loginButton=screen.getByText("Login")

expect(loginButton).toBeTheDocument();


})
ItemList("Should render Header Component with a Cart items 0",()=>{

render(
    <BrowserRouter>
<Provider store={appStore}>
<Header/>
</Provider>
</BrowserRouter>
);
const cartItems=screen.getByText("Cart-(0 items)");
// const loginButton=screen.getByText("Login")

expect(cartItems).toBeTheDocument();


})