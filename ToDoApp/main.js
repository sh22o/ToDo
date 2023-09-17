const inputBox = document.getElementById('inputBox'); 
const listContiner = document.getElementById('listBox'); 
function addTask(){ 
if(inputBox.value == '')
{
    alert(" you must write something ... !"); 
}else{
    let li = document.createElement("li"); 
    li.innerHTML= inputBox.value ; 
    listContiner.appendChild(li); 
    let span = document.createElement("span"); 
    span.innerHTML="\u00d7"; 
    li.appendChild(span); 


} 
inputBox.value= ""; 
SaveD(); 


} 

listContiner.addEventListener('click' ,function(e){
    if(e.target.tagName === 'LI'){ 
        e.target.classList.toggle("checked");  
        SaveD(); 


    } 
    else if(e.target.tagName === 'SPAN' ){ 
        e.target.parentElement.remove(); 
        SaveD(); 

    }

    
}, false);  

// function to save data 

function SaveD(){
    localStorage.setItem("data", listContiner.innerHTML); 

} 

// function to show tasks 

function ShowTasks(){ 
  listContiner.innerHTML=  localStorage.getItem("data"); 

}  

ShowTasks(); 
