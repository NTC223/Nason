import fs from "fs";
import path from "path";

const outputDir = "popup";
const outputPath = path.join(outputDir, "supabase.config.js");

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const content = `
window.SUPABASE_CONFIG = {
  url: "${process.env.SUPABASE_URL}",
  anonKey: "${process.env.SUPABASE_ANON_KEY}"
};
`;

fs.writeFileSync(outputPath, content);
console.log("✅ Generated", outputPath);
