import CATEGORY_LINKS from "../constants";
const HeaderLinks = () => {
  return (
    <div className="flex items-center px-10 my-5 sm:px-20 overflow-x-scroll space-x-10 scrollbar-hide">
      <ul className="flex gap-9 text-[#CDCED2]">
        {CATEGORY_LINKS.map((item) => (
          <li
            className="text-3xl whitespace-nowrap transition-transform duration-300 font-bold hover:scale-125 hover:text-white"
            key={item.name}>
            <a href={item.link}>{item.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HeaderLinks;
