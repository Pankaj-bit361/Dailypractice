// you can write your js code here

let form =document.getElementById("form")
let formdata=JSON.parse(localStorage.getItem("book-list"))||[]
form.addEventListener("submit",(e)=>{
e.preventDefault()


let ob={
    name:form.name.value,
    author:form.author.value,
    desc:form.desc.value,
    date:form.added.value,
    category:form.category.value,
    price:form.price.value
}
console.log(ob)
formdata.push(ob)
localStorage.setItem("book-list",JSON.stringify(formdata))
})