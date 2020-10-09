
  const colors=["red","blue","grey","yellow","pink"];
  const button=document.querySelector("#randomColorButton");
  button.addEventListener("click",changeBackgroundColor);
  function changeBackgroundColor() {
    const randomIndex=Math.floor(Math.random()*colors.length);
    document.body.style.backgroundColor=colors[randomIndex];
    document.querySelector("#colorName").textContent
=  colors[randomIndex];  
  }

  /////
//   const users = [
//     { id: 0, name: "Jack", interests: ["books", "sports", "movies"] },
//     { id: 1, name: "Jim", interests: ["fitness", "sports", "movies"] },
//     { id: 2, name: "Joe", interests: ["cats", "swimming", "movies"] },
//     { id: 3, name: "Zoe", interests: ["cars"] },
//     { id: 4, name: "Liv", interests: ["cats, movies"] },
//   ];
//   const friends=[];
// function findMutuals(x) {
//   const friends=x.filter(y=>
//     y.id===0 && y.id===1)
//   console.log(friends); 
//   x.forEach(item=>{
//     friends.push(item.name)

//   })
 
// }
// findMutuals(users)
//   console.log(friends);
 