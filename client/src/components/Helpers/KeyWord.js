const KeyWord = ({ title, onFilter }) => {
  return (
    <button
      key={title}
      type="button"
      className="text-gray-900 
                hover:text-white 
                border-2
                border-gray-800 
                hover:bg-gray-900 
                focus:ring-4 
                focus:outline-none 
                focus:ring-gray-300 
                font-medium 
                text-sm
                whitespace-nowrap 
                px-5 
                py-2.5 
                text-center 
                mr-2 
                dark:border-black 
                capitalize
            "
      onClick={() => onFilter(title)}
    >
      {title}
    </button>
  );
};

export default KeyWord;
