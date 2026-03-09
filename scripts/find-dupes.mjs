import { readFileSync } from 'fs';
const data = JSON.parse(readFileSync('./src/data/products/products.json', 'utf8'));
const slugs = data.map(p => p.slug);
const seen = new Set();
const dupes = new Set();
slugs.forEach(s => { if (seen.has(s)) dupes.add(s); seen.add(s); });
console.log('Total:', data.length, '| Duplicate slugs:', dupes.size);
dupes.forEach(s => {
  const items = data.filter(p => p.slug === s);
  console.log(`\n${s} (x${items.length}):`);
  items.forEach((p, i) => console.log(`  [${i}] ${p.name} | naverId: ${p.naverProductId}`));
});
