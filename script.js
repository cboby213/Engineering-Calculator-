// let num1= 1; 
// let num2= 3;
// let add= num1+ num2;
// console.log(`the sum of ${num1} and ${num2} is ${add}`) 

// for (let i =10; i>=0;i--){
//     console.log(i)
// }
// for (let i =10; i>=0;i--){
//     console.log(i)
// }

//  let num= 9;
// for (i=1; i<=10;i++){

//     console.log(`${num}*${i}=${num*i}`)
//  }

    
// for(let i=0;i<=30;i++){
//     if(i%3==0&&i%5==0){
//         console.log("fizzbuzz")
//     } else if(i%3==0){
//         console.log("fizz")
//     } else if(i%5==o){
//         console.log("buzz")
//     } else 
//         console.log(i);
// } 

// let age=22 ;
// let name= "boby";
// let category;

// if(age<=0){
//     category="invalid";
    
//  } else if(age<=12){
//     category="child";
    
//  }else if(age<=17){
//      category="teen";
//  }else if(age<=64){
//     category="adult";
//  }else {
//     category="seniorcitizen";
//  };



  
// let age=22 ;
// let name= "boby";
// let category;


//     console.log( vote=age>=18? "elegible to vote":"not eligible to vote")
//     console.log( vote=age>=30? "minor":"adult")
//     console.log( vote=age>=64? "teen":"senior")
//     console.log( name )
//     console.log( age)

// let accountholder="boby";
// let accountNumber= 2294847380;
// let balance=50000;

// let choice = 1 ;
// let amount= 500;
// if (choice ==1){
//     if(amount>0){
//         balance=  balance+ amount;
//         console.log("deposite successful");
//         console.log("accunt holder:"+accountholder);

//     }else {
//         console.log("invalid deposite amount")
//     }
    
// } else if (choice==2){
//     if(amount> balance){
//         console.log("insufficient balance")
//     }else if(amount>0){
//         balance= balance- amount;
//         console.log('withdraw successful');
//         console.log("withdraw amount"+ amount);
//     }else {
//         console.log("inalid withdraw amount")
//     }
// } else if(choice ==3){
//      console.log("account holder"+ accountholder);
//      console.log("balance"+balance)
// } else{
//     console.log("invalid choice")
// }
 
// let a=5;
// let b="5";
// console.log("5!=5",b==a)

// let a=5;
// let b="5";
// console.log("5===5",b===a)

// let a=5;
// let b=3;
// console.log("5>3",a>b)


// let a=5;
// let b=3;
// console.log("5<3",a<b)

// let a=5;
// let b=3;
// console.log("5>=3",a>=b)

// let a=5;
// let b=3;
// console.log("5<=3",a<=b)


// let a=5;
// let b=3;
// a**= 2 // a=a+1 
// console.log("a=",a)

// let a=6;
// let b=5;

// let cond1 = a>b; //true
// let cond2 = a===6; //true
// console.log("!(a>b)", !(a>b))

// let age=25;
// let mode ="drak"
// let color;
// if(mode==="drak-mode"){
//     color="black";
// }
// console.log(color);
// let age=18;

// if(age>=18){
//     console.log("you can vote");
// }
// if(age<18){
//     console.log("you can not  vote");
// }


// let age=18;



// // let mode ="dark";
// let color;
// if(mode==="dark"){
//     color="black";
// }
// if(mode==="light"){
//     color="white";
// }
// console.log(color);


// let mode ="light";
// let color;
// if(mode==="dark"){
//     color="black";
// }else{
//     color="white";
// }
// console.log(color);

// let age=25;

// if(age>=18){
//     console.log("can vote");
// }else{
//     console.log("can not vote");
// }

// const objName={key:value,
//     key:value,
//     key:value
// }

// const student={
//     Name:"boby chandra",
//     age:24,
//     grade:'A'
// }
// console.log(student);

// const Training={
//     trainerName:"mahul sethi",
//     trainerSub:"Front end devloper",
//     Staring:"01 April 2026" 
// }
// console.log(Training);

// const Training={
//     trainerName:"mahul sethi",
//     trainerSub:"Front end devloper",
//     Staring:"01 April 2026" 
// }
// console.log( Training["Name"] );
// let field="age"
// console.log(Training[field]);


// const student={
//     Name:"boby chandra",
//     age:22,
//     grade:'A'
// }
// student.city="nagina";
// delete student.grade;

// // let arr=["boby chandra",22,"nagina,bijnor"] 
// console.log("Name" in student);

// const jsonText='{"Name":"boby chandra","age":22,"grade":"A"}';
// const student= JSON.parse(jsonText);
// console.log(student);   

// const student={
//     Name:"boby chandra",
//     age:22,
//     grade:'A'
// }



// const jsonText=JSON.stringify(student);
// console.log(jsonText);
// console.log(typeof jsonText);

