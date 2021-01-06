const fs = require("fs-extra")
const path = require("path")

const __dir_pkgs = path.resolve(__dirname, "..", "packages")
const vueVersion = require("../package.json").dependencies.vue

function replateVersion(path){
  fs.writeFileSync(path,
    fs.readFileSync(path, "utf-8")
    .replace(/"vue": "\^[0-9]\.[0-9]\.[0-9].*"/, (s0, s1) => `"vue": "${vueVersion}"`)
  )
}

// packages
fs.readdirSync(__dir_pkgs).forEach(package => {
  const pkgPath = path.resolve(__dir_pkgs, package, "package.json")
  replateVersion(pkgPath)
})

// gc.js
const __gc_dir = path.resolve(__dirname, "gc.js")
replateVersion(__gc_dir)
