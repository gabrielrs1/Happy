// create map
const mymap = L.map('mapid').setView([-27.219004,-49.6426649], 15);

// create and add tileLayer 
L
.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
.addTo(mymap);

// create icon
const icon = L.icon({
    iconUrl: '/images/map-marker.svg',
    iconSize: [58, 68],
    iconAnchor: [29, 68],
})

let marker;

// create and add marker
mymap.on('click', (event) => {
    const lat = event.latlng.lat
    const lng = event.latlng.lng

    document.querySelector('[name=lat]').value = lat
    document.querySelector('[name=lng]').value = lng

    // remove icon
    marker && mymap.removeLayer(marker)

    // add icon layer
    marker = L.marker([lat, lng], { icon })
    .addTo(mymap)
})


// add photo field
function addPhotoField() {
    console.log('a')
    // pegar o container de fotos #images
    const container = document.querySelector('#images')

    // pegar o container para duplicar .new-image
    const fieldsContainers = document.querySelectorAll('.new-upload')

    // realizar o clone da última imagem adicionada
    const newFieldContainer = fieldsContainers[fieldsContainers.length - 1].cloneNode(true)

    // verificar se o campo está vazio, se sim, não adicionar ao container de imagens
    const input = newFieldContainer.children[0]

    if(input.value == '') { // vertificação com return somente, esse bloco para se a condição for verdade
        return
    }
    // limpar o campo anter de adicionar ao container de imagens
    input.value = ''

    // adicionar o clone ao container de #images
    container.appendChild(newFieldContainer)
}

function deleteField(event) {
    const span = event.currentTarget

    const fieldsContainers = document.querySelectorAll('.new-upload')

    if(fieldsContainers.length < 2) {
        // limpar o valor do campo
        span.parentNode.children[0].value = ''
        return
    }

    // deletar o campo
    span.parentNode.remove()
}


// selecionar sim e não
function toggleSelect(event) {
    // retirar a class .active (dos botões)
    document.querySelectorAll('.button-select button')
    .forEach(function(button) {
        button.classList.remove('active')
    })

    // colocar a class .active nesse botão clicado
    const button = event.currentTarget
    button.classList.add('active')

    // atualizar o meu input hidden com o valor selecionado
    const input = document.querySelector('[name="open_on_weekends"]')

    input.value = button.dataset.value
    // verificar se sim ou não
}

// desafio
function validate(event) {
    // validar se lat e lng estão preenchidos
    const lat = document.querySelector('[name=lat]').value
    const lng = document.querySelector('[name=lng]').value

    if(lat == 0 && lng == 0) {
        event.preventDefault()
        alert('Selecione um ponto no mapa')
    }
}