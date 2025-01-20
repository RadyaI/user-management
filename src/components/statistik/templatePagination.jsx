import React, { useState } from "react";
import styled from "styled-components";

export default function PaginationComplexData() {
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
  const itemsPerPage = 5;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentData = data.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <Container>
        <h2>User Login</h2>
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
        <PaginationWrapper>
          {/* Tombol Previous */}
          <PageLink onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
            {"<"}
          </PageLink>

          {/* Tombol Halaman */}
          {Array.from({ length: totalPages }, (_, index) => (
            <PageItem key={index}>
              <PageLink
                onClick={() => handlePageChange(index + 1)}
                active={currentPage === index + 1}
              >
                {index + 1}
              </PageLink>
            </PageItem>
          ))}

          {/* Tombol Next */}
          <PageLink
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            {">"}
          </PageLink>
        </PaginationWrapper>
      </Container>
    </>
  );
};

const Container = styled.div`
  width: 90%;
  height: auto;
  margin: 0 auto;
  color: white;
  margin-top: 50px;

  table{
    border: 1px solid white;
    border-collapse: collapse;
  }

  table th{
      height: 30px;
      text-align: center;
  }

  table td{
    height: 30px;
    padding: 0 10px;
  }
`

const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-top: 20px;
`;

const PageItem = styled.div`
  margin: 0 5px;
`;

const PageLink = styled.button`
  padding: 8px 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: ${(props) => (props.active ? "lightblue" : "white")};
  color: ${(props) => (props.active ? "white" : "black")};
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background-color: #f0f0f0;
  }

  &:focus {
    outline: none;
  }
`;