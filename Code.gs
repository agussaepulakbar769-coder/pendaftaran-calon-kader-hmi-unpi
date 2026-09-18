function doGet() {
  return ContentService.createTextOutput("Formulir HMI UNPI aktif.");
}

// Google Apps Script — template penerima data untuk Google Sheets
// Buat Google Sheet baru → Extensions → Apps Script → tempel kode ini.
// Deploy → New deployment → Web app → Execute as Me → Anyone.
// CATAT URL Web App yang diberikan.
//
// CATATAN: template ini menerima data teks/form. Untuk upload file,
// diperlukan penyimpanan file (mis. Google Drive) dan kode tambahan.

function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
  const data = e.parameter || {};
  const headers = [
    "Timestamp","Nama","Panggilan","NIM","Prodi","Fakultas","Angkatan",
    "Jenis Kelamin","Tempat Lahir","Tanggal Lahir","Alamat","WhatsApp","Email",
    "Instagram","Kontak Darurat","Pernah Organisasi","Nama Organisasi",
    "Jabatan","Lama Aktif","Pengalaman","Alasan HMI","Pengetahuan HMI",
    "Harapan","Kontribusi","Minat","Skill","Detail Skill","Kesiapan Kaderisasi",
    "LK1","Kegiatan Luar Kuliah","Ketersediaan Waktu","Kendala","Sumber Informasi",
    "Referensi","Status"
  ];

  if (sheet.getLastRow() === 0) sheet.appendRow(headers);

  const row = [
    new Date(), data.nama||"", data.panggilan||"", data.nim||"", data.prodi||"",
    data.fakultas||"", data.angkatan||"", data.gender||"", data.tempat_lahir||"",
    data.tanggal_lahir||"", data.alamat||"", data.whatsapp||"", data.email||"",
    data.instagram||"", data.kontak_darurat||"", data.pernah_organisasi||"",
    data.nama_organisasi||"", data.jabatan||"", data.lama_aktif||"",
    data.pengalaman||"", data.alasan_hmi||"", data.pengetahuan_hmi||"",
    data.harapan||"", data.kontribusi||"", data.minat||"", data.skill||"",
    data.skill_detail||"", data.bersedia_kaderisasi||"", data.lk1||"",
    data.luar_kuliah||"", data.waktu||"", data.kendala||"", data.sumber||"",
    data.referensi||"", "Menunggu"
  ];

  sheet.appendRow(row);
  return ContentService.createTextOutput(
    JSON.stringify({ok:true,message:"Pendaftaran diterima"})
  ).setMimeType(ContentService.MimeType.JSON);
}