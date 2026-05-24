
const fs = require("fs");
let content = fs.readFileSync("index.html", "utf8");
content = content.replace(/link="\/src\//g, `link="./src/`);
content = content.replace(/image="\/assets\//g, `image="./assets/`);
fs.writeFileSync("index.html", content);

