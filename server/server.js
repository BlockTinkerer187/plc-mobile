const express = require("express");
const app = express();

const fs = require("fs")
const path = require("path")

// HTTPS Security
const helmet = require("helmet")


function vw(a) {
  if (a) { return "/app/views/" + a} else {console.warn("Function parameter not defined.")}}
// Express Config
app.use(express.static("public"));



// THE *ROUTINATOR*
const directoryPath = "/app/server/routes/"

// Read routing directory
fs.readdir(directoryPath, function (err, files) {
  
if (err) { throw new Error("ROUTINATOR ERR:" + err) } 
  
    // Loop and mount all router files
    files.forEach(function (file) {
      
       var filepath = path.join("/app/server/routes/", file)
        console.log("ROUTINATOR: Mounting [ FILE: " + file + ", FULL DIR: " + filepath + " ]"); 
        var to_require = require(filepath)
        app.use(to_require.mountPath, to_require)
    });
});



// listen for requests :)
const listener = app.listen(process.env.PORT, () => {
  console.log("Server online on port " + listener.address().port);
});
