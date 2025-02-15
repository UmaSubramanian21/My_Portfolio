var menu_icon = document.getElementById("menu_icon")
var menu_bar =  document.getElementById("menu_bar")
var menu_bar_close=document.getElementById("menu_bar_close")

menu_icon.addEventListener("click",function(){
    menu_bar.style.display="block"
})

menu_bar_close.addEventListener("click",function(){
    menu_bar.style.display="none"
})