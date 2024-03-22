import { useState } from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";

const Add = () => {
  const [imageUrl, setImageUrl] = useState<any>("");
  const [formData, setFormData] = useState({
    name: "",
    image: imageUrl,
    codeSnippet: "",
    category: "",
    description: "",
  });

  const [formDataArray, setFormDataArray] = useState<any>([]);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const updatedFormDataArray = [...formDataArray, formData];
    localStorage.setItem("formDataArray", JSON.stringify(updatedFormDataArray));
    setFormDataArray(updatedFormDataArray);
    setFormData({
      name: "",
      image: imageUrl,
      codeSnippet: "",
      category: "",
      description: "",
    });
  };

  const handleImageUpload = (event: any) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      const imageDataUrl = reader.result;
      setImageUrl(imageDataUrl);
      localStorage.setItem("image", imageDataUrl as string);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="bg-[#BBD0FF] min-h-screen pb-8">
      <Header />
      <div className="pt-8 flex flex-col items-center gap-y-8 px-8">
        <p className="md:text-4xl text-2xl font-bold">Add Model</p>
      </div>
      <div className="pt-8 px-10 md:px-60">
        <form onSubmit={handleSubmit} className="flex flex-col gap-y-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="border border-gray-300 rounded-md px-3 py-2"
          />
          <input type="file" accept="image/*" onChange={handleImageUpload} />
          {imageUrl && <img src={imageUrl} width={"40%"} alt="Uploaded" />}
          <label className="text-red-500">Note: Use \n for new line</label>
          <input
            type="text"
            name="codeSnippet"
            placeholder="Code Snippet"
            value={formData.codeSnippet}
            onChange={handleChange}
            className="border border-gray-300 rounded-md px-3 py-2"
          />
          <input
            type="text"
            name="category"
            placeholder="Category"
            value={formData.category}
            onChange={handleChange}
            className="border border-gray-300 rounded-md px-3 py-2"
          />
          <textarea
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
            className="border border-gray-300 rounded-md px-3 py-2"
          ></textarea>
          <div className="flex justify-center gap-x-5">
            <button
              type="submit"
              className="bg-indigo-500 text-white px-4 md:w-52 py-2 rounded-md hover:bg-indigo-600"
            >
              Save
            </button>
            <Link to="/mine">
              <button className="bg-red-500 text-white px-4 md:w-52 py-2 rounded-md hover:bg-red-600">
                Cancel
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Add;
