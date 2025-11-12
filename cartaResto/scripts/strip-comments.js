#!/usr/bin/env node
const fs = require('fs')
const path = require('path')

const root = path.resolve(__dirname, '..')
const backupDir = path.join(root, '.comments_backup')

function ensureDir(dir){ if(!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true }) }

ensureDir(backupDir)

const exts = ['.js', '.jsx', '.ts', '.tsx', '.css', '.html']

function shouldProcess(file){
  const rel = path.relative(root, file)
  if(rel.startsWith('node_modules') || rel.startsWith('.git') || rel.startsWith('public')) return false
  return exts.includes(path.extname(file))
}

function walk(dir){
  const entries = fs.readdirSync(dir, { withFileTypes: true })
  for(const e of entries){
    const full = path.join(dir, e.name)
    if(e.isDirectory()){
      if(['node_modules','.git','.comments_backup','dist'].includes(e.name)) continue
      walk(full)
    } else if(shouldProcess(full)){
      processFile(full)
    }
  }
}

function processFile(file){
  const src = fs.readFileSync(file, 'utf8')
  let out = src

  // Remove block comments /* */
  out = out.replace(/\/\*[\s\S]*?\*\//g, '')

  // Remove HTML comments <!-- -->
  out = out.replace(/<!--([\s\S]*?)-->/g, '')

  // Remove // comments but avoid protocol patterns like http:// or https:// (negative lookbehind for :)
  out = out.replace(/(?<!:)\/\/.*$/gm, '')

  if(out !== src){
    const rel = path.relative(root, file)
    const backupPath = path.join(backupDir, rel + '.bak')
    ensureDir(path.dirname(backupPath))
    fs.writeFileSync(backupPath, src, 'utf8')
    fs.writeFileSync(file, out, 'utf8')
    console.log('Stripped comments:', rel)
  }
}

walk(root)
console.log('Done. Backups in .comments_backup')
