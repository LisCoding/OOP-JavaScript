// Challenge 1
// Print all of the students and their cohort.
let students = [
    {name: 'Remy', cohort: 'Jan'},
    {name: 'Genevieve', cohort: 'March'},
    {name: 'Chuck', cohort: 'Jan'},
    {name: 'Osmund', cohort: 'June'},
    {name: 'Nikki', cohort: 'June'},
    {name: 'Boris', cohort: 'June'}
];
for(let i = 0; i < students.length; i++){
  let s = students[i]
  console.log("name: " + s.name + ", Cohort: "+ s.cohort)
}
//ouput
// Name: Remy, Cohort: Jan
// Name: Genevieve, Cohort: March
// Name: Chuck, Cohort: Jan
// Name: Osmund, Cohort: June
// Name: Nikki, Cohort: June
// Name: Boris, Cohort: June
//


// Challenge 2
// Print out the below object to match the example.

let users = {
    employees: [
        {'first_name':  'Miguel', 'last_name' : 'Jones'},
        {'first_name' : 'Ernie', 'last_name' : 'Bertson'},
        {'first_name' : 'Nora', 'last_name' : 'Lu'},
        {'first_name' : 'Sally', 'last_name' : 'Barkyoumb'}
    ],
    managers: [
       {'first_name' : 'Lillian', 'last_name' : 'Chambers'},
       {'first_name' : 'Gordon', 'last_name' : 'Poe'}
    ]
 };

 for(let user in users){
     // when we log 'user', we notice it's a key
     console.log(user.toUpperCase());
     // when we pass the key to the 'users' object, we can pull values
     for(let i = 0; i < users[user].length; i++){
       let num = i + 1
       let dash = " - "
       let first_name = users[user][i].first_name.toUpperCase();
       let last_name = users[user][i].last_name.toUpperCase();
       let letter_count = users[user][i].first_name.length + users[user][i].last_name.length;
       console.log(num + dash + last_name + ", " + first_name + dash + letter_count);
     }
 }

// Your console should look like the following:
//
// EMPLOYEES
// 1 - JONES, MIGUEL - 11
// 2 - BERTSON, ERNIE - 12
// 3 - LU, NORA - 6
// 4 - BARKYOUMB, SALLY - 14
// MANAGERS
// 1 - CHAMBERS, LILLIAN - 15
// 2 - POE, GORDON - 9
