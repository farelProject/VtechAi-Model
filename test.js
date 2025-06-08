const VtechAi = require("./index");

VtechAi({ message: "Halo, apa kabar?", user: "Rina" })
  .then(console.log)
  .catch(console.error);
