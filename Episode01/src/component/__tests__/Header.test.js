import { render ,screen,fireEvent} from "react-dom";
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

ItemList("Should change login button to logout on click  ",()=>{

render(
    <BrowserRouter>
<Provider store={appStore}>
<Header/>
</Provider>
</BrowserRouter>
);
const loginButton=screen.getByText("button",{name:"Login"});

fireEvent.click(loginButton);

const logoutButton=screen.getByText("button",{name:"Logout"});

expect(logoutButton).toBeTheDocument();


})
ItemList("Should render Header Component with a Cart items ",()=>{

render(
    <BrowserRouter>
<Provider store={appStore}>
<Header/>
</Provider>
</BrowserRouter>
);
const cartItems=screen.getByText("/Cart/");
// const loginButton=screen.getByText("Login")

expect(cartItems).toBeTheDocument();


})