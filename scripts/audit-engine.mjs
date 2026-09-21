import { readFile, readdir } from 'node:fs/promises'
import { resolve } from 'node:path'

const root = resolve(import.meta.dirname, '..', 'src', 'engine')
const forbidden = [/japatech/i, /japa tech/i, /whatsapp/i, /taguatinga/i, /bras[ií]lia/i, /assist[eê]ncia/i, /conserto/i, /reparo/i, /notebook/i, /televis[aã]o/i, /\.com\.br/i, /wa\.me/i]
const files = []
async function walk(directory) { for (const entry of await readdir(directory, { withFileTypes: true })) { const path = resolve(directory, entry.name); if (entry.isDirectory()) await walk(path); else files.push(path) } }
await walk(root)
const findings = []
for (const file of files) { const source = await readFile(file, 'utf8'); source.split('\n').forEach((line, index) => { for (const pattern of forbidden) if (pattern.test(line)) findings.push(`${file}:${index + 1}: ${line.trim()}`) }) }
if (findings.length) { console.error('Engine contamination findings:\n' + findings.join('\n')); process.exitCode = 1 } else console.log(`Engine audit passed: ${files.length} files scanned; no consumer-domain markers found.`)
