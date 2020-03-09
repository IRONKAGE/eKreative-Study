// app.METHOD(PATH, HANDLER)
    // app - екземплятор express.
    // METHOD - метод запиту HTTP.
        // https://uk.wikipedia.org/wiki/HTTP
    // PATH - шлях на сервер.
    // HANDLER - функція маршруту

var express = require('express');

var app = express();

var articles = [];

var comments = [];

// шлях марщрутизації для статей
app.get('/articles', function (request, response){
    var articleTitle = request.param('articleTitle');
    if (articleTitle){
        articles.forEach((item) => {
            if (item.articleTitle === articleTitle){
                response.send(item);
                return;
            };
        });
    };
    response.send(articles);
})

// шлях марщрутизації для коментування
app.post('/articles', function (request, response){
    var articleTitle = request.param('articleTitle');
    var articleBody = request.param('articleBody');
    if (articleTitle && articleBody){
        articles.push({
            articleTitle,
            articleBody
        });
    }else{
        response.res.status(500).json('о ні, помилка статей');
    }
    response.send(articles);
});

app.get('comments', function (request, response){
    var commentName = request.param('commentName');
    if (commentName){
        comments.forEach((item) => {
            if (item.commentName === commentName){
                response.send(item);
                return;
            };
        });
    };
    response.send(comments);
})

// шлях марщрутизації для коментування
app.post('/comments', function (request, response){
    var commentID = request.param('commentID');
    var commentName = request.param('commentName');
    var commentBody = request.param(commentBody);
    if (commentID && commentName && commentBody){
        comments.push({
            commentID,
            commentName,
            commentBody
        });
    }else{
        response.res.status(500).json('о ні, помилка у коментарях');
    }
    response.send(comments);
});

// шлях марщрутизації для привітання
app.get('/', function (request, response){
    var user = 'Невідомий кочівник';
    var userFromRequest = request.param('user');
    if (userFromRequest){
        user = userFromRequest;
    }
    response.send('Привіт Світе!' + ' та ' + user);
})

// шлях марщрутизації для тестової сторінки
app.get('/test*', function (request, response){
    response.send('Привіт тест');
})

// шлях марщрутизації для публікацій
app.get('/post/', function (request, response){
    response.send(JSON.stringify(
        [
            {name: 'Роман', message: 'Тіло коментаря Романа'},
            {name: 'Олег', message: 'Тіло коментаря Олега'},
            {name: 'Даниїл', message: 'Тіло коментаря Даниїла'}
        ]
    ));
})

// шлях марщрутизації для сервера
app.listen(3000, "localhost", function(){
    console.log('Сервер запустився на хості: localhost, port: 3000');
})