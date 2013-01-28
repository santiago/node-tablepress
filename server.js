var products= [
    { id: "0", name:"Zebrano", code: "tp-0170", thumb_image: "zebrano-thumbs.jpg", zoom_image:"zebrano-1.jpg" },
    { id: "1", name:"Wengue", code: "tp-0160", thumb_image: "wengue-thumbs.jpg", zoom_image:"wengue-1.jpg" },
    { id: "2", name:"Roble negro", code: "tp-0140", thumb_image: "roble negro-thumbs.jpg", zoom_image:"roble negro-1.jpg" },
    { id: "3", name:"Roble gris", code: "tp-0130", thumb_image: "roble gris-thumbs.jpg", zoom_image:"roble gris-1.jpg" },
    // { id: "4", name:"Roble blanco mallado", code: "tp-0120", thumb_image: "roble-blanco-mallado-peque.png", zoom_image:"roble-blanco-mallado-zoom.png" },
    { id: "5", name:"Nogal mallado", code: "tp-0110", thumb_image: "nogal mallado-thumbs.jpg", zoom_image:"nogal mallado-1.jpg" },
    { id: "6", name:"Roble blanco catedral", code: "tp-0180", thumb_image: "roble blanco catedral-thumbs.jpg", zoom_image:"roble blanco catedral-1.jpg" },
    { id: "7", name:"Teka", code: "tp-0190", thumb_image: "teka-thumbs.jpg", zoom_image:"teka-1.jpg" }
    // { id: "8", name:"Ébano", code: "", thumb_image: "ebano-peque.jpg", zoom_image:"ebano-1.jpg" }
]

/**
 * Module dependencies.
 */

var express = require('express');
var stylus = require('stylus');
var app = express();

// Configuration
function compile(str, path) {
    return stylus(str)
	.set('filename', path)
    // .set('compress', true);
}


app.configure(function(){
    this.set('views', __dirname + '/views');
    this.set('view engine', 'jade');
    this.set('view options', { layout: 'layout' })
    this.use(express.bodyParser());
    this.use(express.logger());
    this.use(express.methodOverride());
    this.use(express.cookieParser());
    this.use(express.session({secret: 'Eah4tfzGAKhr'}));
    this.use(stylus.middleware({
	src: __dirname + '/views'
	, dest: __dirname + '/public'
	, compile: compile
    }));
    this.use(express.favicon(__dirname + '/public/favicon.ico', { maxAge: 2592000000}));
    this.use(express.static(__dirname + '/public'));
    // Keep this as last one
    this.use(this.router);
});


app.configure('development', function(){
    app.use(express.errorHandler({ dumpExceptions: true, showStack: true })); 
});

app.configure('production', function(){
  app.use(express.errorHandler());
});

app.get('/', function(req, res){
    res.render('inicio', {
	    article: 'inicio'
    });
});

app.get('/empresa', function(req, res){
    res.render('empresa', {
	    article: 'empresa'
    });
});

app.get('/beneficios', function(req, res){
    res.render('beneficios', {
	    article: 'beneficios'
    });
});

app.get('/contacto', function(req, res){
    res.render('contacto', {
	    article: 'contactenos'
    });
});

app.get('/productos', function(req, res){
    res.render('chapilla', {
	    article: 'productos',
	    products: products
    });
});

app.get('/productos/chapilla', function(req, res){
    res.render('chapilla', {
	    article: 'productos',
	    products: products
    });
});

app.get('/productos/tableros', function(req, res){
    res.render('tableros', {
	    article: 'productos'
    });
});

app.get('/productos/cantos', function(req, res){
    res.render('cantos', {
	    article: 'productos'
    });
});

app.get('/productos/formipress', function(req, res){
    res.render('formipress', {
        article: 'formipress'
    });
});

app.get('/productos/acrilpress', function(req, res){
    res.render('acrilpress', {
        article: 'acrilpress'
    });
});

// Only listen on $ node app.js
if (!module.parent) {
    app.listen(3030);
    console.log("Express server listening on port %d", 3030)
}
