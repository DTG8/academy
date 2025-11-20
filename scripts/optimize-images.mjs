import fs from 'fs'
import path from 'path'
import sharp from 'sharp'

// Run this script from the project root: C:\Users\DELL\OneDrive\academy
// so paths are relative to that directory
const INPUT_DIR = path.resolve('public', 'images')
const OUTPUT_DIR = INPUT_DIR // overwrite in place

const SUPPORTED_EXT = new Set(['.png', '.jpg', '.jpeg'])

async function optimizeImage(filePath) {
  const ext = path.extname(filePath).toLowerCase()
  const fileName = path.basename(filePath)
  // Write to a temporary file first, then replace the original
  const tempOutputPath = path.join(OUTPUT_DIR, `__optimized__${fileName}`)

  try {
    const image = sharp(filePath)

    if (ext === '.png') {
      await image
        .png({
          compressionLevel: 9,
          palette: true,
          quality: 80,
        })
        .toFile(tempOutputPath)
    } else {
      await image
        .jpeg({
          quality: 75,
          mozjpeg: true,
        })
        .toFile(tempOutputPath)
    }

    // Replace original file with optimized one
    fs.renameSync(tempOutputPath, filePath)

    console.log(`Optimized: ${fileName}`)
  } catch (err) {
    // Clean up temp file if something went wrong
    if (fs.existsSync(tempOutputPath)) {
      fs.unlinkSync(tempOutputPath)
    }
    console.error(`Failed to optimize ${fileName}`, err)
  }
}

async function main() {
  if (!fs.existsSync(INPUT_DIR)) {
    console.error(`Images directory not found at: ${INPUT_DIR}`)
    process.exit(1)
  }

  const files = fs.readdirSync(INPUT_DIR)

  const imageFiles = files.filter((file) =>
    SUPPORTED_EXT.has(path.extname(file).toLowerCase())
  )

  if (imageFiles.length === 0) {
    console.log('No PNG/JPEG images found to optimize.')
    return
  }

  console.log(`Optimizing ${imageFiles.length} images in ${INPUT_DIR} ...`)

  for (const file of imageFiles) {
    const fullPath = path.join(INPUT_DIR, file)
    await optimizeImage(fullPath)
  }

  console.log('Image optimization complete.')
}

main().catch((err) => {
  console.error('Unexpected error during image optimization:', err)
  process.exit(1)
})


