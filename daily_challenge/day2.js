
  const colors=["red","blue","grey","yellow","pink"];
  const button=document.querySelector("#randomColorButton");
  button.addEventListener("click",changeBackgroundColor);
  function changeBackgroundColor() {
    const randomIndex=Math.floor(Math.random()*colors.length);
    document.body.style.backgroundColor=colors[randomIndex];
    document.querySelector("#colorName").textContent
=  colors[randomIndex];  
  }
 