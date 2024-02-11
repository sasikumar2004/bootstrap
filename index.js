var selectedRow = null;

//Show alerts

function showAlert(message, className) {
  const div = document.createElement("div");
  div.className = `alert alert-${className}`;

  div.appendChild(document.createTextNode(message));
  const container = document.querySelector(".container");
  const main = document.querySelector(".main");
  container.insertBefore(div, main);

  setTimeout(() => document.querySelector(".alert").remove(), 3000);
}
//Clear All Fields
function clearFields() {
  document.querySelector("#productname").value = "";
  document.querySelector("#quantity").value = "";
  document.querySelector("#price").value = "";
}

//Add Data
document.querySelector("#product-form").addEventListener("submit", (e) => {
  e.preventDefault();

  //Get Form Values
  const productname = document.querySelector("#productname").value;
  const quantity = document.querySelector("#quantity").value;
  const price = document.querySelector("#price").value;

  // validata
  if (productname == "" || quantity == "" || price == "") {
    showAlert("Please fil in all fields", "danger");
  } else {
    if (selectedRow == null) {
      const list = document.querySelector("#product-list");
      const row = document.createElement("tr");

      row.innerHTML = `
            <td>${productname}</td>
            <td>${quantity}</td>
            <td>${price}</td>
            <td>
            <a href="#" class="btn btn-warning btn-sm edit">Edit</a>
        `;
      list.appendChild(row);
      selectedRow = null;
      showAlert("Product Added", "Success");
    } else {
      selectedRow.children[0].textContent = productname;
      selectedRow.children[1].textContent = quantity;
      selectedRow.children[2].textContent = price;
      selectedRow = null;
      showAlert("Product info Edited", "info");
    }
    clearFields();
  }
});
//Edit Data
document.querySelector("#product-list").addEventListener("click", (e) => {
  target = e.target;
  if (target.classList.contains("edit")) {
    selectedRow = target.parentElement.parentElement;
    document.querySelector("#productname").value =
      selectedRow.children[0].textContent;
    document.querySelector("#quantity").value =
      selectedRow.children[1].textContent;
    document.querySelector("#price").value =
      selectedRow.children[2].textContent;
  }
});

//delete data

// document.querySelector("#student-list").addEventListener("cilck", (e) => {
//   target = e.target;
//   if (target.classList.contains("delete")) {
//     target.parentElement.parentElement.remove();
//     showAlert("Student Data Deleted", "danger");
//   }
// });
