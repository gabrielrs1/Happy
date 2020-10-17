// const { orphanages } = require("../../src/pages");

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
    popupAnchor: [170, 2]
})

function addMarker({id, name, lat, lng}) {
    // create popup overlay
    const popup = L.popup({
        closeButton: false,
        className: 'map-popup',
        minWidth: 240,
        minHeight: 240
    }).setContent(`${name} <a href="/orphanage?id=${id}" class="choose-orphanage"> <img src="/images/arrow-white.svg"> </a>`)

    // create and add marker
    L
    .marker([lat, lng], { icon })
    .addTo(mymap)
    .bindPopup(popup)
}

const orphanagesSpan = document.querySelectorAll('.orphanages span')
orphanagesSpan.forEach((orphanageElement) => {
    const orphanage = {
        id: orphanageElement.dataset.id, // dataset representa o data do html
        name: orphanageElement.dataset.name,
        lat: orphanageElement.dataset.lat,
        lng: orphanageElement.dataset.lng
    }

    addMarker(orphanage)
})