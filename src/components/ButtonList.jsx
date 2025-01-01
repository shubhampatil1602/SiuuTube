const ButtonList = () => {
  const items = [
    "All",
    "Dwarka",
    "Music",
    "APIs",
    "NamasteDev",
    "100xDevs",
    "Cricket",
    "Live",
  ];
  return (
    <div className='h-14 w-[90%] mx-auto mb-3 flex justify-start items-center gap-3 overflow-scroll'>
      {items.map((item) => (
        <button
          key={item}
          className='bg-slate-200/80 font-semibold px-3 py-1 rounded-md'
        >
          {item}
        </button>
      ))}
    </div>
  );
};

export default ButtonList;
