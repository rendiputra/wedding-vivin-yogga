wedding-vivin-yogga/
├── public/                          # Static assets (served as-is)
│   ├── audio/
│   │   └── beautiful-in-white.mp3   # Background music
│   ├── images/
│   │   ├── bride.png                # Foto mempelai wanita
│   │   ├── bride2.png
│   │   ├── bride3.png
│   │   ├── groom.png                # Foto mempelai pria
│   │   ├── groom2.png
│   │   ├── groom3.png
│   │   ├── gallery-1.png            # (placeholder lama)
│   │   ├── gallery1.jpg             # Foto galeri
│   │   ├── gallery2.jpg
│   │   ├── gallery3.jpg
│   │   ├── gallery4.jpg
│   │   ├── gallery5.jpg
│   │   └── gallery6.jpg
│   ├── favicon.ico
│   └── favicon.svg
│
├── src/
│   ├── assets/                      # Processed assets (Astro Image optimization)
│   │   └── gallery/
│   │       ├── gallery1.jpg         # → Auto-converted to WebP at build
│   │       ├── gallery2.jpg
│   │       ├── gallery3.jpg
│   │       ├── gallery4.jpg
│   │       ├── gallery5.jpg
│   │       └── gallery6.jpg
│   │
│   ├── components/                  # Astro components
│   │   ├── AudioControl.astro       # Floating vinyl audio player
│   │   ├── Couple.astro             # Mempelai (bride & groom cards)
│   │   ├── EventDetails.astro       # Akad Nikah & Resepsi
│   │   ├── Footer.astro             # Countdown, quote, closing
│   │   ├── Gallery.astro            # Photo grid + lightbox modal
│   │   ├── Hero.astro               #  Bismillah & greeting
│   │   ├── LocationMap.astro        #  OpenStreetMap + directions
│   │   ├── ScallopSeparator.astro   #  SVG envelope wave border
│   │   ├── SectionContainer.astro   #  Reusable section wrapper
│   │   └── WelcomeOverlay.astro     #  Fullscreen envelope cover
│   │
│   ├── data/
│   │   └── content.ts               #  Wedding data constants
│   │
│   ├── layouts/
│   │   └── Layout.astro             #  Base HTML layout (head, fonts, AOS)
│   │
│   ├── pages/
│   │   └── index.astro              #  Main page (assembles all components)
│   │
│   └── styles/
│       └── global.css               # Tailwind v4 theme + custom CSS
│
├── astro.config.mjs                 # Astro + Tailwind config
├── tsconfig.json                    # TypeScript config
├── package.json                     # Dependencies & scripts
├── package-lock.json
├── PLAN.md                          # Implementation plan
└── README.md