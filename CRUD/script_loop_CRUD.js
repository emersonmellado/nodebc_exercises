function renderElement() {
    //CREATE
    const newDiv = document.createElement('div');
    newDiv.innerHTML = "Hello, I'm a new DIV";
    newDiv.setAttribute('id', 'new-div');
    document.body.appendChild(newDiv);
    //READ -> Is given for free for us :)
    //UPDATE
    setTimeout(() => {
        const updateDiv = document.getElementById('new-div');
        updateDiv.innerHTML = "Hello, I am UPDATED";
    }, 2000);
    //DELETE
    setTimeout(() => {
        const deleteDiv = document.getElementById('new-div');
        document.body.removeChild(deleteDiv);
    }, 4000);
}
renderElement();
setInterval(renderElement, 6000);