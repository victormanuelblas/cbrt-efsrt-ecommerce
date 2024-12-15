// cambio de color del titulo   // rgb (x,y,z

setInterval(color,1500);

function color()
{
    let x = Math.floor(Math.random()*200); opciones
    let y = Math.floor(Math.random()*200);
    let z = Math.floor(Math.random()*200);

    document.getElementById("titulo").style.color="rgb("+x+","+y+","+z+")";
    document.getElementById("titulo1").style.color="rgb("+x+","+y+","+z+")";
    document.getElementById("titulo2").style.color="rgb("+x+","+y+","+z+")";
}
setInterval(enlasColor,1500);
function enlasColor()
{
    document.getElementById("camColor").style.color="blue";
    document.getElementById("camColor").style.padding="20px";
    document.getElementById("camColor").style.margin="20px";
}

setInterval(colorOscuro,1500)
function colorOscuro()
{
    let x = Math.floor(Math.random()*150); opciones
    let y = Math.floor(Math.random()*150);
    let z = Math.floor(Math.random()*150);

    document.getElementById("oscuro").style.color="rgb("+x+","+y+","+z+")";
    document.getElementById("oscuro1").style.color="rgb("+x+","+y+","+z+")";
    document.getElementById("oscuro2").style.color="rgb("+x+","+y+","+z+")";
}

function rotacion (r)
{
    r.style.opacity="0.5"
   r.style.transform="scale(50%)" 
    r.style.transition="all 3.5s";
}
function normal(r){
    r.style.opacity="1"
  r.style.transform="scale(100%)" 
    r.style.transition="all 3.5s";  
}
function logo(l)
{
    l.style.transform="rotateY(250deg)";
    l.style.transition="all 3.5s";  
}
function logos(l)
{
    l.style.transform="rotateY(0deg)";
    l.style.transition="all 3.5s";  
}
function compras(c)
{
    c.style.transform="rotateX(250deg)";
    c.style.transition="all 3.5s";  
}
function compra(c)
{
    c.style.transform="rotateX(0deg)";
    c.style.transition="all 3s";  
}
function desRot (k)
{
    k.style.opacity="0.3"
    k.style.transform="scale(10%)" 
    k.style.transition="all 3s";
    k.style.transform="rotateY(250deg)";
    k.style.transition="all 3.5s";  
}
function norRot(k){
    k.style.opacity="1"
    k.style.transform="scale(100%)" 
    k.style.transition="all 3s"; 
    k.style.transform="rotateY(0deg)";
    k.style.transition="all 3s";   
}
window.onload = function ()
{
for(var i=0; i<document.getElementsByClassName("banner").length;i++)
    {
       document.getElementsByClassName("banner")[i].setAttribute("onmouseover","rotacion(this)");
       document.getElementsByClassName("banner")[i].setAttribute("onmouseout","normal(this)");
    }

 for(var i=0; i<document.getElementsByClassName("logas").length;i++)
        {
           document.getElementsByClassName("logas")[i].setAttribute("onmouseover","logo(this)");
           document.getElementsByClassName("logas")[i].setAttribute("onmouseout","logos(this)");
        }
  for(var i=0; i<document.getElementsByClassName("shopp").length;i++)
       {
        document.getElementsByClassName("shopp")[i].setAttribute("onmouseover","compras(this)");
        document.getElementsByClassName("shopp")[i].setAttribute("onmouseout","compra(this)");
       }
       for(var i=0; i<document.getElementsByClassName("logosvent").length;i++)
        {
         document.getElementsByClassName("logosvent")[i].setAttribute("onmouseover","desRot(this)");
         document.getElementsByClassName("logosvent")[i].setAttribute("onmouseout","norRot(this)");
        }       
}
