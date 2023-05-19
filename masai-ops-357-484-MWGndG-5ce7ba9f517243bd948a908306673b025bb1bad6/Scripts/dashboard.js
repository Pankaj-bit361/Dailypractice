// you can write your js code here

const dashboard=document.querySelector("tbody")
const span=document.querySelector("span")


let arr=JSON.parse(localStorage.getItem("book-list"))||[]
let buydata=JSON.parse(localStorage.getItem("buy-list"))||[]
let bookmarkdata=JSON.parse(localStorage.getItem("bookmark-list"))||[]
let filter=document.getElementById("filter")
//console.log(formdata)



filter.addEventListener("change",()=>{
    if(filter.value===""){
dashboarddata(arr)
    }else{
        let Arr=arr.filter((item)=>item.category==filter.value)
        dashboarddata(Arr)
    }
    
})


const dashboarddata=(arr)=>{
dashboard.innerHTML=""

span.textContent=arr.length
arr.forEach((item,index)=>{
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
    const td7=document.createElement("td")
    td7.textContent="Buy"
    const td8=document.createElement("td")
    td8.textContent="Add"

    td7.addEventListener("click",()=>{
        buydata.push(item)
        localStorage.setItem("buy-list",JSON.stringify(buydata))
        arr.splice(index,1)
        localStorage.setItem("book-list",JSON.stringify(arr))
        dashboarddata(arr)
    })

    td8.addEventListener("click",()=>{
        bookmarkdata.push(item)
        localStorage.setItem("bookmark-list",JSON.stringify(bookmarkdata))
        arr.splice(index,1)
        localStorage.setItem("book-list",JSON.stringify(arr))
        dashboarddata(arr)
    })

tr.append(td1,td2,td3,td4,td5,td6,td7,td8)
    dashboard.append(tr)
})

}


dashboarddata(arr)