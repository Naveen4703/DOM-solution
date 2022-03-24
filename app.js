let users = [
    {firstName: 'John', lastName: 'Doe', age: 30, salary: 5000},
    {firstName: 'Jane', lastName: 'Doe', age: 25, salary: 4000},
    {firstName: 'Ashish', lastName: 'Shukla', age: 20, salary: 3000},
    {firstName: 'Yash', lastName: 'Goel', age: 35, salary: 6000},
    {firstName: 'Arpit', lastName: 'Khare', age: 40, salary: 7000},
    {firstName: 'Sahil', lastName: 'Pocker', age: 45, salary: 8000},
]

function findUser(){
    let name = document.getElementById('num').value;
    let result = users.filter((users) => name == users.firstName?users.salary:'');
    document.getElementById('userName').innerHTML =  result[0].firstName + ' '+ result[0].lastName;
    document.getElementById('userSalary').innerHTML = result[0].salary;
  
}