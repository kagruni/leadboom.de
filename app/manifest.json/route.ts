import { SITE_CONFIG } from '@/lib/seo-config'

export function GET() {
  const manifest = {
    name: SITE_CONFIG.name,
    short_name: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    start_url: '/',
    display: 'standalone',
    background_color: '#000000',
    theme_color: '#7c3aed',
    orientation: 'portrait-primary',
    icons: [
      {
        src: '/favicon.ico',
        sizes: '64x64 32x32 24x24 16x16',
        type: 'image/x-icon',
      },
      {
        src: '/icon-192x192.png',
        type: 'image/png',
        sizes: '192x192',
      },
      {
        src: '/icon-256x256.png',
        type: 'image/png',
        sizes: '256x256',
      },
      {
        src: '/icon-384x384.png',
        type: 'image/png',
        sizes: '384x384',
      },
      {
        src: '/icon-512x512.png',
        type: 'image/png',
        sizes: '512x512',
      },
    ],
    categories: ['business', 'productivity', 'utilities'],
    lang: 'de',
    dir: 'ltr',
  }

  return new Response(JSON.stringify(manifest, null, 2), {
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400'
    }
  })
}