const form = document.getElementById("form");
const tbody = document.getElementById("tbody");

const employees = [];
//it should take details of an employee(object) and adds this project to the table
function addEmployee(employee) {
  for (let i = 0; i < employees.length; i++) {
    e = employees[i];
    if (e.email === employee.email) {
      alert("Email Already Exists");
      return;
    } else if (e.empid === employee.empid) {
      alert("Employee Id is Already Exists");
      return;
    }
  }

  const tr = document.createElement("tr");
  tr.innerHTML = `<td>${employee.name}</td>
    <td>${employee.email}</td>
    <td>${employee.empid}</td>
    <td>${employee.company}</td>
    <td>${employee.designation}</td>
    <td>
        <button  onclick="deleteEmployee(this)" data-empid = "${employee.empid}">Delete</button>
    </td>
    `;
  tbody.appendChild(tr);
  employees.push(employee);
  //after adding an employee into the table clear the form
  form.reset();
}

//Below function delete the employee
function deleteEmployee(buttonRef) {
  let empid = buttonRef.getAttribute("data-empid");
  // using the above empid delete the corrensponding object in the employees array
  for (let i = 0; i < employees.length; i++) {
    if (employees[i] === empid) {
      employees.splice(i, 1);
      break;
    }
  }

  //also remove the employee from the DOM Tree
  let parentTd = buttonRef.parentNode;
  let parentTr = parentTd.parentNode;

  //The below line remove the <tr></tr> from the DOM tree
  parentTr.remove();
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let employee = {
    name: event.target.name.value,
    email: event.target.email.value,
    empid: event.target.empid.value,
    company: event.target.company.value,
    designation: event.target.designation.value,
  };
  addEmployee(employee);
});
