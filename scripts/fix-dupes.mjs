import { readFileSync, writeFileSync } from 'fs';

const filePath = './src/data/products/products.json';
const data = JSON.parse(readFileSync(filePath, 'utf8'));

// Find and fix duplicate slugs by appending naverProductId suffix
const slugCount = {};
data.forEach(p => {
  slugCount[p.slug] = (slugCount[p.slug] || 0) + 1;
});

const slugIndex = {};
let fixed = 0;
data.forEach(p => {
  if (slugCount[p.slug] > 1) {
    slugIndex[p.slug] = (slugIndex[p.slug] || 0) + 1;
    if (slugIndex[p.slug] > 1) {
      // Append last 3 digits of naverProductId to make unique
      const suffix = String(p.naverProductId).slice(-3);
      const oldSlug = p.slug;
      p.slug = `${oldSlug}-${suffix}`;
      console.log(`Fixed: ${oldSlug} -> ${p.slug} (${p.name.slice(0, 30)})`);
      fixed++;
    }
  }
});

console.log(`\nFixed ${fixed} duplicate slugs`);
writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
console.log('Saved to', filePath);
