// selecting popup box, popup-overlay button

var popupoverlay=document.querySelector('.popup-overlay');
var popupbox=document.querySelector('.popup-box');
var addpopupbutton=document.getElementById('add-popup-button');

addpopupbutton.addEventListener('click', function() {
    popupoverlay.style.display = 'block';
    popupbox.style.display = 'block';
});
var cancelbutton=document.getElementById("cancel-popup")
cancelbutton.addEventListener("click",function(event){
    event.preventDefault()
    popupoverlay.style.display = 'none';
    popupbox.style.display = 'none';
    
})

var containor=document.querySelector(".container")
var addbook=document.getElementById("add-book")
booktitleinput=document.getElementById("book-title-input")


addbook.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML=`<h1>${booktitleinput.value}</h1>`
    containor.append(div)

})