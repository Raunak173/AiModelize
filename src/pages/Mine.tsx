import Header from "../components/Header";
import ModelCard from "../components/ModelCard";

const Mine = () => {
  const models = JSON.parse(localStorage?.getItem("savedItems") || "[]");

  return (
    <div className="bg-[#BBD0FF] min-h-screen pb-8">
      <Header />
      <div className="flex flex-wrap gap-8 justify-center pt-8">
        {models?.length > 0 ? (
          models?.map((item: any) => <ModelCard item={item} key={item.id} />)
        ) : (
          <p className="bg-[#B8C0FF] py-8 px-4 text-2xl">
            Sorry! No AI models to show :/
          </p>
        )}
      </div>
    </div>
  );
};

export default Mine;
