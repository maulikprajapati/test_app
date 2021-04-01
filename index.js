const express = require('express');

const app = express();
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

app.get('/', (req,res) => {
    res.send('ok');
});

app.post('/', (req,res) => {
    console.log(req.body);
    res.send('ok');
});

app.listen(3000, () => {
    console.log('app is listening on port 3000');
});