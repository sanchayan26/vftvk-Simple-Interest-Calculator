function compute()
{
    p = document.getElementById("principal").value;
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = parseInt(document.getElementById("years").value);
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);
    if(principal <=0){
        alert(" enter positive number");
        document.getElementById("principal").focus();

    }else{

        document.getElementById("result").innerHTML="If you deposit <mark>"+principal+"</mark>,\<br\>at an interest rate of <mark> "+rate+" </mark>%\<br\>You will receive an amount of <mark>"+ interest+"</mark>,\<br\>in the year mark><mark "+year+"</mark>\<br\>"

    }

    

    
}
        
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
  

}

