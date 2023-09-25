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


it("Should Search Res List for Burger text input",async()=>{
  
   await act(async()=>render(
   <BrowserRouter>
   <Body/>
   </BrowserRouter>
   ));
   
   const cardsBeforeSearch=screen.getAllByTestId("resCard");

   expect(cardsBeforeSearch.length).ToBe(20);



    const searchBtn=screen.getByRole("button",{name:"Search"});
    const searchInput=screen.getByTestId("searchInput");
   fireEvent.change(searchInput,{target:{value:"burger"}});
  fireEvent.click(searchBtn);


// //Screen should load 4 cards
 const cardsAfterSearch=  screen.getAllByTestId("resCard");


    expect(cardsAfterSearch.length).toBe(4);

});