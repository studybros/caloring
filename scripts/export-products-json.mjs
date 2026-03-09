#!/usr/bin/env node
/**
 * One-time script: extract products array from index.ts → products.json
 */
import { readFileSync, writeFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const tsFile = resolve(__dirname, "../src/data/products/index.ts");
const jsonFile = resolve(__dirname, "../src/data/products/products.json");

const source = readFileSync(tsFile, "utf-8");

// Extract the array content - find "= [" to skip "Product[]"
const assignIdx = source.indexOf("= [");
const startIdx = assignIdx + 2; // position of "["
const endIdx = source.lastIndexOf("];");
const arrayContent = source.substring(startIdx, endIdx + 1);

// Convert TS object literals to valid JSON:
// 1. Add quotes to property names
// 2. Remove trailing commas before } or ]
// 3. Handle single-line comments

let json = arrayContent
  // Remove single-line comments
  .replace(/\/\/[^\n]*/g, "")
  // Quote unquoted property keys
  .replace(/(\s+)(\w+)(\s*:\s*)/g, '$1"$2"$3')
  // Fix trailing commas before } or ]
  .replace(/,(\s*[}\]])/g, "$1")
  // undefined → null
  .replace(/undefined/g, "null");

try {
  const data = JSON.parse(json);
  writeFileSync(jsonFile, JSON.stringify(data, null, 2), "utf-8");
  console.log(`✅ ${data.length} products exported to products.json`);
} catch (err) {
  // Debug: write intermediate result
  writeFileSync(jsonFile + ".debug", json, "utf-8");
  console.error("JSON parse error:", err.message);
  process.exit(1);
}
