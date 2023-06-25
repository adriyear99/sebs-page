
let total = ""


const redirectToChat = () => {
    window.open("https://api.whatsapp.com/send/?phone=5561983733961&text&type=phone_number&app_absent=0")
}


const sendWpp = (e) => {

    e.preventDefault();

    let nome = document.getElementById('nome').value
    let telefone = document.getElementById('telefone').value
    let mensagem = document.getElementById('mensagem').value

    total = 
    `Nome: ${nome}%0a` +
    `Telefone: ${telefone}%0a` +
    `Mensagem: ${mensagem}`

    window.open(`https:web.whatsapp.com/send?phone=5561983733961&text=${total}`,"_blank")
}

const initMap = () => {
    const uluru = { lat: -25.344, lng: 131.031 };

    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: uluru,
    });

    const marker = new google.maps.Marker({
        position: uluru,
        map: map,
    });
}

window.initMap = initMap;