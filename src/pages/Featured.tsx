import { useEffect, useState } from "react";
import Header from "../components/Header";
import { collection, getDocs, query, orderBy, limit } from "firebase/firestore";
import db from "../firebase";
import ModelCard from "../components/ModelCard";

const Featured = () => {
  const modelRef = collection(db, "views");
  const [featured, setFeatured] = useState<any>([]);
  useEffect(() => {
    const getFeatured = async () => {
      const q = query(modelRef, orderBy("view", "desc"), limit(4));
      const data = await getDocs(q);
      setFeatured(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getFeatured();
  }, []);
  return (
    <div className="bg-[#BBD0FF] min-h-screen pb-8">
      <Header />
      <div className="flex flex-wrap gap-8 justify-center pt-8">
        {featured.length > 0 ? (
          featured.map((item: any) => <ModelCard item={item} key={item.id} />)
        ) : (
          <p className="bg-[#B8C0FF] py-8 px-4 text-2xl">
            Sorry! No AI models to show :/
          </p>
        )}
      </div>
    </div>
  );
};

export default Featured;
