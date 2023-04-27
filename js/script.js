
let total = ""


const redirectToChat = () => {
    window.open("https://api.whatsapp.com/send/?phone=5561983733961&text&type=phone_number&app_absent=0")
}


const sendWpp = (e) => {

    e.preventDefault();

    let nome = document.getElementById('nome').value
    let telefone = document.getElementById('telefone').value
    let email = document.getElementById('email').value
    let tipoAtendimento = document.getElementById('tipoAtendimento').value
    let tipoPaciente = document.getElementById('tipoPaciente').value
    let mensagem = document.getElementById('mensagem').value

    console.log(nome)
    console.log(telefone)
    console.log(email)
    console.log(tipoAtendimento)
    console.log(tipoPaciente)
    console.log(mensagem)


    // total = 
    // `Nome: ${name}\n` +
    // `Telefone: ${phone}\n` +
    // `E-mail: ${email}\n` +
    // `Tipo de atendimento: ${tipoAtendimento==="1"?"Online":"Presencial"}\n` +
    // `Tipo de paciente: ${tipoPaciente==="1"?"Adulto":"Adolescente"}\n` +
    // `Mensagem: ${mensagem}`

    // console.log(total)

    // if(total !== ""){
    //     UseWhatsapp('5561983733961',total)
    //     setTotal("")
    // }
}