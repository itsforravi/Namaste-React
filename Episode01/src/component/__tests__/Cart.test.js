import { fireEvent, render ,screen} from "@testing-library/react"
import { act } from "react-dom/test-utils";
import RestaurantMenu from "../RestaurantMenu";
import Header from "../Header";
import MOCK_DATA_NAME from "../../component/mocks/mockResMenu.json"
import { Provider } from "react-redux";
import appStore from "../../utilis/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"

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
</Provider>
</BrowserRouter>));

const accordionHeader=screen.getByText("Biryani(5)");
fireEvent.click(accordionHeader);
    
    expect(screen.getAllByAltTextId("foodItems").length).toBe(5);
const addBtn=screen.getALllByRole("button",{name:"add +"});
fireEvent.click(addBtn[0]);

 expect(screen.getByText("Cart - (1 items)")).toBeInTheDocument();

})