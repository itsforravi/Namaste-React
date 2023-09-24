import Body from "../Body"
import {render} from "@testing-library/react";
import MOCK_DATA from "../../component/mocks/mockResListData.json"
import { act } from "react-dom/test-utils";

globalThis.fetch=jest.fn(()=>{
    return Promise.resolve({
        json:()=>{
            return Promise.resolve(MOCK_DATA);
        }
    })
})


it("Should render the body with search",async()=>{
  
   await act(async()=>render(<Body/>));

});