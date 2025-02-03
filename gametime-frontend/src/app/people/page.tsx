'use client';

import Footer from '@/components/layouts/Footer';
import Header from '@/components/layouts/Header';
import { useState } from 'react';

interface Person {
  name: string;
  clubNumber: string;
  email: string;
  status: string;
}

export default function PeoplePage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLetter, setSelectedLetter] = useState('All');

  // Sample data
  const people: Person[] = [
    { name: "(Club Atwater), Montreal Club", clubNumber: "95540", email: "", status: "Active" },
    { name: "40th Grad Reunion, Cheryl Young", clubNumber: "B2109", email: "cheryl.young@shaw.ca", status: "Active" },
    { name: "Aasen, Gregory", clubNumber: "51210", email: "greg@aasen.ca", status: "Active" },
    { name: "Aasen, David", clubNumber: "51213", email: "david.aasen@hotmail.com", status: "Active" },
    { name: "Aasen, Michael", clubNumber: "51212", email: "greg@aasen.ca", status: "Active" },
    { name: "Abadi, Nas", clubNumber: "68260", email: "nasabadi.realty@gmail.com", status: "Active" },
    { name: "Abbott, Heather", clubNumber: "35011", email: "jabbott@shaw.ca", status: "Disabled" },
    { name: "Abbott, John", clubNumber: "35010", email: "jabbott@shaw.ca", status: "Active" },
    { name: "Abdel-Barr, Emily", clubNumber: "55994", email: "missyabdelbarr@gmail.com", status: "Active" },
    { name: "Abdel-Barr, Jena", clubNumber: "55993", email: "jenaabdelbarr@gmail.com", status: "Active" },
    { name: "Abdel-Barr, Joel", clubNumber: "55992", email: "missyabdelbarr@gmail.com", status: "Active" },
    { name: "Abdel-Barr, Jacquelyn", clubNumber: "55991", email: "missyabdelbarr@gmail.com", status: "Active" }
  ];

  const filteredPeople = people.filter(person => {
    const matchesSearch = person.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLetter = selectedLetter === 'All' || person.name.charAt(0).toUpperCase() === selectedLetter;
    return matchesSearch && matchesLetter;
  });

  return (
    <>
    <Header />
    <div className="container-fluid mt-4">
      <h1>People</h1>
      
      {/* Alphabet Filter */}
      <div className="mb-3">
        <span>Last Name : </span>
        {'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map((letter) => (
          <a
            key={letter}
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setSelectedLetter(letter);
            }}
            style={{ 
              marginRight: '8px',
              color: selectedLetter === letter ? '#0d6efd' : '#000',
              textDecoration: 'none'
            }}
          >
            {letter}
          </a>
        ))}
        <span style={{ marginLeft: '8px' }}>- </span>
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            setSelectedLetter('All');
          }}
          style={{ 
            color: selectedLetter === 'All' ? '#0d6efd' : '#000',
            textDecoration: 'none'
          }}
        >
          All
        </a>
      </div>

      {/* Search Box */}
      <div className="row mb-3">
        <div className="col-md-3 ms-auto">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="btn btn-success">
              <i className="bi bi-search"></i>
            </button>
          </div>
        </div>
      </div>

      {/* Results Count */}
      <div className="mb-2">
        <small>1 - 100 of 17754</small>
      </div>

      {/* Table */}
      <div className="table-responsive">
        <table className="table table-hover">
          <thead className="table-dark">
            <tr>
              <th><input type="checkbox" /></th>
              <th>Name</th>
              <th>Club Number</th>
              <th>Email</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredPeople.map((person, index) => (
              <tr key={index}>
                <td><input type="checkbox" /></td>
                <td>{person.name}</td>
                <td>{person.clubNumber}</td>
                <td>{person.email}</td>
                <td>
                  <span className={`badge ${person.status === 'Active' ? 'bg-success' : 'bg-secondary'}`}>
                    {person.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="d-flex justify-content-center">
        <nav>
          <ul className="pagination">
            <li className="page-item active"><a className="page-link" href="#">1</a></li>
            <li className="page-item"><a className="page-link" href="#">2</a></li>
            <li className="page-item"><a className="page-link" href="#">3</a></li>
            <li className="page-item"><a className="page-link" href="#">4</a></li>
            <li className="page-item"><a className="page-link" href="#">5</a></li>
            <li className="page-item"><a className="page-link" href="#">6</a></li>
            <li className="page-item"><a className="page-link" href="#">7</a></li>
            <li className="page-item"><a className="page-link" href="#">8</a></li>
            <li className="page-item"><a className="page-link" href="#">9</a></li>
            <li className="page-item"><a className="page-link" href="#">10</a></li>
            <li className="page-item"><a className="page-link" href="#">Next</a></li>
          </ul>
        </nav>
      </div>

      {/* Action Buttons */}
      <div className="mt-3">
        <button className="btn btn-primary me-2">Add</button>
        <button className="btn btn-secondary me-2">Disable</button>
        <button className="btn btn-danger me-2">Delete</button>
        <button className="btn btn-info">Filter</button>
      </div>
    </div>
    <Footer />
    </>
  );
}
