import fs from "node:fs"
import path from "node:path"

const root = process.cwd()
const indexPath = path.join(root, "index.html")
const mainPath = path.join(root, "src", "main.jsx")

console.log("VERIFY cwd:", root)
console.log("VERIFY index.html exists:", fs.existsSync(indexPath))
console.log("VERIFY src main.jsx exists:", fs.existsSync(mainPath))

if (fs.existsSync(indexPath)) {
  const html = fs.readFileSync(indexPath, "utf8")
  console.log("VERIFY index.html contains src main.jsx:", html.includes("src/main.jsx"))
}

if (fs.existsSync(path.join(root, "src"))) {
  console.log("VERIFY src listing:", fs.readdirSync(path.join(root, "src")))
} else {
  console.log("VERIFY no src folder found")
}

