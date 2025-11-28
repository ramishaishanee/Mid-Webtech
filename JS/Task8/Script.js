const userTypeSelect = document.getElementById("userType");
const rollGroup = document.getElementById("rollGroup");
const deptGroup = document.getElementById("deptGroup");

function handleUserTypeChange() {
  const selectedType = userTypeSelect.value;

  if (selectedType === "student") {
    rollGroup.style.display = "block";   // show roll
    deptGroup.style.display = "none";    // hide department
  } else if (selectedType === "teacher") {
    rollGroup.style.display = "none";    // hide roll
    deptGroup.style.display = "block";   // show department
  } else {
    // nothing selected
    rollGroup.style.display = "none";
    deptGroup.style.display = "none";
  }
}

// Run when dropdown changes
userTypeSelect.addEventListener("change", handleUserTypeChange);

// Ensure both are hidden on first load
handleUserTypeChange();