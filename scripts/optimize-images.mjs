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
  const baseName = path.basename(filePath, ext)

  // Write to temporary files first
  const tempOptimizedPath = path.join(OUTPUT_DIR, `__optimized__${fileName}`)
  const tempWebpPath = path.join(OUTPUT_DIR, `__optimized__${baseName}.webp`)
  const finalWebpPath = path.join(OUTPUT_DIR, `${baseName}.webp`)

  try {
    const image = sharp(filePath)

    // 1) Re-compress original format (PNG/JPEG)
    if (ext === '.png') {
      await image
        .png({
          compressionLevel: 9,
          palette: true,
          quality: 70,
        })
        .toFile(tempOptimizedPath)
    } else {
      await image
        .jpeg({
          quality: 70,
          mozjpeg: true,
        })
        .toFile(tempOptimizedPath)
    }

    // 2) Create a WebP version (usually smaller)
    await image
      .webp({
        quality: 65,
      })
      .toFile(tempWebpPath)

    // Replace original file with optimized one
    fs.renameSync(tempOptimizedPath, filePath)
    // Move WebP into place
    fs.renameSync(tempWebpPath, finalWebpPath)

    console.log(`Optimized: ${fileName} + ${baseName}.webp`)
  } catch (err) {
    // Clean up temp files if something went wrong
    if (fs.existsSync(tempOptimizedPath)) {
      fs.unlinkSync(tempOptimizedPath)
    }
    if (fs.existsSync(tempWebpPath)) {
      fs.unlinkSync(tempWebpPath)
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


