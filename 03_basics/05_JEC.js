/**
 JAVASCRIPT EXECTION CONTEXT (JEC)
->Global Execution Context
->Function Execution Context
->Eval Execution Context (Mostly used in moongoose)

Code is mostly run in two phases->
1)Memory Creation Phase(MCP)
2)Execution Phase


//~~~~REFER CODE GIVEN BELOW~~~~

1. GLOBAL EXECUTION  -> This is first step of the code and it is allocated 'this'

2. MCP -> All variables are placed here like val1->undefined , val2->undefined
        addNum->defination of function , result1->undefined , result2->undefined

3. Execution Phase   ->    val1<-10 , val2<-5 , but as soon as 'result1' is called then is calls function definition addNum so here the game changes!!!

                           addNum-> this make differect excution thread + new variable environment for itself again as soon as this is called!


                           |-------->> Memory Phases(addNum)--> val1 -> undefined
                                                                val2 -> undefined
                                                                total -> undefined

                           |-------->> Execution Phase(addNum)--> val1 -> 10
                                                                  val2 -> 5
                                                                  total -> 15   ---> so this total is returned to GLOBAL EXECUTION CONTEXT 
                                                                  
               Now again for 'result2' same story is replayed as we did for 'result1'.
               
               
              ~~~Make sure as soon as that new execution context that was created in 'result1' and 'result2' it get deleted as soon as work is done!!~~~


 */       


let val1 = 10
let val2 = 5
function addNum(num1,num2){
    let total = num1 + num2
    return total
}
let result1 = addNum(val1,val2)
let result2 = addNum(10,2)
// console.log(result1);
// console.log(result2);


