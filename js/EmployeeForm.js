window.addEventListener("DOMContentLoaded", (event) => {
  //validate name
  const name = document.querySelector("#name");
  const textError = document.querySelector(".name-error");
  name.addEventListener("input", function () {
    if (name.value.length == 0) {
      textError.textContent = "";
      return;
    }
    try {
      new EmployeeData().name = name.value;
      console.log(name.value);
      textError.textContent = "";
    } catch (error) {
      textError.textContent = error;
    }
  });
  
  //validate date
  function checkFulldate(fulldate) {
    console.log(fulldate);
    try {
      new EmployeeData().startDate = fulldate
      dateError.textContent = ""
    } catch (error) {
      dateError.textContent = error
    } 
  }
  const day = document.querySelector("#day") 
  const month = document.querySelector("#month")
  const year =  document.querySelector("#year")
  const dateError = document.querySelector(".date-error")
  day.addEventListener("change" ,function() {
    let fulldate = day.value +" "+month.value+" "+year.value
    checkFulldate(fulldate) 
  })
  month.addEventListener("change" ,function() {
    let fulldate = day.value +" "+month.value+" "+year.value
    checkFulldate(fulldate) 
  })
  year.addEventListener("change" ,function() {
    let fulldate = day.value +" "+month.value+" "+year.value
    checkFulldate(fulldate) 
  })

  //validate salary
  const salary = document.querySelector("#salary");
  const output = document.querySelector(".salary-output");
  output.textContent = salary.value;
  salary.addEventListener("input", function () {
    output.textContent = salary.value;
  });
});

const getInputValueById = (id) => {
  let value = document.querySelector(id).value;
  return value;
};

function save() {
  try {
    let newEmployee = new EmployeeData();
  } catch (error) {
    alert(error);
  }
}
