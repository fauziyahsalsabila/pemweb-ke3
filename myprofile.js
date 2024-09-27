const profileData = {
  nama: "Fauziyah Salsabila",
  jenisKelamin: "Perempuan",
  ttl: "Jakarta, 03 April 1999",
  lulusan: "S1 Sistem Informasi Kelautan",
  pengalaman: "2021-2024 (3 th)",
};

const profileContainer = document.getElementById("profile-container");

const table = document.createElement("table");

const rows = [
  { label: "Nama", value: profileData.nama },
  { label: "Jenis Kelamin", value: profileData.jenisKelamin },
  { label: "TTL", value: profileData.ttl },
  { label: "Lulusan", value: profileData.lulusan },
  { label: "Pengalaman", value: profileData.pengalaman },
];

// Membuat tabel dari data profil
rows.forEach((rowData) => {
  const row = document.createElement("tr");

  const labelCell = document.createElement("td");
  labelCell.textContent = rowData.label;

  const colonCell = document.createElement("td");
  colonCell.textContent = ":";

  const valueCell = document.createElement("td");
  valueCell.textContent = rowData.value;

  row.appendChild(labelCell);
  row.appendChild(colonCell);
  row.appendChild(valueCell);

  table.appendChild(row);
});

// Event: Mendeteksi tombol yang ditekan
document.addEventListener("keydown", (event) => {
  // Contoh: jika tombol 'N' ditekan, tampilkan nama
  if (event.key === "n" || event.key === "N") {
    alert(`Nama: ${profileData.nama}`);
  }
  // Contoh: jika tombol 'J' ditekan, tampilkan jenis kelamin
  else if (event.key === "j" || event.key === "J") {
    alert(`Jenis Kelamin: ${profileData.jenisKelamin}`);
  }
  // Contoh: jika tombol 'T' ditekan, tampilkan TTL
  else if (event.key === "t" || event.key === "T") {
    alert(`TTL: ${profileData.ttl}`);
  }
  // Contoh: jika tombol 'L' ditekan, tampilkan lulusan
  else if (event.key === "l" || event.key === "L") {
    alert(`Lulusan: ${profileData.lulusan}`);
  }
  // Contoh: jika tombol 'P' ditekan, tampilkan pengalaman
  else if (event.key === "p" || event.key === "P") {
    alert(`Pengalaman: ${profileData.pengalaman}`);
  }
});

profileContainer.appendChild(table);
