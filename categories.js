function showCategoriesList() {
    let parentDiv = document.getElementById("parent_div");
    parentDiv.style.display = "block"
}
let childArray = [
    ["#", "Web development", "#", "Data Science", "#", "Mobile Development",
    "#", "Programming Languages","#", "Game Development",
    "#", "Database Design & Development","#", "Software Testing",
    "#", "Software Engineering", "#", "Development Tools",
    "#", "No-Code Development"]
  ];
function showChildList(index) {
    let childDiv = document.getElementById("child_div");
    childDiv.style.display = "block"
    childDiv.innerHTML = null;
    let ul = document.createElement("ul");
    for (let i = 0; i < childArray[index].length; i += 2){
        let li = document.createElement("li");
        li.innerHTML = `<a  onmouseover="showGrandChildList(${index},${i / 2})" href=${childArray[index][i]}>${childArray[index][i + 1]}</a>`;
        ul.appendChild(li);
    } 
    childDiv.appendChild(ul);
}

let grandChildArray = [[["#", "JavaScript", "#", "React", "#", "css",
    "#", "Angular","#", "Django",
    "#", "PHP","#", "Node.js","#","Wordpress"],["#","Python","#","Machine learning","#","Deep learning","#","Data Analysis","#","Artificial Intelligence","#","R(programming language)","#","TensorFlow","#","Statistics"]]];
function showGrandChildList(childIndex, grandChildIndex) {
    // console.log(grandChildArray[childIndex][grandChildIndex], childIndex, grandChildIndex);
    let grandChildDiv = document.getElementById("grandChild_div");
    grandChildDiv.style.display = "block";
    grandChildDiv.innerHTML = null;
    let ul = document.createElement("ul");
    for (let i = 0; i < grandChildArray[childIndex][grandChildIndex].length; i += 2){
        // console.log(grandChildArray[childIndex][grandChildIndex][i + 1], i);
        
        let li = document.createElement("li");
        li.innerHTML = `<a href=${grandChildArray[childIndex][grandChildIndex][i]}>${grandChildArray[childIndex][grandChildIndex][i + 1]}</a>`;
        ul.appendChild(li);
    }
    let h3 = document.createElement("h3");
    h3.textContent = "Popular topics";

    grandChildDiv.appendChild(h3);
    grandChildDiv.appendChild(ul);
}
/* function disableDisplayParent() {
    let parentDiv = document.getElementById("parent_div");
    parentDiv.style.display = "none";
} */

/* function disableDisplayChild() {
    let childDiv = document.getElementById("child_div");
    childDiv.style.display = "none";
}

function disableDisplayGrandChild() {
    let grandChildDiv = document.getElementById("grandChild_div");
    grandChildDiv.style.display = "none";
} */