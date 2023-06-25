let obj=[
    {person:"Abeer Fatima",age:"26",company:"Guvi"},
    {person:"Ravi Kumar",age:"27",company:"Guvi Geek"},
    {person:"Jyoti jain",age:"24",company:"Guvi Geek Networks"}
 ]

// Q1. Iterating over above Json data using all the for loops

// i) using traditional for loop

for(let i=0;i<obj.length;i++){
console.log(`
Data using traditional for loop
Name: ${obj[i].person}
Age:${obj[i].age}
Company:${obj[i].company}`)
}

/* O/P:
Data using traditional for loop
Name: Abeer Fatima
Age:26
Company:Guvi
script.js:12 
Data using traditional for loop
Name: Ravi Kumar
Age:27
Company:Guvi Geek
script.js:12 
Data using traditional for loop
Name: Jyoti jain
Age:24
Company:Guvi Geek Networks */

// ii) using for-each loop

obj.forEach(person=>{
    console.log(`
    Data using for-each loop
    Name: ${person.person}
    Age:${person.age}
    Company:${person.company}`)
})

/* O/P:
Data using for-each loop
Name: Abeer Fatima
Age:26
Company:Guvi
script.js:12 
Data using for-each loop
Name: Ravi Kumar
Age:27
Company:Guvi Geek
script.js:12 
Data using for-each loop
Name: Jyoti jain
Age:24
Company:Guvi Geek Networks*/

// iii) using for-in loop

for(const x in obj){
    console.log(`
    Data using for-in loop
    Name: ${obj[x].person}
    Age:${obj[x].age}
    Company:${obj[x].company}`)
}

/* O/P:
Data using for-in loop
Name: Abeer Fatima
Age:26
Company:Guvi
script.js:12 
Data using for-in loop
Name: Ravi Kumar
Age:27
Company:Guvi Geek
script.js:12 
Data using for-in loop
Name: Jyoti jain
Age:24
Company:Guvi Geek Networks */



// iv) using for-of loop

for(const y of obj){
    console.log(`
    Data using for-of loop
    Name: ${y.person}
    Age:${y.age}
    Company:${y.company}`)
}

/* O/P:
Data using for-of loop
Name: Abeer Fatima
Age:26
Company:Guvi
script.js:12 
Data using for-of loop
Name: Ravi Kumar
Age:27
Company:Guvi Geek
script.js:12 
Data using for-of loop
Name: Jyoti jain
Age:24
Company:Guvi Geek Networks */


