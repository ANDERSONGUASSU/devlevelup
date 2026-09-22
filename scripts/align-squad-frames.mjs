/* global console, URL */
/**
 * Alinha os frames idle do squad num canvas comum por role:
 * - baseline dos pés numa linha fixa (BASELINE_Y)
 * - centro horizontal no meio do canvas
 * Sobrescreve os PNGs in-place. Requer ImageMagick (`convert`) no PATH.
 * Uso: node scripts/align-squad-frames.mjs
 */

import { execFileSync } from 'node:child_process'
import { readdirSync } from 'node:fs'
import { basename, join } from 'node:path'

const ROOT = new URL('..', import.meta.url).pathname
const SQUAD_DIR = join(ROOT, 'public/images/avatar-squad')
const ROLES = ['developer', 'product_manager', 'qa', 'ux_ui_designer']
const TARGET_H = 724
const BASELINE_Y = 704
const MARGIN = 40

function trimBox(file) {
  const out = execFileSync(
    'convert',
    [file, '-trim', '-format', '%w %h %X %Y', 'info:'],
    { encoding: 'utf8' },
  ).trim()
  const [w, h, x, y] = out.split(/\s+/).map(Number)
  return { w, h, x, y }
}

for (const role of ROLES) {
  const dir = join(SQUAD_DIR, role)
  const files = readdirSync(dir)
    .filter((f) => f.endsWith('.png'))
    .sort()
  const boxes = files.map((file) => ({
    file: join(dir, file),
    ...trimBox(join(dir, file)),
  }))
  const targetW = Math.max(...boxes.map((b) => b.w)) + MARGIN * 2
  const centerX = Math.round(targetW / 2)

  for (const box of boxes) {
    const dx = centerX - Math.round(box.x + box.w / 2)
    const dy = BASELINE_Y - (box.y + box.h)
    execFileSync('convert', [
      '-size',
      `${targetW}x${TARGET_H}`,
      'xc:none',
      box.file,
      '-geometry',
      `+${dx}+${dy}`,
      '-composite',
      box.file,
    ])
    console.log(
      `${role}/${basename(box.file)} -> ${targetW}x${TARGET_H} +${dx}+${dy}`,
    )
  }
}
