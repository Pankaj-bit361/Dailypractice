// you can write your js code here
let bookmarkdata=JSON.parse(localStorage.getItem("bookmark-list"))||[]
const bookmark=document.querySelector("tbody")


console.log(bookmark)

bookmarkdata.forEach((item,index)=>{
    const tr=document.createElement("tr")

    const td1=document.createElement("td")
    td1.textContent=item.name
    const td2=document.createElement("td")
    td2.textContent=item.author
    const td3=document.createElement("td")
    td3.textContent=item.desc
    const td4=document.createElement("td")
    td4.textContent=item.date
    const td5=document.createElement("td")
    td5.textContent=item.category
    const td6=document.createElement("td")
    td6.textContent=item.price
   

tr.append(td1,td2,td3,td4,td5,td6)
    bookmark.append(tr)
})
