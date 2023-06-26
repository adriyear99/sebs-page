
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