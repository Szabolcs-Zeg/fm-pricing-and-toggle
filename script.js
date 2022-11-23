document.getElementById("toggle").addEventListener("click", writeprice);

function writeprice() {
    var tg = document.getElementById("toggle")
    if (tg.checked) {
       document.getElementById("basic_price").innerHTML="&dollar;19.99"; 
       document.getElementById("prof_price").innerHTML="&dollar;24.99"; 
       document.getElementById("master_price").innerHTML="&dollar;39.99"; 
    }
    else {
        document.getElementById("basic_price").innerHTML="&dollar;199.99";
        document.getElementById("prof_price").innerHTML="&dollar;249.99"; 
       document.getElementById("master_price").innerHTML="&dollar;399.99";  
    }
}