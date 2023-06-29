let input=document.querySelector(".text");
let mainCon=document.querySelector(".to-do-task");
let done=false;
input.addEventListener("keypress",(e)=>{
    let key=e.key;
    if(key==="Enter"){
        createToDoTask();
    }
})
function createToDoTask(){
    let newTask=document.createElement("div");
    newTask.setAttribute("class","task");
    newTask.innerText=input.value;
    newTask.style.backgroundColor="black";
    let removeBtn=document.createElement("div");
        removeBtn.setAttribute("class","rBtn");
        removeBtn.innerHTML=`<span class="rbtn material-icons">
                 close
        </span>`

    newTask.appendChild(removeBtn);
    mainCon.appendChild(newTask);
    newTask.addEventListener("click",(e)=>{
        done=!done;
        if(done){newTask.style.backgroundColor="gray";
       
        let rbtn=newTask.querySelector(".rbtn");
        
           rbtn.addEventListener("click",(e)=>{
            if(done){
            newTask.remove();
            
            } 
            
        
        })
    
    
    }
        else{
            newTask.style.backgroundColor="black";
        }
        
    })
}