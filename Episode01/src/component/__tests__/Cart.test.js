import { render } from "@testing-library/react"
import { act } from "react-dom/test-utils";
import RestaurantMenu from "../RestaurantMenu";


global.fetch=jest.fn(()=>
 Promise.resolve({
        json:()=> Promise.resolve(MOCK_DATA)
        })
)

it("should load Restaurant Menu Component ",async()=>{

await act (async()=>render(<RestaurantMenu/>

    ));

})