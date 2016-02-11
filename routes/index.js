var express = require('express');
var router = express.Router();

// DATABASE CONNECTION
var mongoose = require('mongoose');
//var localhost = 'mongodb://localhost/names';
var mongoURI = 'mongodb://<sai-learnhub>:<sachinRock1>@ds061405.mongolab.com:61405/heroku_9nzlstmm' ;
mongoose.connect(mongoURI);

var db = mongoose.connection ;
db.on('error',console.error.bind(console,'connection error: '));
db.once('open',function(){
  console.log('yipeee!! i am connected to database');
});


//SAMPLE QUERY TO INSERT DATA

//define a schema
var courseSchema = mongoose.Schema({
  title:String,
  price:Number,
  type: String,
  category:String,
  description:String,
  rating:Number,
  image:String,
  url:String
});
//create a model = a class equivivalent, it can create new objects
var Course = mongoose.model('course',courseSchema);
//create new objects

//MODEL
var c= new Course({
    "title": "",
    "price": 0,
    "type": "",
    "category": "",
    "description":"",
    "rating":0
});

//WEB
//var c1= new Course({
//    "title": "Web Design with HTML, CSS, JavaScript and jQuery Set 1st Edition",
//    "price": 33.95,
//    "type": "Beginner",
//    "category": "Web",
//    "description": "This two-book set combines the titles HTML & CSS: Designing and Building Web Sites and JavaScript & jQuery: Interactive Front-End Development. Together these two books form an ideal platform for anyone who wants to master HTML and CSS before stepping up to JavaScript and jQuery.HTML & CSS covers structure, text, links, images, tables, forms, useful options, adding style with CSS, fonts, colors, thinking in boxes, styling lists and tables, layouts, grids, and even SEO, Google analytics, ftp, and HTML5. JavaScript & jQuery offers an excellent combined introduction to these two technologies using a clear and simple visual approach using diagrams, infographics, and photographs.",
//    "rating":3.5
//});
//
//var c2= new Course({
//    "title": "Learning Web App Development",
//    "price": 15.25,
//    "type": "Intermediate",
//    "category": "Web",
//    "description": "Grasp the fundamentals of web application development by building a simple database-backed app from scratch, using HTML, JavaScript, and other open source tools. Through hands-on tutorials, this practical guide shows inexperienced web app developers how to create a user interface, write a server, build client-server communication, and use a cloud-based service to deploy the applicationEach chapter includes practice problems, full examples, and mental models of the development workflow. Ideal for a college-level course, this book helps you get started with web app development by providing you with a solid grounding in the process",
//    "rating": 4.3
//});
//
//
//
//var c3= new Course({
//    "title": "Head First HTML and CSS 2nd Edition",
//    "price": 25.0,
//    "type": "Beginner",
//    "category": "Web",
//    "description":"Tired of reading HTML books that only make sense after you're an expert? Then it's about time you picked up Head First HTML and CSS, and really learned HTML. You want to learn HTML so you can finally create those web pages you've always wanted, so you can communicate more effectively with friends, family, fans, and fanatic customers. You also want to do it right so you can actually maintain and expand your web pages over time so they work in all browsers and mobile devices. Oh, and if you've never heard of CSS, that's okay--we won't tell anyone you're still partying like it's 1999--but if you're going to create web pages in the 21st century then you'll want to know and understand CSS.",
//    "rating": 2.0
//});
//
//
//var c4= new Course({
//    "title": "A Smarter Way to Learn JavaScript: The new approach that uses technology to cut your effort in half ",
//    "price": 17.96,
//    "type": "Beginner",
//    "category": "Web",
//    "description":"Written for beginners, useful for experienced developers who want to sharpen their skills and don't mind covering some ground they already know. (Feel free to skip early chapters that cover elementary topics like alerts, variables, and strings). Step-by-step, you learn the fundamentals of JavaScript as well as some advanced concepts including constructors and prototypes.",
//    "rating": 5
//});
//
//var c5= new Course({
//    "title": "Secrets of the JavaScript Ninja 1st Edition",
//    "price": 35,
//    "type": "Advanced",
//    "category": "Web",
//    "description":"Secrets of the JavaScript Ninja leads you down the pathway to JavaScript enlightenment. This unique book starts with key concepts, like the relationships between functions, objects, and closures, taught from the master's perspective. You'll grow from apprentice to ninja as you soak up fresh insights on the techniques you use every day and discover features and capabilities you never knew about. When you reach the final chapters, you'll be ready to code brilliant JavaScript applications and maybe even write your own libraries and frameworks.",
//    "rating":4
//});

