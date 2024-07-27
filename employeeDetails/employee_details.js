const employees = [
    { id: 1, name: 'John Doe', age: 30, department: 'IT', salary: 50000, specialization: 'Javascript'},
    { id: 2, name: 'Alice Smith', age: 28, department: 'HR', salary: 45000, specialization: 'Python' },
    { id: 3, name: 'Bob Johnson', age: 35, department: 'Finance', salary: 60000, specialization: 'Java' },
    //... More employee records can be added here
  ];
function displayEmployees(){
  const totalEmployees = employees.map((employee, index) => `<p>${employee.id}. ${employee.name} : ${employee.department} - $${employee.salary}`).join('');
  document.getElementById('employeesDetails').innerHTML = totalEmployees;
}

  function calculateTotalSalaries(){
    const totalSalaries = employees.reduce((acc, employee) => acc + employee.salary, 0);
    alert(`Total Salaries: $${totalSalaries}`);
  }

  function displayHREmployees(){
    const hrEmployees = employees.filter(employee => employee.department === 'HR');
    const hrEmployeeDisplay = hrEmployees.map((employee, index) => `<p>${employee.id}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`).join('');
    document.getElementById('employeesDetails').innerHTML = hrEmployeeDisplay;
  }

  function findSpec(spec){
    const emSpec = employees.filter((employee) => employee.specialization === spec);
    const emSpecDis = emSpec.map((employee, index) => `<p>${employee.id}: ${employee.name} - ${employee.department} - ${employee.specialization}</p>`).join('');
    document.getElementById('employeesDetails').innerHTML = emSpecDis;
  }