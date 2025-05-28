const Button = ({ handleClick, children }) => {
  return (
    <button
      onClick={handleClick}
      className="p-2 border cursor-pointer rounded-lg ml-2 bg-amber-200"
    >
      {children}
    </button>
  );
};

export default Button;
