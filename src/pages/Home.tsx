import { useEffect, useState } from "react";
import Header from "../components/Header";
import { getModels } from "../services/getModels";
import ModelCard from "../components/ModelCard";
import Filters from "../components/Filters";

const Home = () => {
  const [models, setModels] = useState<any>([]);
  const [selectedFilter, setSelectedFilter] = useState<string | null>("All");
  const [filteredModels, setFilteredModels] = useState<any>([]);

  useEffect(() => {
    getModels().then((mod) => {
      setModels(mod);
      setFilteredModels(mod);
    });
  }, []);

  const categories = Array.from(
    new Set(models?.map((model: any) => model?.category))
  );

  const handleSelectFilter = (category: string, e: any) => {
    e.preventDefault();
    setSelectedFilter(category);
    if (category === "All") {
      setFilteredModels(models);
    } else {
      const filtered = models.filter(
        (model: any) => model.category === category
      );
      setFilteredModels(filtered);
    }
  };

  return (
    <div className="bg-[#BBD0FF] min-h-screen pb-8">
      <Header />
      <div className="pt-44 flex justify-center flex-wrap">
        <Filters
          filters={["All", ...categories]}
          selectedFilter={selectedFilter}
          onSelectFilter={handleSelectFilter}
        />
      </div>
      <div className="flex flex-wrap gap-8 justify-center pt-8">
        {filteredModels?.map((item: any) => (
          <ModelCard item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default Home;
