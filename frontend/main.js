window.addEventListener("DOMContentLoaded", async () => {
  let res = await axios.get("http://localhost:3001/");

  for (let i = 0; i < res.data.length; i++) {
    let newdiv = document.createElement("div");
    let newli = document.createElement("li");
    let delete_btn = document.createElement("button");
    let edit_btn = document.createElement("button");

    edit_btn.type = "submit";
    edit_btn.textContent = "edit";
    edit_btn.onclick = edited;

    delete_btn.onclick = deleted;
    delete_btn.type = "submit";
    delete_btn.textContent = "delete";
    edit_btn.setAttribute("productid", res.data[i].id);
    delete_btn.setAttribute("productid", res.data[i].id);

    console.log(res.data);

    newli.textContent = `${res.data[i].amount}-${res.data[i].category}-${res.data[i].description}`;

    newli.appendChild(delete_btn);
    newli.appendChild(edit_btn);

    newdiv.appendChild(newli);
    document.getElementById("expenses").appendChild(newdiv);
  }
});

async function submitform() {
  const amount = document.getElementById("amount").value;
  const description = document.getElementById("description").value;
  const category = document.getElementById("category").value;

  myobj = {
    amount,
    description,
    category,
  };
  let res = await axios.post("http://localhost:3001/submitform", myobj);
  let newdiv = document.createElement("div");
  let newli = document.createElement("li");
  let delete_btn = document.createElement("button");
  let edit_btn = document.createElement("button");

  edit_btn.type = "submit";
  edit_btn.textContent = "edit";
  edit_btn.onclick = edited;

  delete_btn.onclick = deleted;
  delete_btn.type = "submit";
  delete_btn.textContent = "delete";

  newli.innerHTML = `${res.data.amount}-${res.data.category}-${res.data.description}`;

  newli.appendChild(delete_btn);
  newli.appendChild(edit_btn);

  newdiv.appendChild(newli);
  document.getElementById("expenses").appendChild(newdiv);
}

async function edited(e) {
  e.preventDefault();
  let id = e.target.getAttribute("productid");
  let res = await axios.get(`http://localhost:3001/editform/${id}`);

  console.log(res.data);

  let item = e.target.parentElement;
  item.remove();
  const nameInput = document.getElementById("amount");
  const description = document.getElementById("description");
  const category = document.getElementById("category");

  nameInput.value = res.data.amount;
  description.value = res.data.description;
  category.value = res.data.category;
  let editeduser = await axios.get(`http://localhost:3001/delete/${id}`);
  //window.location.reload();
}
async function deleted(e) {
  e.preventDefault();
  let id = e.target.getAttribute("productid");
  try {
    await axios.get(`http://localhost:3001/delete/${id}`);
    // Redirect to the homepage after successful deletion
    let item = e.target.parentElement;
    item.remove();
    window.location.reload();
  } catch (error) {
    console.error(error);
    // Handle the error
  }
}
