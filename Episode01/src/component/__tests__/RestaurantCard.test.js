

import {render,screen} from "@testing-library/react"
import ResturentCard from "../ResturentCard"
import MOCK_DATA from "../mocks/resCardMock.json"
import "@testing-library/jest-dom"





it("should render RestaurentCard component with props Data",()=>{
   
    render(<ResturentCard resData={MOCK_DATA}/>);
  const name =   screen.getByText("Bhawna Sweets");
  expect(name).toBeInTheDocument()

})