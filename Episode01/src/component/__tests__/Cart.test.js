import { fireEvent, render ,screen} from "@testing-library/react";
import { act } from "react-dom/test-utils";
import RestaurantMenu from "../RestaurantMenu";
import Header from "../Header";
import MOCK_DATA_NAME from "../../component/mocks/mockResMenu.json";
import { Provider } from "react-redux";
import appStore from "../../utilis/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import Cart from "../Cart";

global.fetch=jest.fn(()=>
 Promise.resolve({
        json:()=> Promise.resolve(MOCK_DATA_NAME)
        })
)

it("should load Restaurant Menu Component ",async()=>{

await act (async()=>render(
    <BrowserRouter>
<Provider store={appStore} >
    <Header/>
<RestaurantMenu/>
<Cart/>
</Provider>
</BrowserRouter>));

const accordionHeader=screen.getByText("Biryani(5)");
fireEvent.click(accordionHeader);
    
    expect(screen.getAllByAltTextId("foodItems").length).toBe(5);
const addBtn=screen.getALllByRole("button",{name:"add +"});
fireEvent.click(addBtn[0]);

 expect(screen.getByText("Cart - (1 items)")).toBeInTheDocument();
fireEvent.click(addBtn[1]);

 expect(screen.getByText("Cart - (2 items)")).toBeInTheDocument();

expect (screen.getAllByTestId("foodItems").length).toBe(7);
fireEvent.click(screen.getByRole("button",{name:"Clear cart"}));


expect (screen.getAllByTestId("foodItems").length).toBe(5);
expect(screen.getByText("Cart is empty ,Add Items to the cart")).toBeInTheDocument();

});