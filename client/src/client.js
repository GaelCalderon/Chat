const net = require('net');
const express = require('express');

const servidor = {
    port: 4000,
    host: 'localhost'
};

const client = net.createConnection(servidor);

client.on('connect', () => {
    console.log('Conexión satisfactoria');
});

client.on('data', (data) => {
    console.log('El servidor dice: ' + data);
    updateTextarea(data.toString());
});

client.on('error', (err) => {
    console.log(err.message);
});

function sendLine() {
    var messageInput = document.getElementById('mensaje');
    var messageTextarea = document.getElementById('floatingTextarea2');

    var line = messageInput.value;
    if (line === '0') {
        client.end();
    } else {
        client.write(line);
    }
}

function updateTextarea(message) {
    const messageTextarea = document.getElementById('floatingTextarea2');
    messageTextarea.value += 'El servidor dice: ' + message + '\n';  
}
