const SearchBar = ({ searchTerm, onFilterChange }) => {
  return (
    <div className="mb-4">
      <label
        htmlFor="search"
        className="block text-sm font-medium text-gray-700 mb-1"
      >
        Recherche
      </label>
      <input
        id="search"
        type="text"
        value={searchTerm}
        onChange={(e) => onFilterChange(e.target.value)}
        placeholder="Rechercher un nom ou un titre..."
        className="w-full px-4 py-2 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
    </div>
  );
};
export default SearchBar;
