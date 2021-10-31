const passport = require('passport');
const db = require('./model')
var GoogleStrategy = require('passport-google-oauth20').Strategy;

const GOOGLE_CLIENT_ID = '189723759039-pumjl11nnkrb0q9hm5m0i0utdua3d9tv.apps.googleusercontent.com'
const GOOGLE_CLIENT_SECRET = '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'

passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:3000/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, cb) {
      console.log(profile.emails[0].value)
      db.findOne({email:profile.emails[0].value},(error, result) =>{ 
          if(result==null){
            db.create({email:profile.emails[0].value},(error, data) =>{
                if(error) {
                    console.log(error);
                }
                else
                return cb(error, data);
                
            })
             
            }
          else
          return cb(error, result);  
        })
      
      
    
  }
));


passport.serializeUser((user,cb) => {
    cb(null, user);
})

passport.deserializeUser((user,cb) => {
    cb(null, user);
})