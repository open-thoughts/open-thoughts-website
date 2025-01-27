import { readFileSync } from 'fs'
import path from 'path'

export function getIntroContent() {
  const filePath = path.join(process.cwd(), 'app', 'intro.mdx')
  const fileContent = readFileSync(filePath, 'utf8')
  return fileContent
} 