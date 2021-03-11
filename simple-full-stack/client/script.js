function render() {
    const apiURL = "http://localhost:4000/characters";
    fetch(apiURL)
        .then(function (response) {
            return response.json();
        })
        .then(renderCharacters);

    function renderCharacters(characters) {
        const container = document.getElementById('characters');
        container.innerHTML = '';
        const list = document.createElement('ol');

        characters.forEach((character) => {
            const entry = document.createElement('li');
            const image = document.createElement('img');
            image.src = character.image;
            entry.innerHTML = character.name;
            entry.appendChild(image);
            list.appendChild(entry);
        })

        container.appendChild(list);
    }
}
render();
setInterval(render, 4000);