// var a =""

// function add(){
//   return a+ b
// }

// add()
// function add(){
//     return a+ b
// }
// add()


// function apiFetch(){
//     fetch(url)  // 2sec
// }  // sync or async

// apiFetch()

// var a =""

// function add(){
//   return a+ b
// }

// add()
// function add(){
//     return a+ b
// }
// add()


// *********************
// Examples 1







// console.log("runnig code")

// // function(){}

// // ( ) => { }

// document.addEventListener("DOMContentLoaded", () => {
//     console.log("DOMContentLoaded")
// })

// console.log("runnig end")


















// console.log("runnig code")

// var btn = document.querySelector('.hitme')

// btn.addEventListener("click", () => {
//     console.log("push btn")
// })

// console.log("runnig end")













// function first(){
//     console.log(1);
//   }
// function second(){
//     console.log(2);
// }
//   first();
//   second();















// function first(){
//     // Simulate a code delay
//     setTimeout( function(){
//       console.log(1);
//     }, 0 );
//   }
//   function second(){
//     console.log(2);
//   }
//   first();
//   second();
























/*  */
// ********************* Callback
// Examples 2
/*  */




















// setTimeout(() => {
//     console.log('I waited 2 seconds.');
//   }, 2000);



//   Callback Hell


// setTimeout(() => {
//     console.log('I waited 2 seconds.');

//     setTimeout(() => {
//       console.log('I waited another 2 seconds.');
//     }, 2000);

//   }, 2000);





//   setTimeout(() => {
//     console.log('I waited 2 seconds.');
//     setTimeout(() => {
//       console.log('I waited another 2 seconds.');
//       setTimeout(() => {
//           console.log('I waited a total of 6 seconds.');
//       }, 2000);
//     }, 2000);
//   }, 2000);
















/*  */
// ********************* Asynchronous
// Examples 3
/*  */


























// console.log("1")
// const response = fetch('https://api.com/values/1');
// const json = response.json();
// console.log(json);
// console.log(2)










console.log(1)

fetch('https://reqres.in/api/users')
    .then( 
        (response) => {
            console.log(response)
    } )
    
console.log(2)














// const response = await fetch('https://reqres.in/api/users');
// const json = await response.json();
// console.log(json);













// const fetchUser = async () => {
    //     const res = await fetch('https://reqres.in/api/users')
    //     const json = await res.json()
    //     console.log(res, "res")
    //     console.log(json, "res")
    // }
    // fetchUser()
    
    
    
    
    







        
    
    

    


// const number = 45
// try{
//     number = 80
//     console.log(number)
// }catch (error){
//     // throw new Error(number)
//     console.log(error)
// }















// let number = 45
// try{
//     number = 80
//     console.log(number)
// }catch (error){
//     console.log(error)
// }


























// const fetchUser = async () => {
//     try{    
//         const res = await fetch('https://reqres.in/api/users')
//         const json = await res.json()
//         console.log(res, "res")
//         console.log(json, "res")
//     }
//     catch(error){
//         console.log(error)
//     }
// }

// fetchUser()



























    // const fetchUsers = async () => {
//     try {
//         const res = await fetch('https://reqres.in/api/users');
//         if (!res.ok) {
//             throw new Error(res.status);
//         }
//         const data = await res.json();
//         console.log(data);
//     } catch (error) {
//         console.log(error);
//     }
// }

// fetchUsers();

























    // new Promise( /* executor */ (resolve, reject) => {});

    // const wait = ms => new Promise((resolve, reject) => setTimeout(resolve, ms));
    // wait(2000).then(() => console.log('I waited 2 seconds.'));


























// I waited 2 seconds.


// end
// end
// end











// setTimeout(()=>{
//     const res = fetch('https://reqres.in/api/users')
//     setTimeout(()=>{
//         // const json = res.json()
//         console.log(res, "res")
//         // console.log(json, "res")

//     },5000)

// },1000)






// const fetchUsers = async () => {
//     try {
//         const res = await fetch('https://reqres.in/api/users');
//         if (!res.ok) {
//             throw new Error(res.status);
//         }
//         const data = await res.json();
//         console.log(data);
//     } catch (error) {
//         console.log(error);
//     }
// }

// fetchUsers();

//     const response = fetch('https://reqres.in/api/users');
// const json = response.json();
// console.log(json);





// const response = fetch('https://reqres.in/api/users');
// setTimeout(() => {
//     const json = response.json();
//     console.log(json);
// },1000 )

// through promise

// fetch('https://reqres.in/api/users')
//     .then(res => res.json())
//     .then(res => {
//         res.data.map(user => {
//             console.log(`${user.id}: ${user.first_name} ${user.last_name}`);
//         });
// });



// through async

// const fetchUsers = async () => {
//     try {
//         const res = await fetch('https://reqres.in/api/users');
//         if (!res.ok) {
//             throw new Error(res.status);
//         }
//         const data = await res.json();
//         console.log(data);
//     } catch (error) {
//         console.log(error);
//     }
// }

// fetchUsers();




















// console.log("runnig code")


// document.addEventListener("DOMContentLoaded", () => {
//     console.log("DOMContentLoaded")
// })

// console.log("runnig end")









// console.log("runnig code")

// var btn = document.querySelector('.hitme')
// btn.addEventListener("click", () => {
//     console.log("push btn")
// })

// console.log("runnig end")













// function first(){
//     console.log(1);
//   }
// function second(){
//     console.log(2);
// }
//   first();
//   second();















// function first(){
//     // Simulate a code delay
//     setTimeout( function(){
//       console.log(1);
//     }, 500 );
//   }
//   function second(){
//     console.log(2);
//   }
//   first();
//   second();






































// contents = readFile("./thefile.txt")
// connection = openConnection("host", 8080);
// write(contents, connection)
// close(connection);





// var xhr = new XMLHttpRequest();
// xhr.open("GET", "./api.json", true);
// xhr.onload = function (e) {
//     console.log(xhr)
    
// //   if (xhr.readyState === 4) {
// //     if (xhr.status === 200) {
// //       console.log(xhr.responseText);
// //     } else {
// //       console.error(xhr.statusText);
// //     }
// //   }
// // };
// // xhr.onerror = function (e) {
// //   console.error(xhr);
// };
// // xhr.send(null); 




// json() returns the body as a JSON object
// text() returns the body as s string
// blob() returns the body as a Blob object
// formData() returns the body as a FormData object
// arrayBuffer() returns the body as an arrayBuffer 