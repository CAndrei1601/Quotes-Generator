var button=document.getElementById("buton");
var input2=document.getElementById("input1");
var ul=document.querySelector("ol");
function inputLength () {
   return input2.value.length;
}

function createListElement(){
    var li= document.createElement("li");
    li.appendChild(document.createTextNode(input2.value));
    ul.appendChild(li);
    input2.value="";
};

function createNewElement(){
    if(inputLength() >0)
    {
    createListElement();
    }
}
function createNewKeypress (event){
    if(inputLength() >0 && event.keyCode===13 )
    {
    createNewElement();
    }

}
button.addEventListener("click", createNewElement);
input1.addEventListener("keypress", createNewKeypress);



