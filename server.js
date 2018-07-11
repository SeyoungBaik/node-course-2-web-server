
const express = require('express');
const hbs = require('hbs');
const fs = require('fs');

const port = process.env.PORT || 8081; 

var app = express();


hbs.registerHelper('getCurrentYear', ()=> {
    return new Date().getFullYear()
});


//hbs.registerPartials(__dirname + ' /views/partials/footer');
app.set('view engine', 'hbs'); 
app.use(express.static(__dirname + '/public')); //이줄의 의미는 ????? 


//Middleware 
app.use((req,res,next) => {
    var now = new Date().toString();


   var log = `${now}: ${req.method} ${req.url}`
   
   console.log(log);
   fs.appendFile('server.log', log + '\n', (err) => {
       if (err){
           console.log('UNABLE to append to server.log');
       }
   })
   next();
})


/*
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
*/

app.get('/about',(req,res)=>{
    res.render('about.hbs', {
    pageTitle: 'Aboutttt Page', 
   // currentYear: new Date().getFullYear()
    
    });

});

app.get('/',(req,res)=>{
    res.render('home.hbs', {
    pageTitle: 'Home page',
    welcomeMessage : 'Welcome to my website',
   // currentYear: new Date().getFullYear()
    });
}); 

app.get('/bad',(req,res)=>{
    res.send({
        errorMessage: ' Fuck ... unable'
    });
})


app.get('/projects', (req,res)=>{
    res.render('projects.hbs', {
        pageTitle: 'Projects'
    })
})

//app.listen(8081);

app.listen(8081, ()=> {
    console.log(`Server is up on port ${port}`);
});