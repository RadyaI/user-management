import React, { useState } from "react";

const PaginationComplexData = () => {
  const data = [
    {
      id: "1ESAcT3acI8hX6J3JceV",
      nama: "Ahmad Fauzi",
      email: "ahmad.fauzi@example.com",
      isLoggedIn: true,
      loginCount: 12,
      role: "Admin",
      status: "Aktif",
      tanggal_registrasi: "2025-01-01",
    },
    {
      id: "2ESAcT3acI8hX6J3JceV",
      nama: "Faiz Dwi Handoko",
      email: "faiz.handoko@example.com",
      isLoggedIn: false,
      loginCount: 8,
      role: "User",
      status: "Non-Aktif",
      tanggal_registrasi: "2025-01-03",
    },
    {
      id: "3ESAcT3acI8hX6J3JceV",
      nama: "Rina Kartika",
      email: "rina.kartika@example.com",
      isLoggedIn: true,
      loginCount: 20,
      role: "Moderator",
      status: "Aktif",
      tanggal_registrasi: "2025-01-05",
    },
    {
      id: "4ESAcT3acI8hX6J3JceV",
      nama: "Budi Santoso",
      email: "budi.santoso@example.com",
      isLoggedIn: false,
      loginCount: 3,
      role: "User",
      status: "Non-Aktif",
      tanggal_registrasi: "2025-01-07",
    },
    {
      id: "5ESAcT3acI8hX6J3JceV",
      nama: "Citra Melati",
      email: "citra.melati@example.com",
      isLoggedIn: true,
      loginCount: 15,
      role: "User",
      status: "Aktif",
      tanggal_registrasi: "2025-01-09",
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 2;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentData = data.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <h2>Pagination with Complex Data</h2>
      <table border="1" style={{ width: "100%", textAlign: "left" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nama</th>
            <th>Email</th>
            <th>Status</th>
            <th>Role</th>
            <th>Login Count</th>
            <th>Registrasi</th>
          </tr>
        </thead>
        <tbody>
          {currentData.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.nama}</td>
              <td>{item.email}</td>
              <td>{item.status}</td>
              <td>{item.role}</td>
              <td>{item.loginCount}</td>
              <td>{item.tanggal_registrasi}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div style={{ marginTop: "10px" }}>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            style={{
              margin: "0 5px",
              backgroundColor: currentPage === index + 1 ? "lightblue" : "",
            }}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default PaginationComplexData;
