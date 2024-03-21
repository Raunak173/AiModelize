const Filters = ({ filters, selectedFilter, onSelectFilter }: any) => {
  return (
    <div className="flex gap-4">
      {filters.map((filter: any) => (
        <button
          key={filter}
          className={`bg-gray-200 py-2 px-3 rounded-sm cursor-pointer z-10 shadow-md  ${
            filter === selectedFilter
              ? "bg-[#E7C6FF] text-blue-700 font-semibold"
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
