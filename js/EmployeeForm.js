function save() {
   try {
       let employee = new EmployeeData("Name","profile","male","sales",123,"March 21, 2021","note")
       alert(employee.toString())
   } catch (error) {
       alert(error)
   }
}