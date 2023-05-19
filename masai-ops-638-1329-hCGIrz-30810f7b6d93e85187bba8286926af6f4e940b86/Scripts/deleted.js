// Write code related to Deleted page here
let Deleteddata=JSON.parse(localStorage.getItem("deleted-todos"))||[]

let tbody=document.getElementById("tbody")

Deleteddata.forEach((item)=>{

let tr=document.createElement("tr")

let td1=document.createElement("td")
td1.textContent=item.name
let td2=document.createElement("td")
td2.textContent=item.desc
let td3=document.createElement("td")
td3.textContent=item.date
let td4=document.createElement("td")
td4.textContent=item.deadline
let td5=document.createElement("td")
td5.textContent=item.priority
let td6=document.createElement("td")
td6.textContent=item.status


tr.append(td1,td2,td3,td4,td5,td6)
tbody.append(tr)

})