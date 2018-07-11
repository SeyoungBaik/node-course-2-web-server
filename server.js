
const express = require('express');
const hbs = require('hbs');


var app = express();

app.set('view engine', 'hbs'); 
app.use(express.static(__dirname + '/public')); //이줄의 의미는 ????? 

app.get('/',(req,res)=>{
    //res.send('<h1>hello Express and Seyoung</h1>');

    res.send({
        name : "Seouyng",
        likes : [
            'Biking',
            'Cities'
        ]
    });
});

app.get('/about',(req,res)=>{
    res.render('about.hbs', {
    pageTitle: 'About Page', 
    currentYear: new Date().getFullYear()
    
    });

});

app.get('/bad',(req,res)=>{
    res.send({
        errorMessage: ' Fuck ... unable'
    });
})

//app.listen(8081);

app.listen(8081, ()=> {
    console.log('Server is up on port 8081');
});