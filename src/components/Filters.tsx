const Filters = ({ filters, selectedFilter, onSelectFilter }: any) => {
  return (
    <div className="flex gap-4">
      {filters.map((filter: any) => (
        <button
          key={filter}
          className={`bg-gray-200 py-2 px-3 rounded-full cursor-pointer z-10 ${
            filter === selectedFilter ? "bg-red-700 text-white" : ""
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
