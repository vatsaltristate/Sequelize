const express = require('express');
const bodyParser = require('body-parser');
const model = require ('./models');
const AddD = require ('./controller/student.controller.js');

const app = express();

app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
res.send(" kese h app ?")
})

app.get('/add', AddD.AddS );

app.get('/find', AddD.find );

app.get('/data', AddD.gsv );

app.get('/validation', AddD.vc );

app.get('/query', AddD.raw );


app.listen(4000, (err) => {
    if (err) {
        console.log(err);
        return;
}
console.log('Listening on port 4000');
});

