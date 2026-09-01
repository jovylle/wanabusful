#!/usr/bin/env node
// build-hub.js — validate data/tools.json contract
const fs = require('fs'), path = require('path');
const root = path.resolve(__dirname, '..');
const data = JSON.parse(fs.readFileSync(path.join(root,'data/tools.json'),'utf8'));
let ok = true;
for(const t of data){
  if(!t.slug||!t.title||!t.href){ console.error('missing fields', t); ok=false; }
  if(t.href.startsWith('./tools/')){
    const p = path.join(root, t.href.replace('./',''), 'index.html');
    if(!fs.existsSync(p)){ console.warn(`warn: ${t.slug} href ${t.href} has no index.html at ${p}`); }
  }
}
const slugs = data.map(d=>d.slug);
if(new Set(slugs).size !== slugs.length){ console.error('duplicate slugs'); ok=false; }
console.log(`${data.length} tools — ${ok?'OK':'FAIL'}`);
process.exit(ok?0:1);
