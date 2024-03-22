import { useLocation } from "react-router-dom";
import Header from "../components/Header";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import copy from "copy-to-clipboard";
import DisqusComments from "../components/DisqusComments";
import { useEffect, useState } from "react";
import db from "../firebase";
import { doc, increment, getDoc, setDoc } from "firebase/firestore";

const ModelDetails = () => {
  const location = useLocation();
  const item: any = location.state;

  const [views, setViews] = useState(0);

  const [savedItems, setSavedItems] = useState(
    JSON.parse(localStorage?.getItem("savedItems") as string) || []
  );

  const addToCollection = () => {
    const updatedSavedItems = [...savedItems, item];
    localStorage.setItem("savedItems", JSON.stringify(updatedSavedItems));
    setSavedItems(updatedSavedItems);
  };

  const removeFromCollection = () => {
    const updatedSavedItems = savedItems.filter(
      (savedItem: any) => savedItem.name !== item.name
    );
    localStorage.setItem("savedItems", JSON.stringify(updatedSavedItems));
    setSavedItems(updatedSavedItems);
  };

  const isSaved = savedItems.some(
    (savedItem: any) => savedItem.name === item.name
  );

  async function addView() {
    try {
      const viewRef = doc(db, "views", item.id.toString());
      const viewSnapshot = await getDoc(viewRef);
      const currentViews = viewSnapshot.exists() ? viewSnapshot.data().view : 0;
      const newView = {
        view: increment(currentViews + 1),
        name: item.name,
        category: item.category,
        description: item.description,
        codeSnippet: item.codeSnippet,
        imageUrl: item.imageUrl,
        useCases: item.useCases,
      };
      await setDoc(viewRef, newView, { merge: true });
      setViews(currentViews + 1);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    addView();
  }, []);

  return (
    <div className="bg-[#BBD0FF] min-h-screen pb-8">
      <Header />
      <div className="p-2 md:p-4 bg-black absolute md:right-12 right-2 md:mt-5 mt-20 text-white rounded-lg">
        👁 {views}
      </div>
      <div className="pt-8 flex flex-col items-center gap-y-8 px-8">
        <p className="md:text-4xl text-2xl font-bold">{item?.name}</p>
        <img src={item?.imageUrl} width={"50%"} />
      </div>
      <div className="pt-8 px-10">
        {isSaved ? (
          <button
            onClick={removeFromCollection}
            className="px-4 py-2 bg-red-500 text-white rounded-sm shadow-lg"
          >
            Remove from Mine
          </button>
        ) : (
          <button
            onClick={addToCollection}
            className="px-4 py-2 bg-green-500 text-white rounded-sm shadow-lg"
          >
            Add to Mine
          </button>
        )}
      </div>
      <div className="flex flex-col px-10 gap-y-8 pt-8">
        <div>
          <p className="font-bold text-3xl">Description :</p>
          <p className="bg-[#B8C0FF] py-8 px-4 mt-2">{item?.description}</p>
        </div>
        <div className="pt-14">
          <p className="font-bold text-3xl">Code Snippet :</p>
          <button
            onClick={() => copy(item?.codeSnippet)}
            className="absolute right-10 px-4 py-2 bg-black text-white -mt-14 rounded-full"
          >
            Copy
          </button>
          <SyntaxHighlighter language="javascript" style={materialDark}>
            {item?.codeSnippet}
          </SyntaxHighlighter>
        </div>
        <div>
          <p className="font-bold text-3xl">Some Use Cases :</p>
          <div className="bg-[#B8C0FF] py-8 px-4 mt-2">
            {item?.useCases?.map((usecase: any) => (
              <p key={usecase}>• Used in {usecase}</p>
            ))}
          </div>
        </div>
        <DisqusComments post={item} />
      </div>
    </div>
  );
};

export default ModelDetails;
