let ele1 = document.getElementById("ele1");
let ele2 = document.getElementById("ele2");
let refrescar = document.getElementById("refrescar");

//3.1
function pintar (ele1){
    ele1.style.backgroundColor = "yellow";
    }
    
    ele1.addEventListener('click',()=>{
        pintar(ele1);
})

//3.2

ele2.style.backgroundColor= "green"

function pintar2(ele2){
    ele2.style.backgroundColor = "yellow";
}
ele2.addEventListener('click',()=>{
    pintar2(ele2);
})

refrescar.addEventListener('click',() =>{
    location.reload()
})

