import { useNavigate } from "react-router-dom";

const MyModelCard = ({ item }: any) => {
  const navigate = useNavigate();
  return (
    <div
      className="bg-[#B8C0FF] p-8 flex flex-col items-center gap-y-4 rounded-2xl shadow-lg cursor-pointer"
      onClick={() => navigate(`/models/mine/${item.id}`, { state: item })}
    >
      <img
        src={`https://picsum.photos/300/300?random=${Math.random}`}
        className="object-contain"
      />
      <p className="font-bold text-xl">{item?.name}</p>
      <div className="bg-[#FFD6FF] py-2 px-4 rounded-3xl">
        <p>{item?.category}</p>
      </div>
    </div>
  );
};

export default MyModelCard;
