import sharp from 'sharp'
import { readdir, stat } from 'fs/promises'
import { join, basename, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const imgDir = join(__dirname, '..', 'public', 'images')

const files = await readdir(imgDir)
const pngs = files.filter(f => f.endsWith('.png'))

if (pngs.length === 0) {
  console.log('No PNG files found.')
  process.exit(0)
}

for (const file of pngs) {
  const input = join(imgDir, file)
  const name = basename(file, '.png')
  const outWebP = join(imgDir, `${name}.webp`)

  await sharp(input)
    .webp({ quality: 88, effort: 6 })
    .toFile(outWebP)

  const { size: sizePNG  } = await stat(input)
  const { size: sizeWebP } = await stat(outWebP)
  const saved = (((sizePNG - sizeWebP) / sizePNG) * 100).toFixed(1)

  console.log(`✓ ${file} → ${name}.webp  (${(sizePNG/1024).toFixed(0)}KB → ${(sizeWebP/1024).toFixed(0)}KB, -${saved}%)`)
}
