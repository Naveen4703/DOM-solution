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
    let result = users.filter((users) => name == users.firstName?users:'');
    document.getElementById('userName').innerHTML =  result[0].firstName + ' '+ result[0].lastName;
    document.getElementById('userSalary').innerHTML = result[0].salary; 
   
    //We can also do this using for loop & if condition :)
/* 
     let length = users.length;
     for (i=0;i<length;i++){
        if(name == users[i].firstName){
              document.getElementById('userName').innerHTML = users[i].firstName + ' '+users[i].lastName ;
              document.getElementById('userSalary').innerHTML = users[i].salary;
        }
    }
*/  
}
