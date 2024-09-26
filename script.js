function ClearDisplay(){
    document.getElementById("display").value='';
   
}
function AppendCharacter(char){
    document.getElementById("display").value +=char;
   
}
function Backspace(){
    let display=document.getElementById("display").value;
    document.getElementById("display").value= display.slice(0,-1);
   
}
function CalculateResult(){
    let display= document.getElementById("display").value
    
    try{
        document.getElementById("display").value = eval(display)
       
    }
    catch (e){
        document.getElementById("display").value = "Error";
    }
}












