const axios = require('axios');

const githubPayload = {
  ref: 'refs/heads/main',
};

axios.post('http://localhost:3000/events', githubPayload)
  .then(response => {
    console.log(`Servidor respondió: ${response.data}`);
  })
  .catch(error => {
    console.error('Error al enviar la solicitud:', error);
  });


//celda de prueba