import {render,screen} from "@testing-library/react";
import Contact from "../Contact";
import "@teating-library/jest-dom";


describe("Contact Us Page Test Case" ,()=>{

    beforeAll(()=>{
        console.log("Before All")
    });
    
    beforeEach(()=>{
        console.log("Before Each")
    });
    afterAll(()=>{
        console.log("After All")
    });
    
    afterEach(()=>{
        console.log("After Each")
    });
    

    it("Should load contact us component ",()=>{
        render(<Contact/>);
        const heading=screen.getByRole("heading");
    
        expect(heading).toBeInTheDocument();
    });
    it("Should load button inside Contact component ",()=>{
        render(<Contact/>);
        const button=screen.getByText("Submit");
    
        expect(button).toBeInTheDocument();
    });

})

