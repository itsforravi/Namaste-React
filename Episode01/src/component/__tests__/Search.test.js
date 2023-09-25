import Body from "../Body"
import {fireEvent, render} from "@testing-library/react";
import MOCK_DATA from "../../component/mocks/mockResListData.json"
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import  "@testing-library/jest-dom";


globalThis.fetch=jest.fn(()=>{
    return Promise.resolve({
        json:()=>{
            return Promise.resolve(MOCK_DATA);
        }
    })
})


it("Should render the body with search",async()=>{
  
   await act(async()=>render(
   <BrowserRouter>
   <Body/>
   </BrowserRouter>
   ));

   const searchBtn=screen.getByRole("button",{name:"Search"});
    const searchInput=screen.getByTestId("searchInput");
   fireEvent.change(searchInput,{target:{value:"burger"}});
   fireEvent.click(searchBtn);


//Screen should load 4 cards

 const cards=  screen.getAllByTestId("resCard");


   expect(cards.length).toBe(4);

});