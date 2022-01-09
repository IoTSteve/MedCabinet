const socket = io('ws://192.168.178.32:8080');

let testarray = ['peter', 2, 3]

socket.on('message', text => {

    const el = document.createElement('li');
    el.innerHTML = text;
    document.querySelector('ul').appendChild(el)

});

document.getElementById('snd').onclick = () => {

    //const text = document.querySelector('input').value;
    //socket.emit('message', text)
    
    socket.emit('message', testarray)
    
}

// Regular Websockets

// const socket = new WebSocket('ws://localhost:8080');

// // Listen for messages
// socket.onmessage = ({ data }) => {
//     console.log('Message from server ', data);
// };

// document.querySelector('button').onclick = () => {
//     socket.send('hello');
// }