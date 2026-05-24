
const fs = require("fs");
const path = require("path");

const components = ["src/components/header.html", "src/components/footer.html", "src/components/head.html"];
components.forEach(file => {
    let content = fs.readFileSync(file, "utf8");
    content = content.replace(/href="\/src\//g, `href="{{base}}/src/`);
    content = content.replace(/href="\/index\.html/g, `href="{{base}}/index.html`);
    content = content.replace(/src="\/assets\//g, `src="{{base}}/assets/`);
    content = content.replace(/href="\/assets\//g, `href="{{base}}/assets/`);
    fs.writeFileSync(file, content);
});

const pages = [
    { file: "index.html", base: "." },
    { file: "404.html", base: "." },
    { file: "src/pages/about-us/index.html", base: "../.." },
    { file: "src/pages/lathes/index.html", base: "../.." },
    { file: "src/pages/parts-equipment/index.html", base: "../.." },
    { file: "src/pages/tool-heads/index.html", base: "../.." },
    { file: "src/pages/contact/index.html", base: "../.." },
    { file: "src/pages/legal/index.html", base: "../.." },
    { file: "src/pages/downloads/index.html", base: "../.." }
];

pages.forEach(p => {
    if (!fs.existsSync(p.file)) return;
    let content = fs.readFileSync(p.file, "utf8");
    content = content.replace(/href="\/src\//g, `href="${p.base}/src/`);
    content = content.replace(/href="\/index\.html/g, `href="${p.base}/index.html`);
    // NOTE: Vite handles image paths reasonably well if they are relative.
    content = content.replace(/src="\/assets\//g, `src="${p.base}/assets/`);
    content = content.replace(/href="\/assets\//g, `href="${p.base}/assets/`);
    fs.writeFileSync(p.file, content);
});

console.log("Done fixing links.");

