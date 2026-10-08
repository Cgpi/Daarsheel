import { readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const filePath = path.join(root, 'src', 'LegacyMarkup.jsx')
const sourcePaths = [
  '/images/logo/logo.png',
  '/images/image-01.jpg',
  '/images/image-02.jpg',
  '/images/image-03.jpg',
  '/images/image-04.jpg',
  '/images/image-05.jpg',
  '/images/image-06.jpg',
  '/images/image-08.jpg',
  '/images/image-10.jpg',
  '/images/image-12.jpg',
  '/images/image-14.jpg',
  '/images/image-16.jpg',
  '/images/image-17.jpg',
  '/images/image-18.jpg',
  '/images/image-19.jpg',
  '/images/image-20.jpg',
  '/images/image-21.jpg',
  '/images/logo/logo.png',
]

let content = await readFile(filePath, 'utf8')
const matches = [...content.matchAll(/<img\b[^>]*>/gi)]

if (matches.length !== sourcePaths.length) {
  throw new Error(`Expected ${sourcePaths.length} img elements, found ${matches.length}`)
}

content = content.replace(/<img\b[^>]*>/gi, () => `<img src="${sourcePaths.shift()}" alt="" />`)
await writeFile(filePath, content, 'utf8')
console.log(`Restored ${sourcePaths.length} image sources`)
