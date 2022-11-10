const socket = io()

// DOM Element
let message = document.getElementById('message')
let email = document.getElementById('email')
let btn = document.getElementById('send')
let output = document.getElementById('output')
let actions = document.getElementById('actions')

//Enviar mensaje
btn.addEventListener('click', function(){
    socket.emit('chat:msj', {
        email: email.value,
        message: message.value
    })
})

//Plasmar mensaje en el chat
socket.on('chat:msj', function(data){
    let today = new Date()
    let date = today.toLocaleString();
    actions.innerHTML = ''
    output.innerHTML += `<p>
    <strong>${data.email} </strong><span>[${date}]: </span>
    <em> ${data.message}</em>
</p>`
})