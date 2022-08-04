const path = require("path");
const fs = require("fs");
const merge = require("deepmerge");

const allowedFRW = ["bigcommerce", "shopify", "shopify_local"]
const FALLBACK_FW = "shopify";

function withFrameworkConfig(defaultConfig = {}) {
  let framework = defaultConfig?.framework?.name;

  if (!framework) {
    throw new Error("The API framewor is missing.")
  }
  
  if (!allowedFRW.includes(framework)) {
    throw new Error(`The frame work ${framework} cannot be found.`)
  }

  if (framework === 'shopify_local') {
    framework = FALLBACK_FW
  }

  const frameworkNextConfig = require(path.join(
    "../",
    framework,
    "next.config"
  ));
  const config = merge(defaultConfig, frameworkNextConfig);

  const tsPath = path.join(process.cwd(), "tsconfig.json");
  const tsConfig = require(tsPath);

  tsConfig.compilerOptions.paths["@framework"] = [`framework/${framework}`];
  tsConfig.compilerOptions.paths["@framework/*"] = [`framework/${framework}/*`];

  fs.writeFileSync(tsPath, JSON.stringify(tsConfig, null, 2));

  return config;
}

module.exports = { withFrameworkConfig };
