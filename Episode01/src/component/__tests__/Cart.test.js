import { fireEvent, render ,screen} from "@testing-library/react"
import { act } from "react-dom/test-utils";
import RestaurantMenu from "../RestaurantMenu";
import MOCK_DATA_NAME from "../../component/mocks/mockResMenu.json"
import { Provider } from "react-redux";
import appStore from "../../utilis/appStore";

global.fetch=jest.fn(()=>
 Promise.resolve({
        json:()=> Promise.resolve(MOCK_DATA_NAME)
        })
)

it("should load Restaurant Menu Component ",async()=>{

await act (async()=>render(
<Provider store={appStore} >
<RestaurantMenu/>
</Provider>));

const accordionHeader=screen.getByText("Biryani(5)");
fireEvent.click(accordionHeader);
    
    expect(screen.getAllByAltTextId("foodItems").length).toBe(5);

})