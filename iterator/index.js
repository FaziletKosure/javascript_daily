// Iterators
// << forEach >> ================================================
// const numbers = [1, 3, 6, "Selam!", 7, 33, 2, { id: 0, name: "Ahmet" }, 4, 10];
// numbers.forEach((number) => {
//   console.log("number: " + number);
// });
// numbers.forEach(logNumbers);
// function logNumbers(n) {
//   console.log("number: " + n);
// }
// << map >> ================================================
// const numbers = [1, 3, 6, 7, 33, 2, 4, 10];
// const newNumbers = numbers.map((num) => {
//   return num * 2;
// });
// console.log(newNumbers);
// ================================================ 🔥
// << map vs foreach >>
// const users = [
//     { id: 0, name: "Jack", age: 20 },
//     { id: 1, name: "Milton", age: 34 },
//     { id: 2, name: "Arthur", age: 76 },
//     { id: 3, name: "Mercedes", age: 16 },
//     { id: 4, name: "Dave", age: 76 },
//   ];
//   // => forEach
//   const ageArray_1 = [];
//   users.forEach((us) => {
//     ageArray_1.push(us.age * 2);
//   });
//   console.log(ageArray_1);
//   // => map
//   const ageArray_2 = users.map((us) => us.age * 2);
//   console.log(ageArray_2);
// ================================================ 🔥
// << find >> ================================================
// const users = [
//   { id: 0, name: "Jack", age: 20 },
//   { id: 1, name: "Milton", age: 34 },
//   { id: 2, name: "Arthur", age: 76 },
//   { id: 3, name: "Mercedes", age: 16 },
//   { id: 4, name: "Dave", age: 76 },
// ];
// const myUser = users.find((user) => user.age === 76);
// const myUser = users.find((user) => user.age < 25);
// const myUser = users.find((user) => {
//   return user.age < 25;
// });
// console.log(myUser);
// << filter >> ================================================
// const myUsers = users.filter((user) => user.age < 25);
// console.log(myUsers);
// const num=[1,2,3,4,5,6];
// const myNum=num.forEach((x)=>console.log(x));
// const newNumbers=num.map((num)=>{
//     return num*2;
// });
// console.log(newNumbers);
const data = [
    {
      id: 0,
      title:
        "Tempor aute aliqua reprehenderit aute anim ullamco anim excepteur ad id.",
      desc:
        "Amet qui qui est sit culpa aliqua consequat in esse nisi mollit elit pariatur ipsum. Nulla do tempor ut sit qui. Laborum amet eiusmod Lorem dolor. Voluptate fugiat ipsum non ipsum proident reprehenderit adipisicing do anim ad cillum.",
      readCount: 2310,
    },
    {
      id: 1,
      title: "Qui duis tempor qui eiusmod id tempor est ipsum anim ipsum sit.",
      desc:
        "Qui proident culpa excepteur elit minim nostrud nostrud sit ea ad proident labore Lorem. Et et elit et sint nisi sint aliqua velit exercitation sint mollit labore. Commodo pariatur deserunt aliquip sit in reprehenderit occaecat excepteur fugiat amet quis labore tempor ex.",
      readCount: 3200,
    },
    {
      id: 2,
      title: "Sint est sint pariatur minim ipsum pariatur laborum nulla est.",
      desc:
        "Sit officia enim culpa voluptate enim amet. Sunt eiusmod elit sit ipsum. Ad consequat magna cillum ut tempor commodo.",
      readCount: 1390,
    },
    {
      id: 3,
      title:
        "Incididunt duis pariatur aliquip dolore sint officia ea laboris excepteur. Officia sint cupidatat irure occaecat non ut deserunt. Sunt magna enim enim magna proident reprehenderit Lorem occaecat consequat qui. Reprehenderit laboris aute cillum ipsum ea ipsum non irure nulla commodo ipsum. Incididunt quis dolore aute in duis mollit. Consequat occaecat anim proident reprehenderit voluptate sint.",
      desc:
        "Magna eiusmod ex incididunt Lorem ipsum commodo enim id incididunt quis. Ut reprehenderit elit consectetur deserunt est consequat sunt duis elit et et commodo qui. Eiusmod nulla aliqua excepteur Lorem reprehenderit dolor. Eiusmod sunt ut qui non culpa enim quis. Officia consequat cillum labore nulla labore ipsum exercitation ullamco mollit laborum Lorem. Lorem dolore aliquip ea cillum labore duis adipisicing ex sit reprehenderit.",
      readCount: 3420,
    },
    {
      id: 4,
      title:
        "Eiusmod laborum exercitation elit eiusmod dolore sunt incididunt amet nisi minim ea cupidatat mollit.",
      desc:
        "Do culpa ea occaecat pariatur amet magna. Elit culpa id voluptate reprehenderit nulla tempor eu adipisicing mollit. Voluptate magna nisi veniam esse elit. Ex ullamco culpa velit sint ex aute culpa eu ea do laboris non irure.",
      readCount: 230,
    },
  ];
  function loadArticles(readingCount) {
    let articleData = data;
    const articles = document.querySelector("#articles");
    if (readingCount != undefined) {
      articles.innerHTML = "";
      articleData = data.filter((art) => readingCount < art.readCount);
    }
    articleData.forEach((d) => {
      const articleElement = document.createElement("div");
      articleElement.classList.add("article");
      articleElement.innerHTML = `
      <p class="title">${d.title}</p>
      <p>${d.desc}</p>
      <p class="reading_count">Reading: ${d.readCount}</p>
    `;
      articles.appendChild(articleElement);
    });
  }
  function filterArticles() {
    const countValue = document.querySelector("#count_input").value;
    loadArticles(countValue);
  }
  document
    .querySelector("#search_button")
    .addEventListener("click", filterArticles);
  loadArticles();
 
 