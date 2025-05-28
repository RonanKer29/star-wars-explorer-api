const Header = ({ categories, onCategorySelect, selectedCategory }) => {
  return (
    <div>
      {Object.entries(categories).map(([key, label]) => (
        <button
          onClick={() => onCategorySelect(key)}
          key={key}
          className={`m-2 p-2 rounded-lg border ${
            selectedCategory === key ? "bg-blue-500 text-white" : "bg-white"
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
};

export default Header;
