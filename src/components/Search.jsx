import { useState } from 'react';

function Search({ searchFood }) {
  const [searchInput, setSearchInput] = useState('');
  const handleSearch = (e) => {
    setSearchInput(e.target.value); // Guardamos el valor en el estado

    searchFood(e.target.value);
  };

  return (
    <div>
      <h2>Searchfood</h2>
      <form>
        <input
          type="text"
          name="search"
          value={searchInput}
          onChange={handleSearch}
        />
      </form>
    </div>
  );
}

export default Search;
