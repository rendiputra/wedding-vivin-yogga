export const weddingData = {
  couple: {
    bride: {
      nickname: "Vivin",
      fullName: "Vivin Hanzayani S. Pd",
      parents: "Putri dari Bpk. Merry Ahmadi & Ibu Hadijah",
      instagram: "@vivinhnzy",
      instagramUrl: "https://instagram.com/vivinhnzy",
      photo: "/images/bride.png",
    },
    groom: {
      nickname: "Yogga",
      fullName: "Yogga Alfiansyah S R. S. AP",
      parents: "Putra dari Bpk. Suryani E & Ibu. Endah Sutijiati",
      instagram: "@yoggaalfian_",
      instagramUrl: "https://instagram.com/yoggaalfian_",
      photo: "/images/groom.png",
    },
  },
  event: {
    date: "Minggu, 26 April 2026",
    isoDate: "2026-04-26T08:00:00+07:00",
    mainLocation: "Kediaman Mempelai Wanita",
    address:
      "Graha Prima Blok IF RT 002 RW 011 Desa Satria Jaya, Kec. Tambun Utara, Kab. Bekasi",
    akad: "08.00 WIB",
    resepsi: "10.00 - 17.00 WIB",
    mapsUrl:
      "https://maps.app.goo.gl/Q4xFsH4CGKv7CFCY9",
    mapsEmbed:
      "https://www.openstreetmap.org/export/embed.html?bbox=107.0516338190686%2C-6.226068508613773%2C107.0626338190686%2C-6.215068508613773&layer=mapnik&marker=-6.2205685086137725%2C107.0571338190686",
    // mapsEmbed:
    // "https://www.openstreetmap.org/export/embed.html?bbox=107.0%2C-6.3%2C107.1%2C-6.2&layer=mapnik",
  },
  meta: {
    title: "The Wedding of Vivin & Yogga",
    audio: "/audio/beautiful-in-white.mp3",
    quote:
      "Dan diantara bukti-bukti kebesaran Allah adalah diciptakan-Nya untukmu pasangan hidup dari jenismu sendiri, supaya kamu tentram di sampingnya, dan dijadikan-Nya kasih sayang di antara kamu. Sesungguhnya yang demikian itu menjadi tanda-tanda orang yang berfikir.",
    quoteSource: "QS. Ar-Ruum: 21",
  },
  gallery: [
    { src: "/images/gallery1.jpg", alt: "Pre-wedding photo 1" },
    { src: "/images/gallery2.jpg", alt: "Pre-wedding photo 2" },
    { src: "/images/gallery3.jpg", alt: "Pre-wedding photo 3" },
    { src: "/images/gallery4.jpg", alt: "Pre-wedding photo 4" },
    { src: "/images/gallery5.jpg", alt: "Pre-wedding photo 5" },
    { src: "/images/gallery6.jpg", alt: "Pre-wedding photo 6" },
  ],
} as const;
