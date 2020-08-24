// EXAMIN THE DOCUMENT OBJECT
// console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// // document.title = 123;
// console.log(document.title);
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// // document.all[10].textContent = "Hello";
// console.log(document.forms);
// console.log(document.forms[0]);
// console.log(document.links);
// console.log(document.images);


// SELECTORS 

// ****document.getElementById()
// ****document.getElementsByClassName()
// ****document.getElementsByTagName()
// ***document.querySelector()
// ****document.querySelectorAll()


// 1) GETELEMENTBYID 
// console.log(document.getElementById('header-title'));
let headerTitle = document.getElementById('header-title');
let header = document.getElementById('main-header');
// console.log(headerTitle);
// *****headerTitle.textContent = "Hello"; 
// *****headerTitle.innerText = "Goodbye";
// *****headerTitle.innerHTML = '<h3>Hello</h3>'

// CSS STYLE WITH DOM
headerTitle.style.borderBottom = "solid 3px #000"
header.style.borderBottom = "solid 3px #000"

// 2) GETELEMENTBYCLASSNAME
let items = document.getElementsByClassName("list-group-item");
console.log(items);
console.log(items[1]);
items[1].textContent = 'Hello 2';
items[1].style.fontWeight = "bold";
items[1].style.backgroundColor = 'yellow'
for (let i = 0; i < items.length; i++) {

    items[i].style.backgroundColor = '#f4f4f4'

}

// 3) GETELEMENTBYTAGNAME

let li = document.getElementsByTagName("li");
console.log(li);
console.log(li[1]);
li[1].textContent = 'Hello 2';
li[1].style.fontWeight = "bold";
li[1].style.backgroundColor = 'yellow'
for (let i = 0; i < li.length; i++) {

    li[i].style.backgroundColor = '#f4f4f4'

}


// 4) QUERYSELECTOR
let header1 = document.querySelector("#main-header");
header1.style.borderTop = "solid 4px yellow";
let input = document.querySelector("input");
input.value = "Hello World"

let submint = document.querySelector('input[type="submit"]');
submint.value = "SEND";

let item = document.querySelector(".list-group-item");
item.style.color = "red";

let lastItem = document.querySelector(".list-group-item:last-child");
lastItem.style.color = "green";

let secodItem = document.querySelector(".list-group-item:nth-child(2)");
secodItem.style.color = "blue"

//  5) QUERYSELECTORALL

let titles = document.querySelectorAll('.title')
console.log(titles);
titles[0].textContent = "Hello";

let odd = document.querySelectorAll("li:nth-child(odd)");
let even = document.querySelectorAll("li:nth-child(even)");
for (let j = 0; j < odd.length; j++) {
    odd[j].style.backgroundColor = 'white'
    even[j].style.backgroundColor = 'yellow'


}







