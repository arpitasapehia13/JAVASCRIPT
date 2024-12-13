//IMMEDIATELY INVOKED FUNCTION EXPRESSION (IIFE)  -->> Sometimes global scope causes pollution so to avoid this pollution we have to use IIFE

(function code(){
    //NAMED IIFE
    console.log(`DB CONNECTED`);
})();

// (DEFINITION OF FUNCTION) (EXECUTION CALL)
// ALWAYS ADD SEMICOLON TO END FIRST CODE AND RUN SECOND ONE!!

( (name) => {
    console.log(`DB CONNECTED 1 ${name}`);
} )("Arpita");