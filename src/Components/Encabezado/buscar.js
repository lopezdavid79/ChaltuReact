import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { getProducts } from '../Productos/services'; // Corregir la importación

function Buscar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [products, setProducts] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function loadProducts() {
      try {
        const response = await getProducts();
        if (response.status === 200) {
          setProducts(response.data.products);
        } else {
          // Handle error, e.g., show an error message
          console.error("Error loading products");
        }
      } catch (error) {
        // Handle error, e.g., show an error message
        console.error("Error loading products", error);
      }
    }
    loadProducts();
  }, []);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Filtrar los productos basados en el término de búsqueda
    const filteredResults = products.filter((product) =>
      product.articulo.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setSearchResults(filteredResults);
    setIsLoading(false);
  };

  return (
    <div className="col-md-8">
      <form className="form" onSubmit={handleSearch}>
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Buscar productos por artículo"
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <div className="input-group-append">
            <button className="btn btn-outline-secondary" type="submit">
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </div>
        </div>
      </form>
      {isLoading && <p>Realizando búsqueda...</p>}
      <ul>
        {searchResults.map((product) => (
          <li key={product._id}>{product.articulo}{product.modelo}{product._id} </li>
        ))}
      </ul>
    </div>
  );
}

export default Buscar;
