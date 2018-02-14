var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles={
'article-one':{
    title:'Article-One',
    heading:'article 1',
    context:`<p>
            This is the content of article-one.This is the content of article-one.This is the conte of article-one.This is the content of article-one.This is the content of article-one.This is the content of article-one.This is the content of article-one.
            </p>
                        <p>
            This is the content of article-one.This is the content of article-one.This is the content of article-one.This is the content of article-one.This is the content of article-one.This is the content of article-one.This is the content of article-one.
            </p>
                        <p>
            This is the content of article-one.This is the content of article-one.This is the content of article-one.This is the content of article-one.This is the content of article-one.This is the content of article-one.This is the content of article-one.
            </p> `
},
'article-two':{
    title:'Article-Two',
    heading:'article 2',
    context:`<p>
            This is the content of article-two.
            </p> `
},
'article-three':{
    title:'Article-Three',
    heading:'article 3',
    context:`<p>
            This is the content of article-three.
            </p> `
}
};
function createtemplate(data){
    title=data.title;
    heading=data.heading;
    context=data.context;
    var htmltemplate=`
    <html>
    <head>
        <title>
            ${title}
        </title>
        <meta name= "viewport" content=" width=device-width initial-scale=1"/>
                <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
        <div class="container">
        <div>
            <a href="/">Home</a>
        </div>
        <hr/>
        <h>
            ${heading}
        </h>
        <div>
           ${context}
        </div>
        </div>
    </body>
</html>`;
return htmltemplate;

}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/index.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/:articlename', function (req, res) {
    var articlename=req.params.articlename;
  res.send(createtemplate(articles[articlename]));
});

app.get('/article-two', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});

app.get('/article-three', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