//ANDROID
//var c1= new Course({
//    "title": "Android User Interface Design: Implementing Material Design for Developers (2nd Edition) (Usability)",
//    "price": 33.12,
//    "type": "Intermediate",
//    "category": "Android",
//    "description":"In Android User Interface Design, Second Edition, leading Android developer and user experience (UX) advocate Ian G. Clifton shows how to combine exceptional usability and outstanding visual appeal. Clifton helps you build apps that new users can succeed with instantly: apps that leverage users’ previous experience previous experience, reflect platform conventions, and never test their patience. ",
//    "rating":4
//});
//
//var c2= new Course({
//    "title": "Android: App Development & Programming Guide: Learn In A Day!",
//    "price": 16,
//    "type": "Beginner",
//    "category": "Android",
//    "description":"1 Best Seller! - Learn to Program Android Apps - in a Day! 2nd Edition What can this book do for you? Android: Programming Guide: Android App Development - Learn in a Day teaches you everything you need to become an Android App Developer from scratch. It explains how you can get started by installing Android Studio and learning to use the Android SDK Manager. Can you really create an app in just a day? Yes, you can! With Android: Programming Guide: Android App Development - Learn in a Day, you’ll learn to create “OMG Andriod”. This app is similar to the “Hello, World” program that many beginners create when learning new computer languages. Soon, you’ll have your very own app that greets you by name! Can you create an app and try it out on your personal Android device? Absolutely! Android: Programming Guide: Android App Development - Learn in a Day teaches you to run your app on emulators and devices, and how to put personal touches on your app. You’ll learn how to update your apps with the Android SDK Manager, use XML, and add buttons and listeners! There’s so much you can learn from this essential book - order your copy TODAY!",
//    "rating":3.5
//});
//
//var c3= new Course({
//    "title": "Hello, Android: Introducing Google's Mobile Development Platform 4th Edition",
//    "price": 25,
//    "type": "Advanced",
//    "category": "Android",
//    "description":"Getting started developing with Android is easy. You don't even need access to an Android phone, just a computer where you can install the Android SDK and the emulator that comes with it. Within minutes, Hello, Android gets you creating your first working application: Android's version of Hello, World. From there, you'll build up a more substantial example: an Ultimate Tic-Tac-Toe game. By gradually adding features to the game, you'll learn about many aspects of Android programming, such as creating animated user interfaces, playing music and sound effects, building location-based services (including GPS and cell-tower triangulation), and accessing web services. You'll also learn how to publish your applications to the Google Play Store.",
//    "rating":3
//});
//
//var c4= new Course({
//    "title": "Android Cookbook 1st Edition",
//    "price": 40,
//    "type": "Beginner",
//    "category": "Android",
//    "description":"Jump in and build working Android apps with the help of more than 200 tested recipes. With this cookbook, you’ll find solutions for working with the user interfaces, multitouch gestures, location awareness, web services, and device features such as the phone, camera, and accelerometer. You also get useful steps on packaging your app for the Android Market.",
//    "rating":3.7
//});
//
//var c5= new Course({
//    "title": "Android: Programming & App Development For Beginners ",
//    "price": 8,
//    "type": "Beginner",
//    "category": "Android",
//    "description":"In Android: Programming and App Development for Beginners by Samuel Shields, you'll be taken through a step-by-step process on how to get started and create your first Android application. It provides a wealth of resources and tips for becoming a programmer on this fascinating and lucrative platform!",
//    "rating":4.5
//});

// OS
//var c1= new Course({
//    "title": "Operating Systems: Principles and Practice 2nd Edition",
//    "price": 70,
//    "type": "Intermediate",
//    "category": "OS",
//    "description":"Over the past two decades, there has been a huge amount of innovation in both the principles and practice of operating systems Over the same period, the core ideas in a modern operating system - protection, concurrency, virtualization, resource allocation, and reliable storage - have become widely applied throughout computer science. Whether you get a job at Facebook, Google, Microsoft, or any other leading-edge technology company, it is impossible to build resilient, secure, and flexible computer systems without the ability to apply operating systems concepts in a variety of settings. This book examines the both the principles and practice of modern operating systems, taking important, high-level concepts all the way down to the level of working code. Because operating systems concepts are among the most difficult in computer science, this top to bottom approach is the only way to really understand and master this important material.",
//    "rating":4
//});
//
//var c2= new Course({
//    "title": "Operating Systems: Internals and Design Principles (8th Edition)",
//    "price": 150,
//    "type": "Advanced",
//    "category": "OS",
//    "description":"Operating Systems: Internals and Design Principles is intended for use in a one- or two-semester undergraduate course in operating systems for computer science, computer engineering, and electrical engineering majors. It also serves as a useful reference for programmers, systems engineers, network designers and others involved in the design of computer products, information system and computer system personnel",
//    "rating":3.25
//});
//
//var c3= new Course({
//    "title": "Operating System Concepts 9th Edition",
//    "price": 146,
//    "type": "Beginner",
//    "category": "OS",
//    "description":"Operating System Concepts, now in its ninth edition, continues to provide a solid theoretical foundation for understanding operating systems. The ninth edition has been thoroughly updated to include contemporary examples of how operating systems function. The text includes content to bridge the gap between concepts and actual implementations. End-of-chapter problems, exercises, review questions, and programming exercises help to further reinforce important concepts.  A new Virtual Machine provides interactive exercises to help engage students with the material.",
//    "rating":5
//});
//
//var c4= new Course({
//    "title": "Modern Operating Systems (4th Edition) 4th Edition",
//    "price": 156,
//    "type": "Beginner",
//    "category": "OS",
//    "description":"Modern Operating Systems, Fourth Edition, is intended for introductory courses in Operating Systems in Computer Science, Computer Engineering, and Electrical Engineering programs. It also serves as a useful reference for OS professionals",
//    "rating":5
//});
//
//var c5= new Course({
//    "title": "Operating Systems: Three Easy Pieces",
//    "price": 9.99,
//    "type": "Intermediate",
//    "category": "OS",
//    "description":"A book covering the fundamentals of operating systems, including virtualization of the CPU and memory, threads and concurrency, and file and storage systems. Written by professors active in the field for 20 years, this text has been developed in the classrooms of the University of Wisconsin-Madison, and has been used in the instruction of thousands of students.",
//    "rating":4
//});

