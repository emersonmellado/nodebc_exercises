function clickMe(){
    alert("I clicked a button");
}

const button = document.querySelector('button');

//First syntax (the one in the material)
//button.onclick = clickMe;

//Second syntax
// button.addEventListener('click', clickMe);
// button.addEventListener('dblclick', clickMe);
button.addEventListener('mouseenter', clickMe);


const kitten = document.querySelector('img');
kitten.addEventListener('mouseenter', clickMe);