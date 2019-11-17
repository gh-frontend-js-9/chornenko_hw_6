function plus() {
    let num1, num2;
    num1=document.getElementById('n1').value;
    num2=document.getElementById('n2').value;

    num1=parseFloat(num1);
    num2=parseFloat(num2);
    
    let result=num1+num2;
    document.getElementById('out').innerHTML=result;

}
function minus() {
    let num1, num2;
    num1=document.getElementById('n1').value;
    num2=document.getElementById('n2').value;
    num1=parseFloat(num1);
    num2=parseFloat(num2);

    let result=num1-num2;
    document.getElementById('out').innerHTML=result;


}
function devider() {
    let num1, num2;
    num1=document.getElementById('n1').value;
    num2=document.getElementById('n2').value;
    num1=parseFloat(num1);
    num2=parseFloat(num2);

    let result=num1/num2;
    document.getElementById('out').innerHTML=result;


}
function multiplication() {
    let num1, num2;
    num1=document.getElementById('n1').value;
    num2=document.getElementById('n2').value;
    num1=parseFloat(num1);
    num2=parseFloat(num2);

    let result=num1*num2;
    document.getElementById('out').innerHTML=result;


}