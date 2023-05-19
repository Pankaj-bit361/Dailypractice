let todo = document.querySelector("#todo>div");
let completed = document.querySelector("#completed>div");
let stuck = document.querySelector("#stuck>div");
let progress = document.querySelector("#progress>div");

let Deleteddata = JSON.parse(localStorage.getItem("deleted-todos")) || [];
let data = JSON.parse(localStorage.getItem("todos")) || [];

const showdata = () => {
  todo.innerHTML = "";
  completed.innerHTML = "";
  stuck.innerHTML = "";
  progress.innerHTML = "";
  data.forEach((item, index) => {
    console.log(item.status, "line 12");
    if (item.status == "todo") {
      let div = document.createElement("div");
      let name = document.createElement("h3");
      name.innerText = item.name;
      let description = document.createElement("p");
      description.innerText = item.desc;
      let date = document.createElement("p");
      date.innerText = item.date;
      let deadline = document.createElement("p");
      deadline.innerText = item.deadline;
      let priority = document.createElement("p");
      priority.innerText = item.priority;
      let select = document.createElement("select");
      select.setAttribute("id", "myselect");

      let option1 = document.createElement("option");
      option1.value = "todo";
      option1.textContent = "TODO";
      let option2 = document.createElement("option");
      option2.value = "progress";
      option2.textContent = "PROGRESS";
      let option3 = document.createElement("option");
      option3.value = "completed";
      option3.textContent = "COMPLETED";
      let option4 = document.createElement("option");
      option4.value = "stuck";
      option4.textContent = "STUCK";

      select.append(option1, option2, option3, option4);

      let Deleted = document.createElement("button");
      Deleted.innerText = "Delete";

      div.append(name, description, date, deadline, priority, select, Deleted);
      todo.append(div);
      select.addEventListener("change", (e) => {
        console.log(e.target.value);
        item.status = e.target.value;
        localStorage.setItem("todos", JSON.stringify(data));
        showdata();
      });

      Deleted.addEventListener("click", () => {
        Deleteddata.push(item);
        localStorage.setItem("deleted-todos", JSON.stringify(Deleteddata));
        data.splice(index, 1);
        localStorage.setItem("todos", JSON.stringify(data));
        showdata();
      });
    } else if (item.status === "completed") {
      let div = document.createElement("div");
      let name = document.createElement("h3");
      name.innerText = item.name;
      let description = document.createElement("p");
      description.innerText = item.desc;
      let date = document.createElement("p");
      date.innerText = item.date;
      let deadline = document.createElement("p");
      deadline.innerText = item.deadline;
      let priority = document.createElement("p");
      priority.innerText = item.priority;
      let select = document.createElement("select");
      select.setAttribute("id", "myselect");

      let option3 = document.createElement("option");
      option3.value = "todo";
      option3.textContent = "TODO";
      let option2 = document.createElement("option");
      option2.value = "progress";
      option2.textContent = "PROGRESS";
      let option1 = document.createElement("option");
      option1.value = "completed";
      option1.textContent = "COMPLETED";
      let option4 = document.createElement("option");
      option4.value = "stuck";
      option4.textContent = "STUCK";

      select.append(option1, option2, option3, option4);

      let Deleted = document.createElement("button");
      Deleted.innerText = "Delete";

      div.append(name, description, date, deadline, priority, select, Deleted);
      completed.append(div);
      select.addEventListener("change", (e) => {
        console.log(e.target.value);
        item.status = e.target.value;
        localStorage.setItem("todos", JSON.stringify(data));
        showdata();
      });

      Deleted.addEventListener("click", () => {
        Deleteddata.push(item);
        localStorage.setItem("deleted-todos", JSON.stringify(Deleteddata));
        data.splice(index, 1);
        localStorage.setItem("todos", JSON.stringify(data));
        showdata();
      });
    } else if (item.status === "stuck") {
      let div = document.createElement("div");
      let name = document.createElement("h3");
      name.innerText = item.name;
      let description = document.createElement("p");
      description.innerText = item.desc;
      let date = document.createElement("p");
      date.innerText = item.date;
      let deadline = document.createElement("p");
      deadline.innerText = item.deadline;
      let priority = document.createElement("p");
      priority.innerText = item.priority;
      let select = document.createElement("select");
      select.setAttribute("id", "myselect");

      let option4 = document.createElement("option");
      option4.value = "todo";
      option4.textContent = "TODO";
      let option2 = document.createElement("option");
      option2.value = "progress";
      option2.textContent = "PROGRESS";
      let option3 = document.createElement("option");
      option3.value = "completed";
      option3.textContent = "COMPLETED";
      let option1 = document.createElement("option");
      option1.value = "stuck";
      option1.textContent = "STUCK";

      select.append(option1, option2, option3, option4);

      let Deleted = document.createElement("button");
      Deleted.innerText = "Delete";

      div.append(name, description, date, deadline, priority, select, Deleted);
      stuck.append(div);
      select.addEventListener("change", (e) => {
        console.log(e.target.value);
        item.status = e.target.value;
        localStorage.setItem("todos", JSON.stringify(data));
        showdata();
      });

      Deleted.addEventListener("click", () => {
        Deleteddata.push(item);
        localStorage.setItem("deleted-todos", JSON.stringify(Deleteddata));
        data.splice(index, 1);
        localStorage.setItem("todos", JSON.stringify(data));
        showdata();
      });
    } else {
      let div = document.createElement("div");
      let name = document.createElement("h3");
      name.innerText = item.name;
      let description = document.createElement("p");
      description.innerText = item.desc;
      let date = document.createElement("p");
      date.innerText = item.date;
      let deadline = document.createElement("p");
      deadline.innerText = item.deadline;
      let priority = document.createElement("p");
      priority.innerText = item.priority;
      let select = document.createElement("select");
      select.setAttribute("id", "myselect");

      let option2 = document.createElement("option");
      option2.value = "todo";
      option2.textContent = "TODO";
      let option1 = document.createElement("option");
      option1.value = "progress";
      option1.textContent = "PROGRESS";
      let option3 = document.createElement("option");
      option3.value = "completed";
      option3.textContent = "COMPLETED";
      let option4 = document.createElement("option");
      option4.value = "stuck";
      option4.textContent = "STUCK";

      select.append(option1, option2, option3, option4);
      let Deleted = document.createElement("button");
      Deleted.innerText = "Delete";
      div.append(name, description, date, deadline, priority, select, Deleted);
      progress.append(div);
      select.addEventListener("change", (e) => {
        console.log(e.target.value);
        item.status = e.target.value;
        localStorage.setItem("todos", JSON.stringify(data));
        showdata();
      });
      Deleted.addEventListener("click", () => {
        Deleteddata.push(item);
        localStorage.setItem("deleted-todos", JSON.stringify(Deleteddata));
        data.splice(index, 1);
        localStorage.setItem("todos", JSON.stringify(data));
        showdata();
      });
    }
  });
};

showdata();
