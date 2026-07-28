// Ikon daun sederhana (garis/line-art), dipilih berdasarkan field "icon" di data.js
const ICONS = {
  "leaf-round": `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
    <path d="M32 56C14 50 8 32 14 16 20 4 44 4 50 16 56 32 50 50 32 56Z"/>
    <path d="M32 56V16"/>
  </svg>`,
  "leaf-wide": `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 40C10 20 26 8 56 8 54 34 40 50 8 40Z"/>
    <path d="M8 40 34 20"/>
  </svg>`,
  "leaf-layer": `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
    <path d="M32 58V10"/>
    <path d="M32 18 12 26"/><path d="M32 18 52 26"/>
    <path d="M32 32 10 40"/><path d="M32 32 54 40"/>
    <path d="M32 46 14 52"/><path d="M32 46 50 52"/>
  </svg>`,
  "leaf-palm": `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
    <path d="M32 58V26"/>
    <path d="M32 26C20 20 10 20 6 12"/>
    <path d="M32 26C22 24 12 28 6 24"/>
    <path d="M32 26C24 30 16 40 12 42"/>
    <path d="M32 26C44 20 54 20 58 12"/>
    <path d="M32 26C42 24 52 28 58 24"/>
    <path d="M32 26C40 30 48 40 52 42"/>
  </svg>`,
  "leaf-needle": `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" xmlns="http://www.w3.org/2000/svg">
    <path d="M32 58V6"/>
    <path d="M32 12 20 20"/><path d="M32 12 44 20"/>
    <path d="M32 22 18 30"/><path d="M32 22 46 30"/>
    <path d="M32 32 16 40"/><path d="M32 32 48 40"/>
    <path d="M32 42 20 50"/><path d="M32 42 44 50"/>
  </svg>`
};

function getIcon(key){
  return ICONS[key] || ICONS["leaf-round"];
}

// Ikon logo utama di header (badge lingkaran + daun + barcode kecil)
const BRAND_MARK = `<svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
  <circle cx="20" cy="20" r="19" fill="none" stroke="#1F2E22" stroke-width="1.6"/>
  <path d="M20 30C13 27 10 19 13 12 16 6 26 6 28 12 31 19 27 27 20 30Z" fill="none" stroke="#3F5B41" stroke-width="1.8"/>
  <path d="M20 30V12" stroke="#3F5B41" stroke-width="1.8"/>
  <g stroke="#C98A2C" stroke-width="1.3">
    <line x1="12" y1="33" x2="12" y2="37"/>
    <line x1="15" y1="33" x2="15" y2="37"/>
    <line x1="17" y1="33" x2="17" y2="37"/>
    <line x1="20" y1="33" x2="20" y2="37"/>
    <line x1="23" y1="33" x2="23" y2="37"/>
    <line x1="26" y1="33" x2="26" y2="37"/>
    <line x1="28" y1="33" x2="28" y2="37"/>
  </g>
</svg>`;

// Ilustrasi besar untuk halaman detail (pola cabang generik)
const SHEET_ILLUSTRATION = `<svg viewBox="0 0 120 140" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M60 132V70"/>
  <path d="M60 92 30 66"/><path d="M60 92 90 66"/>
  <path d="M60 70 20 40"/><path d="M60 70 100 40"/>
  <path d="M60 50 40 18"/><path d="M60 50 80 18"/>
  <circle cx="20" cy="40" r="4"/><circle cx="100" cy="40" r="4"/>
  <circle cx="40" cy="18" r="4"/><circle cx="80" cy="18" r="4"/>
  <circle cx="30" cy="66" r="4"/><circle cx="90" cy="66" r="4"/>
</svg>`;

// Menormalkan field "manfaat" — bisa berupa string tunggal atau array,
// supaya tampilannya tetap konsisten meski format data berbeda-beda.
function normalizeList(value){
  if(!value) return [];
  return Array.isArray(value) ? value : [value];
}
