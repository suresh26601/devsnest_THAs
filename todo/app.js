let topic=document.getElementById('topic');
let desc=document.getElementById("description");
let todos=[];
// ********for displaying todos**********
todos=(localStorage.getItem("todos"))?JSON.parse(localStorage.getItem("todos")):[];
function showTodo(){
    localStorage.setItem("todos",JSON.stringify(todos))
    if (!todos.length){
        document.getElementById("todoHead").innerHTML="No TODO to display..";
        document.getElementById("todoAll").innerHTML="";
    }
    else{
        document.getElementById("todoHead").innerHTML="YOUR TODOs";
    let node='';
    todos.forEach((ele,ind)=>{
        node+=`<div class="my-3 p-3 todo"><h2>${ind+1}. ${ele.task}</h2><p>${ele.desc}</p><button class="btn btn-danger" value='${ele.id}'>delete</button></div>`;
    })
    document.getElementById("todoAll").innerHTML=node;
}
}
showTodo();
function addTodo(){
    if(topic.value && desc.value){
    let obj={
        id:(todos.length>0)?todos[todos.length-1].id+1:1,
        task:`${topic.value}`,
        desc:`${desc.value}`
    }
    todos=[...todos,obj];
    showTodo();
}
else{
    alert("Please, Fill both...")
}
topic.value="";
 desc.value="";
}
// ********for deleting todo*******
todoAll.addEventListener('click',(e)=>{
    todos=todos.filter((ele)=>{
        return ele.id!==Number(e.target.value);
    })
    showTodo();
    
})