
let total = ""


const redirectToChat = () => {
    window.open("https://api.whatsapp.com/send/?phone=5561983733961")
}


const sendWpp = () => {

    let nome = document.getElementById('nome').value
    let telefone = document.getElementById('telefone').value
    let mensagem = document.getElementById('mensagem').value

    total = 
    `Nome: ${nome}%0a` +
    `Telefone: ${telefone}%0a` +
    `Mensagem: ${mensagem}`

    window.open(`https://api.whatsapp.com/send/?phone=5561983733961&text=${total}`,'_system')
}

// impedir mudança na url
scroll = (id) => {
    const access = document.getElementById(id)
    access.scrollIntoView({behavior: 'smooth'}, true)
}