const Pagination = ({ totalCount, currentPage, onPageClick }) => {
  const totalPages = Math.ceil(totalCount / 10);

  return (
    <div className="flex justify-center gap-2 mt-4">
      {Array.from({ length: totalPages }).map((_, i) => (
        <button
          key={i}
          onClick={() => onPageClick(i + 1)}
          className={`px-3 py-1 border rounded
            ${
              currentPage === i + 1
                ? "bg-blue-500 text-white"
                : "hover:bg-gray-200"
            }`}
        >
          {i + 1}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
