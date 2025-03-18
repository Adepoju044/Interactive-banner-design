import * as Dialog from "@radix-ui/react-dialog";
import { useRef, useState } from "react";
import PlaceholderImage from "../assets/placeholder.jpg";

const Banner = () => {
  const [bgColor, setBgColor] = useState("#3b82f6");
  const [text, setText] = useState(
    "I love and enjoy coding, smelling the rain, having quality conversation."
  );
  const [image, setImage] = useState(null);
  const fileInputRef = useRef(null);

  // Handler to set new image
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Handler to remove image
  const handleRemoveImage = () => {
    setImage(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold text-center mb-4">Banner Page</h1>
      <div
        className="relative w-full h-48 md:h-64 flex flex-col items-center justify-center text-white text-lg md:text-xl font-bold text-center p-4 rounded-md shadow-lg"
        style={{ backgroundColor: bgColor }}
      >
        <div
          className="w-20 h-20 md:w-28 md:h-28 border-2 border-white shadow-md rounded-lg overflow-hidden flex items-center justify-center"
          style={{ backgroundColor: bgColor }}
        >
          <img
            src={image || PlaceholderImage}
            alt="Banner"
            className="w-full h-full object-contain"
            data-testid="banner-image"
          />
        </div>
        <div
          className="w-full max-h-20 md:max-h-28 mt-4 px-2 overflow-y-auto text-sm md:text-base scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200"
          data-testid="banner-text"
        >
          {text}
        </div>
      </div>
      <div className="mt-6 flex flex-col gap-4">
        <div>
          <label
            htmlFor="banner-text-input"
            className="block text-sm font-medium text-gray-700 mb-3"
          >
            Banner Text:
          </label>
          <textarea
            id="banner-text-input"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="p-2 border rounded w-full resize-none h-16"
            data-testid="banner-input"
          />
        </div>
        <div>
          <label
            htmlFor="background-color-input"
            className="block text-sm font-medium text-gray-700 text-center mb-4 ml-5"
          >
            Background Color:
          </label>
          <input
            id="background-color-input"
            type="color"
            value={bgColor}
            onChange={(e) => setBgColor(e.target.value)}
            className="p-2 w-16 h-10 border rounded text-center"
          />
        </div>
        <div>
          <label
            htmlFor="banner-image-input"
            className="block text-sm font-medium text-gray-700 text-center mb-2"
          >
            Banner Image:
          </label>
          <input
            id="banner-image-input"
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="p-2 border rounded w-full"
            data-testid="banner-file-input"
          />
        </div>
        <button
          onClick={handleRemoveImage}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-400"
          data-testid="remove-image-button"
        >
          Remove Image
        </button>
        <Dialog.Root>
          <Dialog.Trigger className="bg-blue-500 text-white px-4 py-2 rounded mt-2 w-full md:w-auto hover:bg-blue-400">
            Preview Banner
          </Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
            <Dialog.Content className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded shadow-lg w-11/12 max-w-lg">
              <Dialog.Title className="text-lg font-bold mb-4">
                Banner Preview
              </Dialog.Title>
              <div
                className="relative w-full h-40 md:h-56 flex flex-col items-center justify-center text-white text-lg md:text-xl font-bold text-center p-4 rounded-md shadow-lg"
                style={{ backgroundColor: bgColor }}
              >
                <div
                  className="w-20 h-20 md:w-28 md:h-28 border-2 border-white shadow-md rounded-lg overflow-hidden flex items-center justify-center"
                  style={{ backgroundColor: bgColor }}
                >
                  <img
                    src={image || PlaceholderImage}
                    alt="Banner Preview"
                    className="w-full h-full object-contain"
                    data-testid="banner-preview-image"
                  />
                </div>
                <div
                  className="w-full max-h-20 md:max-h-28 mt-4 px-2 overflow-y-auto text-sm md:text-base scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200"
                  data-testid="banner-preview-text"
                >
                  {text}
                </div>
              </div>
              <Dialog.Close className="mt-4 bg-gray-500 text-white px-4 py-2 rounded">
                Close
              </Dialog.Close>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </div>
    </div>
  );
};

export default Banner;
