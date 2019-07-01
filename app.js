let express = require('express');
let app = express();

app.get('/', (request, response) => {
    response.render('home.ejs');
});

app.get('/test', (request, response) => {
    response.render('./test.html');
});

app.get('*', (request, repsonse) => {
    response.status(404);
    repsonse.send('404 page not found');
});

app.listen(8080, () => {
    console.log('Server started....');
});