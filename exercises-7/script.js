const figlet = require("figlet");

figlet("Hello world,", function (err, dat) {
  if (err) {
    console.log("ERRORE");
    console.dir(err);
    return;
  }
  console.log(dat);
});
