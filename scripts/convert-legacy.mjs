import { readFile, writeFile, unlink } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const sourcePath = path.join(root, 'src', 'legacyMarkup.html')
const targetPath = path.join(root, 'src', 'LegacyMarkup.jsx')

const source = await readFile(sourcePath, 'utf8')
const converted = source
  .replace(/class=/gi, 'className=')
  .replace(/onclick="([^"]+)"/gi, 'onClick={() => $1}')
  .replace(/<!--/g, '{/*')
  .replace(/-->/g, '*/}')

const component = `export default function LegacyMarkup({
  setSlide,
  filterProjects,
  openVideoModal,
  prefillProject,
  toggleMobileMenu,
  closeMobileMenu,
  openProjectDetails,
}) {
  return (
    <>
${converted}
    </>
  )
}
`

await writeFile(targetPath, component, 'utf8')
await unlink(sourcePath)
console.log(`Converted ${sourcePath} to ${targetPath}`)
