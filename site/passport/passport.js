const db = require('./database/models/User');
var config = require('./config')
var FacebookStrategy = require('passport-facebook').Strategy

module.exports = function(passport){

    passport.serializeUser(function(user, done){
        done(null, user)
    });

    passport.deserializeUser(function(obj, done){
        done(null, obj)
    });

    passport.use(new FacebookStrategy({
        clientID: config.facebook.id,
        clientSecret: config.facebook.secret,
        callbackURL: '/auth/facebook/callback',
        profileFields: ['id', 'emails', 'displayName', 'picture']
    }, function(accessToken, refreshToken, profile, done){
        db.Users.findOne({id : profile.id}, function(err, user){
            if(err) throw(err);
            if(!err && user!= null) return done(null, user);
            else{
            var newUser = new db.Users({
                nombre: profile.displayName,
                //apellido: profile.displayLastName,
                email: 'facebook',
                avatar: profile.photos[0].value,
                rol:"user"
            });
            newUser.save(function(err){
                if(err) throw err;
                return done(null, user)
            })
        }
        })
    }
    
    ))
}