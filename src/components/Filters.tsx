const Filters = ({ filters, selectedFilter, onSelectFilter }: any) => {
  return (
    <div className="flex gap-4 flex-wrap pl-4">
      {filters.map((filter: any) => (
        <button
          key={filter}
          className={`bg-gray-200 py-2 px-2 md:py-2 md:px-3 rounded-sm cursor-pointer z-10 shadow-md text-sm md:text-base  ${
            filter === selectedFilter
              ? "bg-purple-500 text-white font-semibold"
              : ""
          }`}
          onClick={(e) => onSelectFilter(filter, e)}
        >
          {filter}
        </button>
      ))}
    </div>
  );
};

export default Filters;
