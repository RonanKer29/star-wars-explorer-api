const DetailsItem = ({ item, onItemClick }) => {
  return (
    <button
      className="w-full text-left p-3 bg-white hover:bg-gray-50 border rounded mb-2 shadow"
      onClick={() => {
        onItemClick(item);
        console.log("item envoyé à App :", item);
      }}
    >
      {item.name || item.title}
    </button>
  );
};

export default DetailsItem;
