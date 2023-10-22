const fs = require("fs");
const { mdToPdf } = require("md-to-pdf");

const mdToPdfProxy = async (from, to) => {
  if (!fs.existsSync(to)) {
    fs.writeFileSync(to, "");
  }

  await mdToPdf({ path: from }, { dest: to }).catch(console.error);
};

(async () => {
  // 00_HTML_CSS_Vorkurs
  await mdToPdfProxy(
    "./was-ist-html.md",
    "./dist/was-ist-html.pdf"
  );
  await mdToPdfProxy(
    "./was-ist-css.md",
    "./dist/was-ist-css.pdf"
  );
})();
