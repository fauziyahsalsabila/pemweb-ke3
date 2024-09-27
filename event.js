const dataDosen = [
    { nama: "Fauziyah Salsabila", jenisKelamin: "Pr", usia: "25 th", pendidikan: "S1 Sistem Informasi Kelautan", pengalaman: "3 tahun", profile: "myprofile.html" },
    { nama: "Lois June", jenisKelamin: "Lk", usia: "30 th", pendidikan: "S2 Sistem Informasi Geografi", pengalaman: "6 bulan", profile: "myprofile2.html" },
    { nama: "Joe Mancson", jenisKelamin: "Lk", usia: "27 th", pendidikan: "S3 Sistem Informasi", pengalaman: "1 tahun", profile: "myprofil3.html" },
    { nama: "Cleve Atricha", jenisKelamin: "Pr", usia: "24 th", pendidikan: "S1 Ilmu Teknologi", pengalaman: "3 bulan", profile: "myprofile5.html" },
    { nama: "Dinshon Aprazkal", jenisKelamin: "Lk", usia: "23 th", pendidikan: "S1 Pendidikan Kelautan dan Perikanan", pengalaman: "9 bulan", profile: "myprofile4.html" },
    { nama: "Clyna Canyna", jenisKelamin: "Pr", usia: "24 th", pendidikan: "S1 Logistik Kelautan", pengalaman: "5 bulan", profile: "myprofile6.html" }
];

const tableContainer = document.getElementById('table-container');

const table = document.createElement('table');
table.border = "1";

// Membuat header tabel
const headerRow = document.createElement('tr');
const headers = ["Nama", "Jenis Kelamin", "Usia", "Pendidikan", "Pengalaman", "Profile"];
headers.forEach(headerText => {
    const th = document.createElement('th');
    th.textContent = headerText;
    headerRow.appendChild(th);
});
table.appendChild(headerRow);

// Membuat baris tabel dari data dosen
dataDosen.forEach(dosen => {
    const row = document.createElement('tr');

    // Event onclick untuk menampilkan nama dosen saat baris diklik
    row.addEventListener('click', () => {
        alert(`Nama Dosen: ${dosen.nama}`);
    });

    // Event onmouseover untuk mengubah warna latar belakang saat mouse berada di atas
    row.addEventListener('mouseover', () => {
        row.style.backgroundColor = 'red';
    });

    // Event onmouseout untuk mengembalikan warna latar belakang saat mouse keluar
    row.addEventListener('mouseout', () => {
        row.style.backgroundColor = '';
    });

    Object.keys(dosen).forEach(key => {
        const td = document.createElement('td');
        if (key === 'profile') {
            const link = document.createElement('a');
            link.href = dosen[key];
            link.textContent = 'myprofile';
            link.target = "_blank"; // Membuka link di tab baru
            td.appendChild(link);
        } else {
            td.textContent = dosen[key];
        }
        row.appendChild(td);
    });

    table.appendChild(row);
});

tableContainer.appendChild(table);
