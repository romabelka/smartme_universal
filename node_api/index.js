var Express = require('express');
var app = new Express();

app.get('/articles', function (req, res) {
    res.json([
        {
            title: "Main article",
            text: "Lorem Ipsum",
            id: 1
        }, {
            title: "Another article",
            text: "Another Lorem Ipsum",
            id: 2
        }])
})

app.listen(3030, function () {
    console.log('---', 'node API listen on port 3030');
});