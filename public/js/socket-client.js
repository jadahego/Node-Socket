// referencias html
const lblonline = document.querySelector('#lblonline')
const lbloffline = document.querySelector('#lbloffline')
const txtMensaje = document.querySelector('#txtMensaje')
const btnEnviar  = document.querySelector('#btnEnviar')

const socket = io()


socket.on('connect', () => {
    //console.log('conectado')

    lbloffline.style.display = 'none'
    lblonline.style.display = ''
})

socket.on('disconnect', () => {
    console.log('desconectado')
    
    lblonline.style.display = 'none'
    lbloffline.style.display = ''
})

socket.on('enviar-mensaje', (payload) =>{
    console.log(payload)
})

btnEnviar.addEventListener('click', () => {

    const mensaje = txtMensaje.value;
    const payload = {
        mensaje,
        id: '123',
        fecha: new Date().getTime()
    }

    socket.emit('enviar-mensaje', payload, (id) => {
        console.log('desde el server', id)
    });
})