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
        console.log(childArray[index][i + 1])
        let li = document.createElement("li");
        li.innerHTML = `<a onmouseover="showGrandChildList(${index})" href=${childArray[index][i]}>${childArray[index][i + 1]}</a>`;
        ul.appendChild(li);
    } 
    childDiv.appendChild(ul);
}

function showGrandChildList(index) {
    let grandChildDiv = document.getElementById("grandChild_div");
    grandChildDiv.style.display = "block"
}