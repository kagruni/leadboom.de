# Static Deployment Guide

This Next.js project has been configured for static export and will generate static HTML files in the `/out` folder.

## Build Process

To generate static files, run:

```bash
npm run build
```

This will create an `/out` directory containing all static files.

## What's Generated

The build process creates:
- Static HTML pages for all routes
- Minified CSS and JavaScript files in `_next/static/`
- All public assets (images, manifest.json, robots.txt, sitemap.xml)
- Proper folder structure for each route

## Deployment Options

### 1. Web Server (Apache/Nginx)
Upload the entire `/out` folder contents to your web server document root.

### 2. CDN/Static Hosting
Services like:
- Vercel
- Netlify  
- AWS S3 + CloudFront
- GitHub Pages

### 3. cPanel File Manager
1. Build the project locally: `npm run build`
2. Compress the `/out` folder contents
3. Upload to your cPanel File Manager
4. Extract files to `public_html` or desired directory

## Configuration Details

The project has been configured with:
- `output: 'export'` for static generation
- `images.unoptimized: true` for static image handling
- `trailingSlash: true` for consistent routing
- Static robots.txt and manifest.json files
- All API routes configured with `dynamic = 'force-static'`

## Performance Optimizations

The generated static files include:
- Minified HTML, CSS, and JavaScript
- Optimized asset loading
- Proper caching headers (configure at server level)
- Code splitting for optimal loading

## File Structure

```
/out/
├── index.html          # Homepage
├── manifest.json       # PWA manifest
├── robots.txt         # SEO robots file
├── sitemap.xml        # Search engine sitemap
├── _next/             # Optimized assets
│   └── static/
├── kontakt/           # Contact page
├── ueber-uns/         # About page
├── leistungen/        # Services page
├── preise/           # Pricing page
└── ... (all routes)
```

## Notes

- Headers configuration has been moved to server level (not supported in static export)
- All dynamic routes have been pre-rendered
- The website is now fully static and can be hosted on any web server