const HeaderLinks = ({ setCategory }) => {
  return (
    <div className="flex items-center px-10 my-5 sm:px-20 overflow-x-scroll space-x-10 scrollbar-hide">
      <div className="flex gap-9 text-[#CDCED2]">
        <button
          className="text-xl whitespace-nowrap transition-transform duration-300 font-bold hover:scale-125 hover:text-white"
          onClick={() => setCategory("movies")}>
          Movies
        </button>
        <button
          className="text-xl whitespace-nowrap transition-transform duration-300 font-bold hover:scale-125 hover:text-white"
          onClick={() => setCategory("series")}>
          Series
        </button>
      </div>
    </div>
  );
};

export default HeaderLinks;
