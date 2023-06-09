// const getTodos = (resource) => {
//   return new Promise((resolve, reject) => {
//     const request = new XMLHttpRequest();

//     request.addEventListener("readystatechange", () => {
//       if (request.readyState === 4 && request.status === 200) {
//         const data = JSON.parse(request.responseText);
//         resolve(data);
//       } else if (request.readyState === 4) {
//         reject("error getting resource");
//       }
//     });

//     request.open("GET", resource);

//     request.send();
//   });
// };

// getTodos("https://jsonplaceholder.typicode.com/todos/")
//   .then((data) => {
//     console.log("promise resolved: ", data);
//   })
//   .catch((err) => {
//     console.log("promise rejected: ", err);
//   });

// fetch("https://jsonplaceholder.typicode.com/todos/")
//   .then((response) => {
//     console.log("resolved", response);
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log("rejected", err);
//   });

console.log(1);
console.log(2);

const getTodos = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/");
  const data = await response.json();
  return data;
};

const test = getTodos().then((data) => {
  console.log("resolved", data);
});

console.log(test);

console.log(3);
console.log(4);