// const receivedText='{"Name":"boby chandra","age":22,"grade":"A"}';
// const student= JSON.parse(receivedText);

// console.log(student);
// console.log(typeof jsonText);

// 




// const person={
//    name:"boby chandra",
//     age:22,
//     city:"nagina"   
// }
// console.log(person);
// console.log(typeof person);

// const jsonText=JSON.stringify(person);
// console.log(jsonText);
// console.log(typeof jsonText);


    
// const stu = {
//   "id": 1,
//   "name": "Leanne Graham",
//   "username": "Bret",
//   "email": "Sincere@april.biz",
//   "address": {
//     "street": "Kulas Light",
//     "suite": "Apt. 556",
//     "city": "Gwenborough",
//     "zipcode": "92998-3874",
//     "geo": {
//       "lat": "-37.3159",
//       "lng": "81.1496"
//     }
//   },
//   "phone": "1-770-736-8031 x56442",
//   "website": "hildegard.org",
//   "company": {
//     "name": "Romaguera-Crona",
//     "catchPhrase": "Multi-layered client-server neural-net",
//     "bs": "harness real-time e-markets"
//   }
// }
// console.log(stu);
// console.log(typeof stu);


// function greet(name){
//     console.log("hello"+ name)
// }
// greet("boby chandra");
// greet("mahul sethi");


 //--------------------fuction 


//  function studentName(name){
//     console.log(` student name is ${name}`)
//  }
//   studentName("boby chandra");
//   studentName("mahul sethi");
//   studentName("satyarth sharma");    

// function name(name){
//   console.log(`my name is ${name}`);
// }
// studentName("boby chandra");
// studentName("mahul sethi");
// studentName("satyarth sharma");

// function add(num1,num2){
//     return num1+num2;
// } 

// console.log(add(5,3));
// const result=add(10,20);
// console.log(result);

// console.log(add(add(5,3),add(10,20)));

// function multiply(num1,num2){
//     return num1*num2;
// }
// const subtract=(num1,num2)=> {
//   return num1-num2;
// }
// // console.log(multiply(5,3));
// const multi=(num1,num2)=> num1*num2;
// console.log(multi(5,3));
// console.log(subtract(10,5));

// const qube=num=> num**3;
// console.log(qube(3));

// function greet(age){
//     if(age>=16 && age<20){
//         return "True";
//     } else {
//         return "false";
//     }
// }  
// console.log(greet(18));


// const isTeenager=age=> age>=16 && age<20;
// console.log(isTeenager(18));  


// let globalmessage="hello boby chandra, how are you doing today?";
// function myFunction(){
//     let localmessage="welcome to the world of programming";
//     // console.log(globalmessage);
//     // console.log(localmessage);
// }

// myFunction();

//  console.log(globalmessage);
// console.log(localmessage);

// const student=[
//   {name:"boby chandra",age:22, grade:'A',cgpa:7.5},
//   {name:"mahul sethi",age:25, grade:'B' ,cgpa:6.8},
//   {name:"amar singh",age:23, grade:'A',cgpa:8.0},  
//   {name:"jamal khan",age:23, grade:'A',cgpa:7.8}
// ];
// console.log(student[1].name,student[3],student[5]);
// const studentNames= student.map(stu=> stu.name);
// console.log(studentNames);

// student .forEach((s)=>{
//   console.log(`student name ${s.name} , grade  ${s.grade}`);
// });
 
// const topStudent= student.reduce((top,s)=>{
//   return s.cgpa>top.cgpa ? s : top;
// }, student[0]);
// console.log(`top student is ${topStudent.name} with cgpa ${topStudent.cgpa}`);

// const filteredStudents= student.filter(s=> s.cgpa>7.0);
// console.log("students  cgpa greater than  7.0:");
// filteredStudents.forEach(s=> console.log(`${s.name} with cgpa ${s.cgpa}`));


// const name=student.filter(std=>std.cgpa>=7);
// console.log(student);


//______________________________________________________________________________--question_



// const database=[];

// function addstudent(name,grade,cgpa){
//     const newStudent={
//       name: name,
//       grade:grade,
//       cgpa:cgpa
//     };
//     database.push(newStudent);
//     console.log(`successfully added: ${name} ${grade} ${cgpa}`);

// }

// //remove a student 


//    function removesStudent(name){
//     const before=dtabse.length;
//     database.splice(0,before);
//     const filtered=dtabse.filter((s)=>s.name!==name);
//     filtered.forEach((s)=>database.push(s));
//     console.log(`successfully remove:${name}`);

              
// }
//_______________________________________________________________________________________________
// const info={
//     name:"boby chandra",
//     age: 22,
//     city:"Nagina",
//     mNo:288947,
//     gender:"male"
// }

// console.log(`${info}.name ,${info}.age`);

// delete info.city;

