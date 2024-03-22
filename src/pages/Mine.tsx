import { Link } from "react-router-dom";
import Header from "../components/Header";
import ModelCard from "../components/ModelCard";
import MyModelCard from "../components/MyModelCard";

const Mine = () => {
  const models = JSON.parse(localStorage?.getItem("savedItems") || "[]");
  const myModels = JSON.parse(localStorage?.getItem("formDataArray") || "[]");

  return (
    <div className="bg-[#BBD0FF] min-h-screen pb-8">
      <Header />
      <div className="flex justify-center mt-4">
        <Link to="/add">
          <button className=" bg-purple-500 text-white p-5 font-semibold rounded-2xl">
            Create your own model
          </button>
        </Link>
      </div>
      <div className="flex flex-wrap gap-8 justify-center pt-8">
        {myModels?.length > 0 &&
          myModels?.map((item: any) => (
            <MyModelCard item={item} key={item.name} />
          ))}
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
