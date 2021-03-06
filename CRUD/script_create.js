const paragraph = document.createElement('p');
const div = document.createElement('div');

paragraph.innerText = 'Adding some text as content';

div.appendChild(paragraph);

document.body.appendChild(div);
/*
---
line 1 and 2:
<p></p>
<div></div>

line 4:
<p>Adding some text as content</p>
<div></div>

line 6:
<div><p>Adding some text as content</p></div>

line 8:
<body>
    <h1>Hello everyone!</h1>
    <p id="paragraph_one">Now we are using a live server</p>  
    <div><p>Adding some text as content</p></div>
</body>
*/