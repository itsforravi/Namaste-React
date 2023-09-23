import {sum} from "../sum";


test("Sum function sholud calculate the sum of two function",()=>{

    const result=  sum(3,4);
    //Assertion
     expect (result).toBe(7)
});