import { FaAngleLeft, FaAngleRight, FaInstagram, FaTwitter } from "react-icons/fa"
import state from "../store";
import { useSnapshot } from "valtio";




export const Controls = ({ onPreviousShirt, onNextShirt, shirtName }) => {
    const snap = useSnapshot(state);
    const handleBack = () => {
        state.currentPage = "home";
    };

    const handlePreviousShirt = () => {
        state.currentTextureIndex = (state.currentTextureIndex - 1 + 3) % 3;
    };

    const handleNextShirt = () => {
        state.currentTextureIndex = (state.currentTextureIndex + 1) % 3;
    };

    const shirtNames = ["Goth money gray logo", "Red Shirt", "Another Shirt"];
    const currentShirtName = shirtNames[snap.currentTextureIndex];

    return (
        <>
            <div className="flex flex-col items-center w-screen h-screen ">
                <div className="mr-auto ">
                    <button className="p-2 text-white rounded" onClick={handleBack}>
                        <FaAngleLeft size={30} />
                    </button>
                </div>
                <div className=" absolute top-[70%]">
                    <div className="text-center">
                        <h1 className="text-xl italic font-bold text-white md:text-2xl lg:text-3xl">{currentShirtName}</h1>
                    </div>
                    <div className="flex items-center justify-center gap-40 mt-4">

                        <button className="p-2 text-black rounded" onClick={handlePreviousShirt}>
                            <FaAngleLeft size={30} />
                        </button>


                        <a href="https://www.gothmoneywear.com/shop">
                            <button className="w-24 h-10 md:w-24 md:h-8 lg:w-28 lg:h-10 bg-[#EC1C23] text-[#fff] rounded mt-2">
                                buy
                            </button>
                        </a>
                        <a>
                            <button className="p-2 text-black rounded" onClick={handleNextShirt}>
                                <FaAngleRight size={30} />
                            </button>
                        </a>

                    </div>
                    <div className="flex justify-center mt-20">
                        <a href="https://www.instagram.com/gothmoneyrcrds/" target="_blank" rel="noopener noreferrer">
                            <button>
                                <FaTwitter className="mx-2 text-white bg-black rounded-md" size={30} />
                            </button>
                        </a>

                        <a href="https://www.instagram.com/gothmoneyrcrds/" target="_blank" rel="noopener noreferrer">
                            <button>
                                <FaInstagram className="mx-2 text-white bg-black rounded-md" size={30} />
                            </button>
                        </a>
                    </div>
                </div>
            </div>

        </>
    )
}