//SE
var c1= new Course({
    "title": "Beginning Software Engineering 1st Edition",
    "price": 37.99,
    "type": "Beginner",
    "category": "SE",
    "description":"Beginning Software Engineering demystifies the software engineering methodologies and techniques that professional developers use to design and build robust, efficient, and consistently reliable software. Free of jargon and assuming no previous programming, development, or management experience, this accessible guide explains important concepts and techniques that can be applied to any programming language. Each chapter ends with exercises that let you test your understanding and help you elaborate on the chapter's main concepts. Everything you need to understand waterfall, Sashimi, agile, RAD, Scrum, Kanban, Extreme Programming, and many other development models is inside!",
    "rating":3.8
});
var c2= new Course({
    "title": "Software Engineering (10th Edition) 10th Edition",
    "price": 164,
    "type": "Intermediate",
    "category": "SE",
    "description":"Software Engineering introduces readers to the overwhelmingly important subject of software programming and development. In the past few years, computer systems have come to dominate not just our technological growth, but the foundations of our world’s major industries. This text seeks to lay out the fundamental concepts of this huge and continually growing subject area in a clear and comprehensive manner.",
    "rating":3.5
});
var c3= new Course({
    "title": "Soft Skills: The software developer's life manual 1st Edition",
    "price": 33,
    "type": "Beginner",
    "category": "SE",
    "description":"For most software developers, coding is the fun part. The hard bits are dealing with clients, peers, and managers, staying productive, achieving financial security, keeping yourself in shape, and finding true love. This book is here to help.",
    "rating":2
});
var c4= new Course({
    "title": "Software Engineering: A Practitioner's Approach 8th Edition",
    "price": 185,
    "type": "Advanced",
    "category": "SE",
    "description":"The eighth edition of Software Engineering: A Practitioner's Approach has been designed to consolidate and restructure the content introduced over the past two editions of the book. The chapter structure will return to a more linear presentation of software engineering topics with a direct emphasis on the major activities that are part of a generic software process. Content will focus on widely used software engineering methods and will de-emphasize or completely eliminate discussion of secondary methods, tools and techniques. The intent is to provide a more targeted, prescriptive, and focused approach, while attempting to maintain SEPA's reputation as a comprehensive guide to software engineering.",
    "rating":4.2
});
var c5= new Course({
    "title": "Clean Code: A Handbook of Agile Software Craftsmanship 1st Edition",
    "price": 34,
    "type": "Intermediate",
    "category": "SE",
    "description":"Clean Code is divided into three parts. The first describes the principles, patterns, and practices of writing clean code. The second part consists of several case studies of increasing complexity. Each case study is an exercise in cleaning up code—of transforming a code base that has some problems into one that is sound and efficient. The third part is the payoff: a single chapter containing a list of heuristics and “smells” gathered while creating the case studies. The result is a knowledge base that describes the way we think when we write, read, and clean code",
    "rating":3.8
});


c1.save(function (err, c1) {
    if (err) return console.error(err);
    console.log("success");
});


c2.save(function (err, c2) {
    if (err) return console.error(err);
    console.log("success");
});

c3.save(function (err, c3) {
    if (err) return console.error(err);
    console.log("success");
});

c4.save(function (err, c4) {
    if (err) return console.error(err);
    console.log("success");
});
c5.save(function (err, c5) {
    if (err) return console.error(err);
    console.log("success");
});


/* GET home page. */
router.get('/', function(req, res, next) {


   res.render('index', { title: 'Express' });
});

router.get('/books',function(req,res,next){
    Course.find(function (err, courses) {
        if (err) return console.error(err);
        //console.log(courses);
        res.send(courses);
    });

});

router.post('/', function(req, res, next) {
    console.log("this is server:--->"+req.body );
    res.send({feat : 'this is response from serve'});

});


router.post('/rand', function(req, res, next) {
    console.log(req.body);
    var newBook = new Course(req.body);
    newBook.save(function (err, data) {
      if (err) return console.error(err);
      console.log("save success") ;
    });

      res.send({feat : 'this is response from serve'});

});

module.exports = router;
