#!/usr/bin/env node
/**
 * Local admin save server
 * Runs alongside `pnpm dev` to enable saving products from /admin page.
 *
 * Usage: node scripts/admin-server.mjs
 *   or:  pnpm admin
 */

import { readFileSync, writeFileSync } from "fs";
import { createServer } from "http";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const PRODUCTS_FILE = resolve(__dirname, "../src/data/products/products.json");
const PORT = 3099;

function cors(res) {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3021");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
}

const server = createServer((req, res) => {
  cors(res);

  // Handle preflight
  if (req.method === "OPTIONS") {
    res.writeHead(204);
    res.end();
    return;
  }

  // GET /products — return current products
  if (req.method === "GET" && req.url === "/products") {
    try {
      const data = readFileSync(PRODUCTS_FILE, "utf-8");
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(data);
    } catch (err) {
      res.writeHead(500, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ error: err.message }));
    }
    return;
  }

  // POST /products — save products
  if (req.method === "POST" && req.url === "/products") {
    let body = "";
    req.on("data", (chunk) => (body += chunk));
    req.on("end", () => {
      try {
        const products = JSON.parse(body);
        if (!Array.isArray(products)) {
          throw new Error("Expected an array");
        }

        // Validate basic structure
        for (const p of products) {
          if (!p.slug || !p.name || !p.category) {
            throw new Error(`Invalid product: missing slug/name/category in "${p.name || p.slug || "?"}"`);
          }
        }

        const formatted = JSON.stringify(products, null, 2);
        writeFileSync(PRODUCTS_FILE, formatted, "utf-8");

        console.log(`  💾 Saved ${products.length} products`);
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ ok: true, count: products.length }));
      } catch (err) {
        console.error(`  ❌ Save error: ${err.message}`);
        res.writeHead(400, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ error: err.message }));
      }
    });
    return;
  }

  // Health check
  if (req.method === "GET" && req.url === "/health") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ ok: true }));
    return;
  }

  res.writeHead(404);
  res.end("Not found");
});

server.listen(PORT, "127.0.0.1", () => {
  console.log(`\n🍊 칼로링 어드민 서버 실행중`);
  console.log(`   http://localhost:${PORT}`);
  console.log(`   저장 대상: ${PRODUCTS_FILE}\n`);
});
