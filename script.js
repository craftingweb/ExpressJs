const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded());

app.use("/add-product", (req, res, next) => {
  res.send(`
    <form action="/product" method="POST">
      <input type="text" name="title" />
      <button type="submit">Add</button>
    </form>`);
});

app.use("/product", (req, res, next) => {
  console.log(req.body);

  res.redirect("/");
});
app.use("/", (req, res, next) => {
  res.send("<h1>Hello from Express</h1>");
  //res.status(404).send("Page not found");
});

// app.use("/a", (req, res, next) => {
//   res.status(404).send("Page not found");
// });

app.listen(3000);
/*                        Express
Like we wrote in NodeJS Server Logic is very complex.
Main goal to focuss on Business Logic of our application but not on microlevel details how to build it and we use framework for this (heavy lifting). Framework is helper that have tools that help us to build our application. 
--save   will install in dependency;; it will be used after we ship to production (it will be integral part of website, once it live)
--save-dev    will install in dev dependecy (devdependecy is what we need to create that website, they won't need once website is live, there fore they won't ship to production)
-g will install globally in your computer and will be available everywhere in your computer.
const express = require("express");
Now we can create express application and stored in a const app by running express as a function ~ const app = express();
inside of require("express") is a function, therefore we use this syntex express(); and this will initialize a new object where Express Js framework will store and manage a lot of things behind a scene. So it will be a lot of logic inside of this const app; Therefore app happen to be request handler in const server = html.createServer(app); you can pass app here to create sever 
npm init ---- to create package.json and now we can install any dependencies in that package.json
                    Middleware
ExpressJs is all about middleware. In the end it means that incoming request is automatically funneled through a bunch of functions.
To start we go bellow app object ~ const app = express(); and before we pass it to createServer ~ const server = http.createServer(app); 
Then we can use method at app.use() Use allow us to add a new middleware function and we simply pass function to it ()=>{} ~app.use(()=>{}) and this will be executed in every incoming request and this function receive 3 arguments ~app.use((req,res,next)=>{}) next is function that will be pass into arguments as it is now and it will be executed and it will allow req to travel next middleware 
npm install nodemon will watch fo any changes is like live Server, instead of everytime to Ctrl C the sever after any changes it will do it automatically
"scripts": {"start": "nodemon script.js" script.js is name of any file that you need to run command node script.js
we nee to put next() to allow request to travel to another middleware in line (it goes from top to bottom) if we won't call next it wont execute. 
res.send() sent method allow us to sent response, therefore allow us to attach body 
app.listen(3000);
We can add status code for response: res.status(404).send("Page not found");
home url '/' has to be below another routes like '/about'
                Parsing body of form
Be default we can not read body of form (get value) so we need install parser and initiated before another routes, because parsing should happen no matter where request ends up. 
npm install --save body-parser
const bodyParser = require("body-parser")
app.use(bodyParser.urlencoded()); It will add middleware which will parse form body and it also automatically has next option so it will pass it down to the routes.
{ title: 'book2' }
*/
