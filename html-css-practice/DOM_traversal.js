// let grandparent = document.getElementById("grandparent_id");

/* changing colors of divs */

// let val = Array.from(grandparent.children)
// val.forEach(changeColor)

// let parents = Array.from(document.getElementsByClassName('parent'))
// parents.forEach(changeColor)

// let childs = Array.from(document.getElementsByClassName('child'));
// childs.forEach(changeColor);

function changeColor(element) {
    element.style.backgroundColor = '#ababab';
}
/*_______________________________________________________________*/

// let parent = document.querySelector(".parent")
// parent.style.backgroundColor = '#ababab'

// let parent = document.querySelector("div > div")
// console.log('parent',parent);

/* querySelectorAll() */ 

// let parent= document.querySelectorAll('.child');
// parent[1].style.backgroundColor = "pink"

// let x = document.querySelectorAll("p");
// x[2].style.backgroundColor = "red";
/* _________________________________________________________________*/
/* Selecting Parents from child(going upward) *  */
// const childOne = document.querySelector("#child_one");
// const parent = childOne.parentElement;
// const grandParent = parent.parentElement;
// changeColor(parent);

/* _________selecting Sibling__________________________________________ */

const childOne = document.querySelector('#child_one');
const childTwo = childOne.nextElementSibling;

// changeColor(childTwo);
changeColor(childTwo.previousElementSibling); /* selects previous sibling */