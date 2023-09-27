let btn = document.getElementById('btn');
let liste = document.getElementById('liste');
let texte = document.getElementById('texte');

btn.addEventListener('click', function () {

    var paragraph = document.createElement('p');
    paragraph.classList.add('.paragraph-styling');
    paragraph.innerText = texte.value;
    liste.appendChild(paragraph);
    texte.value = "";
    paragraph.addEventListener('click', function () {
        paragraph.style.textDecoration = "line-through";
    })
    paragraph.addEventListener('dblclick', function () {
        liste.removeChild(paragraph);
    })
    
})

