const express = require('express');
const app = express();
const port = 3000
const simpleGit = require('simple-git')();

app.use(express.json());

app.post('/events', (req, res) => {
    const payload = req.body;

    if (payload && payload.ref && payload.ref.startsWith('refs/heads/')) {
      const branch = payload.ref.split('/').pop(); //nombre rama
      console.log(`Webhook received for branch: ${branch}`);
      
      simpleGit.cwd('C:/Users/ar_ri/Documents/api').pull('origin', 'main', (err, update) => {
        if (err) {
          console.error('Error during pull:', err);

        } else {

          if (update && update.summary.changes) {
            console.log('Pull successful. Changes detected.');

          } else {
            console.log('No changes after pull.');
            
          } 
        }
      });
      
    } else {
      console.log('Webhook received for a non-branch event');
    }
    res.status(200).send('Webhook received successfully');
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
