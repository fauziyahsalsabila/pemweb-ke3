const profileData = {
  nama: "Lois June",
  jenisKelamin: "Laki-laki",
  ttl: "Bali, 03 Agustus 1999",
  lulusan: "S1 Sistem Informasi Kelautan",
  pengalaman: "Jan-Jun (6 bln)",
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

  // Event: Menampilkan alert saat baris di-double click
  row.addEventListener("dblclick", () => {
    alert(`Anda double-click pada: ${rowData.label} - ${rowData.value}`);
  });

  table.appendChild(row);
});

profileContainer.appendChild(table);
