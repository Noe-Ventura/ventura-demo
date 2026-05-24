
const fs = require("fs");
let content = fs.readFileSync("src/components/bento-card.html", "utf8");
content = content.replace(/href="\/src\//g, `href="{{base}}/src/`);
fs.writeFileSync("src/components/bento-card.html", content);

