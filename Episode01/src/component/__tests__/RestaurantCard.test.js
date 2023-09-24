

import {render} from "@testing-library/react"
import ResturentCard from "../ResturentCard"
import MOCK_DATA from "../mocks/resCardMock.json"




it("should render RestaurentCard component with props Data",()=>{
   
    render(<ResturentCard resData={MOCK_DATA}/>);
    

})