// info.email="bobychandra7906";
// info.name="ronak mehta";
// console.log(info);


// const student=[
//   {name:"boby chandra",age:22, grade:'A',cgpa:7.5},
//   {name:"Ronak mehta",age:25, grade:'B' ,cgpa:6.8},
//   {name:"amar singh",age:23, grade:'A',cgpa:8.0},  
//   {name:"jamal khan",age:23, grade:'A',cgpa:7.8},
//    {name:"ben",age:22,grade:'C',cgpa:7.0}
// ];


// const output= student .forEach((s)=>{
//   console.log(`student name=  ${s.name} ,| grade=  ${s.grade} ,| cgpa=${s.cgpa}`);
// });
// const filteredStudents= student.filter(s=> s.cgpa>7.0);
// console.log("students  cgpa greater than  7.0:");
// filteredStudents.forEach(s=> console.log(`${s.name} with cgpa ${s.cgpa}`));
 
// //---------------------sort---------


// const topstudent=student.sort(a,b=>b.cgpa-a.cgpa).slice(0,3);
// const topstudent=topstudent.forEach(s =>console.log(s.name,s.cgpa,sgrade));



// function findStudent(name){
//     const found=filteredStudents.find((s)=>s.name===name);
//     if(found){
//         console.log(`student ${name} found`);

//     }else{
//         console.log("not found");

//     }
// }
// findStudent("chandra");




//------------------------------------------------------------------------------------------------------

// const dataBase=[];

// function addStudent(name, grade, gpa){
//     const newStudent={
//         name: name,
//         grade: grade,
//         gpa: gpa,
//     }
//     dataBase.push(newStudent);
//     console.log(`sussecfully added: ${name}`);
// }

// function removeStudent(name){
//     const before=dataBase.length;
//     
//     const filtered=databse.filter((s)=>s.name!==name);
// dataBase.slice(0,before);
//     filtered.forEach((s)=>database.push(s));
//     console.log(`successfully remove:${name}`);
// }

// //find a student by name

// function findStudent(name){
//     const found=database.find((s)=>s.name==name)
//     if(found){
//         console.log(`found:${found.name} grade:${found.grade} cgpa-${found.cgpa}`);
//     }else {
//         console.log(`student ${name} not found`);
//     }
//     }

//     //disply all students
//     function showAll(){
//         if(database.length==0){
//             console.log("databse is empty");
//             return;
//         }
//         databse.forEach((s,i)=>[
//             console.log(`${i+1},${s.name}`)
//         ])
//     }

//     

//     addStudent("boby chandra","A",9);
//     addStudent("ronak","b",7);
//     addStudent("amar","b",9);
//     addStudent("jamal","A",7.6);
// showAll();


//-------------------------------------------------------------------


// const dataBase=[];

// function addStudent(name, grade, gpa){
//     const newStudent={
//         name: name,
//         phoneNo: phoneNo,
//         email:email,
//     }
//     dataBase.push(newStudent);
//     console.log(`sussecfully added: ${name}`);
// }
 
// // function removestudnt(name){
//       const before=dataBase.length;
//       const filtered=databse.filter((s)=>s.name!==name);
//             dataBase.slice(0,before);
//        filtered.forEach((s)=>dataBase.push(s));
//        console.log(`successfully remove:${name}`)

// }
// function findStudent(name){
//     const found=database.find((s)=>s.name==name)
//     if(found){
//         console.log(`found:${found.name} grade:${found.grade} cgpa-${found.cgpa}`);
//     }else {
//         console.log(`student ${name} not found ${name}`);
//     }
//     }



    // Contact Database
let contacts = [];

// Create (initial structure)
function createContact(name, phone, email) {
    return { name, phone, email };
}

//  Add Contact
function addContact(name, phone, email) {
    const contact = createContact(name, phone, email);
    contacts.push(contact);
    console.log("Added:", contact);
}

//  Delete Contact (by name)
function deleteContact(name) {
    let index = contacts.findIndex(c => c.name === name);
    
    if (index !== -1) {
        let deleted = contacts.splice(index, 1);
        console.log("Deleted:", deleted[0]);
    } else {
        console.log("Not found");
    }
}

// Find Contact
function findContact(name) {
    let contact = contacts.find(c => c.name === name);
    
    if (contact) {
        console.log("Found:", contact);
    } else {
        console.log("Not found");
    }
}

//Show All Contacts
function showAll() {
    console.log("All Contacts:");
    contacts.forEach(c => {
        console.log(`Name: ${c.name}, Phone: ${c.phone}, Email: ${c.email}`);
    });
}


// Example Usage
addContact("boby", "9876543210", "boby chandra@gmail.com");
addContact("ronak", "9123456780", "ronakmehta@gmail.com");
addContact("jamal","9859804949","bobychandra7890@gmail.com")

findContact("ronak");
deleteContact("bunny");

showAll();