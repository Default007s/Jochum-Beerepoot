let projects = document.querySelector(".projects");
let dropdown = document.querySelector(".dropdown");

projects.onmouseover = () => {
  dropdown.style.display = 'flex';
}

projects.onmouseout = () => {
  dropdown.style.display = 'none';
}

dropdown.onmouseover = () => {
  dropdown.style.display = 'flex';
}

dropdown.onmouseout = () => {
  dropdown.style.display = 'none';
}

let arrowDown = document.querySelector(".arrowDown");
let counter = 0;

arrowDown.onclick = () => {
  if (counter % 2 == 0) {
    dropdown.style.display = 'flex';
  } else{
    dropdown.style.display = 'none';    
  }
  counter += 1;
}

console.log(arrowDown);