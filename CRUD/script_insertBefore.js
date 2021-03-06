const paragraph = document.createElement('p');
const paragraph2 = document.createElement('p');
const div = document.createElement('div');
const header = document.getElementById('header');
const paragraph_one = document.getElementById('paragraph_one');

paragraph.innerText = 'Adding some text as content';
paragraph2.innerText = 'MORE content';
paragraph.setAttribute('id', 'my-paragraph');

paragraph.style.fontWeight = 'bold';
paragraph.style.color = 'green';

div.style.border = '1px solid gray';

document.body.insertBefore(paragraph2, paragraph_one);
div.appendChild(paragraph);

document.body.appendChild(div);