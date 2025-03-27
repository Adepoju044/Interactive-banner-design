import * as Dialog from "@radix-ui/react-dialog";
import { useRef, useState } from "react";
import PlaceholderImage from "../assets/placeholder.jpg";

const Banner = () => {
    const [bgColor, setBgColor] = useState("#3b82f6");
    const [text, setText] = useState(
        "I love and enjoy coding, smelling the rain, and having quality conversation."
    );
    const [image, setImage] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    const [uploadProgress, setUploadProgress] = useState(0);
    const fileInputRef = useRef(null);

    const MAX_CHARACTERS = 250;

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            if (file.type.startsWith("image/")) {
                setIsLoading(true);
                setError("");
                setUploadProgress(0);

                const reader = new FileReader();
                reader.onloadend = () => {
                    setImage(reader.result);
                    setIsLoading(false);
                };
                reader.onprogress = (event) => {
                    if (event.lengthComputable) {
                        const progress = Math.round((event.loaded / event.total) * 100);
                        setUploadProgress(progress);
                    }
                };
                reader.readAsDataURL(file);
            } else {
                setError("Please upload a valid image file (e.g., JPG, PNG, GIF).");
                if (fileInputRef.current) {
                    fileInputRef.current.value = "";
                }
            }
        }
    };

    const handleRemoveImage = () => {
        setImage(null);
        setError("");
        if (fileInputRef.current) {
            fileInputRef.current.value = "";
        }
    };

    const handleTextChange = (e) => {
        if (e.target.value.length <= MAX_CHARACTERS) {
            setText(e.target.value);
        }
    };

    return (
        <div className="p-6 max-w-2xl mx-auto">
            <h1 className="text-3xl font-bold text-center mb-4">Banner Page</h1>
            <div
                className="relative w-full h-48 flex flex-col items-center justify-center text-white text-lg font-bold text-center p-4 rounded-md shadow-lg transition-colors duration-300 md:h-64 md:text-3xl"
                style={{ backgroundColor: bgColor }}
            >
                <div
                    className="w-20 h-20 border-2 border-white shadow-md rounded-lg overflow-hidden flex items-center justify-center transition-opacity duration-300 font-bold md:w-28 md:h-28"
                    style={{ backgroundColor: bgColor }}
                >
                    {isLoading ? (
                        <div className="w-full h-full flex items-center justify-center">
                            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                                <div className="w-12 h-12 bg-blue-500 rounded-full animate-pulse"></div>
                            </div>
                        </div>
                    ) : (
                        <img
                            src={image || PlaceholderImage}
                            alt="Banner"
                            className="w-full h-full object-cover transition-opacity duration-300"
                            style={{ opacity: image ? 1 : 0.8 }}
                            data-testid="banner-image"
                        />
                    )}
                </div>
                <div
                    className="w-full max-h-20 mt-4 px-2 overflow-y-auto text-sm scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 transition-opacity duration-300 md:text-base md:max-h-28"
                    data-testid="banner-text"
                >
                    {text}
                </div>
            </div>
            <div className="mt-6 flex flex-col gap-4">
                {error && (
                    <div
                        className="text-red-600 text-sm text-center mb-4"
                        data-testid="error-message"
                    >
                        {error}
                    </div>
                )}

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
                        onChange={handleTextChange}
                        className="p-2 border rounded w-full resize-none h-16 transition-all duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                        aria-label="Enter banner text"
                        data-testid="banner-input"
                        maxLength={MAX_CHARACTERS}
                    />
                    <div className="text-sm text-gray-500 mt-1">
                        {text.length}/{MAX_CHARACTERS} characters
                    </div>
                </div>
                <div className="container flex flex-col space-y-4 item-center px-6 mx-auto mt-10 md:flex-row md:space-x-4 md:justify-center md:text-center">
                    <div className="flex justify-center">
                        <label
                            htmlFor="background-color-input"
                            className="text-sm font-medium text-gray-700 text-center mr-3 self-center justify-self-center flex-col whitespace-nowrap md:ml-8"
                        >
                            Change background Color:
                        </label>
                        <input
                            id="background-color-input"
                            type="color"
                            value={bgColor}
                            onChange={(e) => setBgColor(e.target.value)}
                            className="p-2 min-w-16 h-10 border rounded text-center self-center justify-self-center whitespace-nowrap cursor-pointer transition-all duration-200 hover:scale-105"
                            aria-label="Choose background color"
                        />
                    </div>
                    <div className="flex justify-center items-center">
                        <label
                            htmlFor="banner-image-input"
                            className="text-sm font-medium text-gray-700 text-center ml-6 whitespace-nowrap md:mb-4"
                        >
                            Change banner Image:
                        </label>

                        <label
                            htmlFor="banner-image-input"
                            className="px-2 pt-3 pb-3 rounded cursor-pointer text-center border-0 bg-gray-300 text-black text-sm shadow-lg ml-4 whitespace-nowrap transition-all duration-200 hover:bg-gray-400 hover:shadow-md md:mb-3"
                            aria-label="Upload banner image"
                        >
                            Upload Image
                        </label>

                        <input
                            id="banner-image-input"
                            ref={fileInputRef}
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                            className="hidden"
                            aria-label="Upload banner image"
                            data-testid="banner-file-input"
                        />
                    </div>
                </div>

                {isLoading && (
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div
                            className="bg-blue-600 h-2.5 rounded-full"
                            style={{ width: `${uploadProgress}%` }}
                        ></div>
                    </div>
                )}

                <div className="flex items-center justify-center text-center space-x-6">
                    <button
                        onClick={handleRemoveImage}
                        className="bg-red-600 text-white px-4 py-2.5 rounded hover:bg-red-400 mb-10 whitespace-nowrap transition-all duration-200 hover:scale-105 cursor-pointer md:mr-16"
                        aria-label="Remove banner image"
                        data-testid="remove-image-button"
                    >
                        Remove Image
                    </button>
                    <Dialog.Root>
                        <Dialog.Trigger
                            className="bg-blue-600 text-white px-4 py-2.5 rounded mt-2 hover:bg-blue-400 justify-self-center transition-all duration-200 hover:scale-105 mb-12 cursor-pointer whitespace-nowrap"
                            aria-label="Preview banner"
                        >
                            Preview Banner
                        </Dialog.Trigger>
                        <Dialog.Portal>
                            <Dialog.Overlay className="fixed inset-0 bg-black opacity-30 transition-opacity duration-300" />
                            <Dialog.Content className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded shadow-lg w-11/12 max-w-lg transition-all duration-300">
                                <Dialog.Title className="text-lg font-bold mb-4">
                                    Banner Preview
                                </Dialog.Title>
                                <div
                                    className="relative w-full h-40 flex flex-col items-center justify-center text-white text-lg font-bold text-center p-4 rounded-md shadow-lg transition-colors duration-300 md:h-56 md:text-xl"
                                    style={{ backgroundColor: bgColor }}
                                >
                                    <div
                                        className="w-20 h-20 md:w-28 md:h-28 border-2 border-white shadow-md rounded-lg overflow-hidden flex items-center justify-center transition-opacity duration-300"
                                        style={{ backgroundColor: bgColor }}
                                    >
                                        <img
                                            src={image || PlaceholderImage}
                                            alt="Banner Preview"
                                            className="w-full h-full object-contain transition-opacity duration-300"
                                            data-testid="banner-preview-image"
                                        />
                                    </div>
                                    <div
                                        className="w-full max-h-20 mt-4 px-2 overflow-y-auto text-sm md:text-base scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 transition-opacity duration-300 md:max-h-28 "
                                        data-testid="banner-preview-text"
                                    >
                                        {text}
                                    </div>
                                </div>
                                <Dialog.Close
                                    className="mt-4 bg-gray-600 text-white px-4 py-2 rounded transition-all duration-200 hover:bg-gray-700"
                                    aria-label="Close preview"
                                >
                                    Close
                                </Dialog.Close>
                            </Dialog.Content>
                        </Dialog.Portal>
                    </Dialog.Root>
                </div>
            </div>
        </div>
    );
};

export default Banner;
