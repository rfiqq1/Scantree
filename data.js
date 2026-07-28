// =========================================================
// DATA POHON — SCAN TREE
// =========================================================
// Cara menambah pohon baru: copy salah satu blok { ... } di
// bawah, tempel di akhir array, lalu ganti isinya.
// "id" HARUS unik karena ini yang dipakai di barcode/QR.
// =========================================================

const DATA_POHON = [
  {
    id: "ST-001",
    nama_lokal: "Pinus",
    nama_ilmiah: "Pinus Merkusii",
    famili: "Pinaceae",
    icon: "leaf-needle",
    tinggi_perkiraan: "8 meter",
    deskripsi: "Pinus merupakan pohon berdaun jarum yang tumbuh tegak dengan batang lurus dan kulit batang berwarna cokelat keabu-abuan. Tajuk berbentuk kerucut saat muda dan menjadi lebih membulat seiring pertumbuhan. Daunnya tersusun berpasangan berbentuk jarum, sedangkan buahnya berupa strobilus (runjung). Pohon ini banyak ditanam di daerah pegunungan dan memiliki kemampuan adaptasi yang baik pada tanah berdrainase baik.",
    manfaat:"Menghasilkan getah pinus sebagai bahan baku gondorukem dan terpentin, kayunya dimanfaatkan untuk konstruksi ringan, mebel, pulp dan kertas, serta berfungsi sebagai tanaman konservasi untuk mencegah erosi, menjaga tata air, menyerap karbon, dan mendukung ekowisata."
  },
  {
    id: "ST-002",
    nama_lokal: "Alpukat",
    nama_ilmiah: "Persea Americana",
    famili: "Lauraceae",
    icon: "round",
    tinggi_perkiraan: "7 meter",
    deskripsi: "Alpukat merupakan pohon buah tahunan yang memiliki batang berkayu dengan tajuk rimbun dan daun berbentuk lonjong berwarna hijau mengilap. Bunganya berukuran kecil berwarna hijau kekuningan, sedangkan buahnya berbentuk bulat hingga lonjong dengan kulit berwarna hijau atau ungu kehitaman saat matang. Tanaman ini tumbuh baik di daerah dataran rendah hingga dataran tinggi dengan drainase tanah yang baik.",
    manfaat: ["Buah alpukat kaya akan lemak tak jenuh, vitamin A, C, E, K, serta kalium yang bermanfaat bagi kesehatan jantung dan tubuh. Daunnya dapat dimanfaatkan sebagai bahan pengobatan tradisional, sementara pohonnya berfungsi sebagai tanaman peneduh, penghijauan, penyerap karbon, serta memiliki nilai ekonomi tinggi sebagai komoditas hortikultura."],
    fakta_menarik: "Akar gantung beringin lama-kelamaan bisa menebal dan menyerupai batang tambahan."
  }
];