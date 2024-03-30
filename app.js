const inputBox=document.getElementById("inputbox");
const listContainer=document.getElementById("list-container");
const addBtn=document.getElementById("btn");

function addTask(){
    if(inputBox.value==='')
    {
       alert("You must write something...");
    }
    else{
        let li=document.createElement('li');
        li.innerHTML=inputBox.value;
        listContainer.appendChild(li);
        let cross=document.createElement('span');
       cross.innerHTML="\u00d7";
        li.appendChild(cross);
    }
    inputBox.value='';
    savedata();

}
addBtn.addEventListener('click',addTask);

listContainer.addEventListener('click',function(e)
{
    if(e.target.tagName=="LI"){
        e.target.classList.toggle("checked");
        savedata();
    }
    else if(e.target.tagName=="SPAN"){
        e.target.parentElement.remove();
        savedata();
    }
},false);

function savedata(){
    localStorage.setItem("data",listContainer.innerHTML);
}

function showtask(){
    listContainer.innerHTML=  localStorage.getItem("data");
}

showtask();

