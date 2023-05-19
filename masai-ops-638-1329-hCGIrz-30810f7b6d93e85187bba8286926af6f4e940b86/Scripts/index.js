// Write code related to Home page here

let form=document.getElementById("form")
let data=JSON.parse(localStorage.getItem("todos"))||[]
form.addEventListener("submit",(e)=>{
    e.preventDefault()
    let ob={
        name:form.name.value,
        desc:form.desc.value,
        date:form.addDate.value,
        deadline:form.deadline.value,
        priority:form.priority.value,
        status:"todo"
    }

data.push(ob)
console.log(data)
localStorage.setItem("todos",JSON.stringify(data))
console.log("hello")
})