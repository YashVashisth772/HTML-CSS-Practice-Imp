/* Different ways to access nth child of an element */

// const body = document.querySelectorAll('h1')[1];
// body.style.backgroundColor = "red";

/*  ________________________2nd way_____________________*/

// const body = document.querySelector('h1:nth-child(2)') /* it will select 2nd child*/
// body.style.backgroundColor = "red";

/*_________________________________________*/

// const body = document.body;
// const div = document.createElement('div');
// body.append(div);
// const strong = document.createElement('strong');
// div.append(strong);
// strong.innerText = 'Hi I am Strong'

// const para = document.querySelector('p');
// para.innerHTML = "<strong>Hi I am changed para</strong>"

/** Removing Elements */

// const body = document.body;
// const div = document.querySelector('div');

// div.remove();
/* ________________________________________________*/

// Modifying Element Attributes //
// div.getAttribute('id');
// div.setAttribute('id','01');
// div.removeAttribute('id');
/*__________________________________________________*/
// console.log('qs',document.querySelector('.as'));
// let a =document.getElementById('asId');
let a =document.getElementsByClassName('as');

a[2].style.backgroundColor = "red"
console.log(a);