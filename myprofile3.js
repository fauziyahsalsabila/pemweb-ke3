const profileData = {
    nama: "Joe Mancson",
    jenisKelamin: "Laki-laki",
    ttl: "Jakarta, 03 April 1997",
    lulusan: "S3 Sistem Informasi",
    pengalaman: "Jan-Des (1 th)"
};

const profileContainer = document.getElementById('profile-container');

const table = document.createElement('table');

const rows = [
    { label: "Nama", value: profileData.nama },
    { label: "Jenis Kelamin", value: profileData.jenisKelamin },
    { label: "TTL", value: profileData.ttl },
    { label: "Lulusan", value: profileData.lulusan },
    { label: "Pengalaman", value: profileData.pengalaman }
];

rows.forEach(rowData => {
    const row = document.createElement('tr');

    const labelCell = document.createElement('td');
    labelCell.textContent = rowData.label;

    const colonCell = document.createElement('td');
    colonCell.textContent = ":";

    const valueCell = document.createElement('td');
    valueCell.textContent = rowData.value;

    row.appendChild(labelCell);
    row.appendChild(colonCell);
    row.appendChild(valueCell);

    table.appendChild(row);
});

profileContainer.appendChild(table);
