// Input fields
const nameTF = document.getElementById("nameTF");
const rollTF = document.getElementById("rollTF");
const deptTF = document.getElementById("deptTF");

// Error span
const formERR = document.getElementById("formERR");

// Table body
const tableBody = document.getElementById("tableBody");

function addStudent() {
  // Clear previous error
  formERR.innerHTML = "";

  const nameVal = nameTF.value.trim();
  const rollVal = rollTF.value.trim();
  const deptVal = deptTF.value.trim();

  let hasERR = false;

  // Validation: no field empty
  if (nameVal === "" || rollVal === "" || deptVal === "") {
    hasERR = true;
    formERR.innerHTML = "All fields are required.";
    formERR.style.color = "red";
  }

  if (hasERR) {
    return false; // prevent form submission
  }

  // Create new row
  const tr = document.createElement("tr");

  // Name cell
  const nameTD = document.createElement("td");
  nameTD.innerText = nameVal;
  tr.appendChild(nameTD);

  // Roll cell
  const rollTD = document.createElement("td");
  rollTD.innerText = rollVal;
  tr.appendChild(rollTD);

  // Department cell
  const deptTD = document.createElement("td");
  deptTD.innerText = deptVal;
  tr.appendChild(deptTD);

  // Action cell with Delete button
  const actionTD = document.createElement("td");
  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "Delete";
  deleteBtn.className = "delete-btn";

  // Delete row on click
  deleteBtn.addEventListener("click", function () {
    tableBody.removeChild(tr);
  });

  actionTD.appendChild(deleteBtn);
  tr.appendChild(actionTD);

  // Add row to table
  tableBody.appendChild(tr);

  // Clear inputs
  nameTF.value = "";
  rollTF.value = "";
  deptTF.value = "";

  return false; // keep page from reloading
}