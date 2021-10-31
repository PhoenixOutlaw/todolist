const express = require('express');
const passport = require('passport');
const session = require('express-session')
const mongoose = require('mongoose')
const db = require('./model')
require('./auth')


const app = express();
const port = process.env.PORT || 3000;


//db connect
const connetion_url="mongodb+srv://admin:UBM4OC5fMxrf8PNY@cluster0.jjnq3.mongodb.net/Todo?retryWrites=true&w=majority"

mongoose.connect(connetion_url,(error, db) => {
    if (error) {console.log('unable to connect: ')}
    else console.log('connected')
})
///middlewares

app.use(session({ secret: "cats" }));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.json());

function isloggedin(req, res, next) {
    req.user?next():res.sendStatus(401)
}

/////api endpoints

app.get('/',(req, res) => {
    res.send("<button> <a href='/auth'>press</a> </button>")
})
app.get('/auth',passport.authenticate('google',{scope:['email','profile']}))
app.get('/auth/google/callback', passport.authenticate('google',{ successRedirect:'/home',failRedirect:'/auth/fail'}))

   
app.get('/home',isloggedin,(req, res) => {
    console.log(req.user)
    res.send(req.user)
})
app.get('/auth/fail',(req, res)=>{
    res.send('failed to login')
})
app.get('/logout',(req, res) => {
    req.logOut()
    req.session.destroy()
    res.send('logged out')
})

// app.post('/add',(req, res) => {
//         const re= req.body;
  app.post('/temp',(req, res) => {
      const re = req.body;
      console.log(re)
      db.create(re,(error,response) => {
          if (error) {res.send(error)}
          else res.send("added")
      })
  })  

  app.post('/addtodo',(req, res) => {
      const re = req.body;
      console.log(re)
      db.updateOne({email:re.email},{$push:{todolist:{todo:re.todo}}},(error,response)=>{
          if (error) {res.send(error)}
          else res.send("added")
      })
    //   db.findOne({email:re.email},(error,response)=>{
    //       if (error) {res.send(error)}
    //       else if(response) {
    //         //  db.create({todo:response.todo},(error,response)=>{
    //         //      if (error) {res.send(error)}
    //         //      else res.send("added")
    //         //  })
            
    //         }
    //       else res.send("not found")
    //   })
  })

app.listen(port,() => {console.log("listening on port " + port)});