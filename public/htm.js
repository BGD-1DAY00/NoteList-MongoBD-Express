const body = document.querySelector("body");
const form = document.querySelector("form");
const btn = document.querySelector("form button");
const div = document.querySelector('#display')
var arr = []

btn.addEventListener("click", (e) => {
  e.preventDefault();
  const todo = form.todo.value;
  const a = addToList(todo,arr);
  //sendData(todo)
  console.log(a);
  form.todo.value = "";
  dis(arr)
});

async function sendData(todo){
    const respone= await fetch('/',{
        method:"POST",
        headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(todo)
    })
    return respone.json()
}


function addToList(todo,arr) {
    arr.push(todo)
    return arr
}

function dis(arr){
    // const j = arr.map((a)=>{
    //     div.innerHTML += `<h4 id='heading'>${a}</h4>`
    // })
    // return j
    div.innerHTML = ''
    for(let i = 0; i<arr.length; i++){
        div.innerHTML += `<h1 id='displayText'>${arr[i]}</h1>`
    }
}


