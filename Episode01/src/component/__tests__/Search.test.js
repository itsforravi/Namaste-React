import Body from "../Body"
import {render} from "@testing-library/react";
import MOCK_DATA from "../../component/mocks/mockResListData.json"

globalThis.fetch=jest.fn(()=>{
    return Promise.resolve({
        json:()=>{
            return Promise.resolve(MOCK_DATA);
        }
    })
})


it("Should render the body component with search button",()=>{
  
    render(<Body/>);

});