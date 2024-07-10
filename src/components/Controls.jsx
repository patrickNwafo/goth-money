import { FaAngleLeft, FaAngleRight, FaInstagram, FaTwitter } from "react-icons/fa"
import state from "../store";
import { useSnapshot } from "valtio";


const shirtNames = ["Goth money gray logo", "Bird Shirt"];

export const Controls = () => {
    const snap = useSnapshot(state);

    const handleBack = () => {
        state.currentPage = "home";
    };

    const handlePreviousShirt = () => {
        state.currentModelIndex = (state.currentModelIndex - 1 + shirtNames.length) % shirtNames.length;
    };

    const handleNextShirt = () => {
        state.currentModelIndex = (state.currentModelIndex + 1) % shirtNames.length;
    };


    const currentShirtName = shirtNames[snap.currentModelIndex];

    return (
        <>
            <div className="flex flex-col items-center w-screen h-screen ">
                <div className="mr-auto ">
                    <button className="p-2 text-white rounded" onClick={handleBack}>
                        <FaAngleLeft size={30} />
                    </button>
                </div>
                <div className=" absolute top-[75%] md:top-[70%]">
                    <div className="text-center">
                        <h1 className="text-xl italic font-bold text-white md:text-2xl lg:text-3xl">{currentShirtName}</h1>
                    </div>
                    <div className="flex items-center justify-center gap-20 md:gap-40 mt-4">

                        <button className="p-2 text-black rounded" onClick={handlePreviousShirt}>
                            <FaAngleLeft size={30} />
                        </button>


                        <a href="https://www.gothmoneywear.com/shop">
                            <button className="w-24 h-10 md:w-24 md:h-8 lg:w-28 lg:h-10 hover:bg-gray-600 bg-[#EC1C23] text-[#fff] rounded mt-2">
                                buy
                            </button>
                        </a>
                        <a>
                            <button className="p-2 text-black rounded" onClick={handleNextShirt}>
                                <FaAngleRight size={30} />
                            </button>
                        </a>

                    </div>
                    <div className="flex justify-center mt-10 md:mt-20">
                        <a href="https://www.instagram.com/gothmoneyrcrds/" target="_blank" rel="noopener noreferrer">
                            <button>
                                <FaTwitter className="mx-2 p-2 text-white bg-black rounded-md" size={30} />
                            </button>
                        </a>

                        <a href="https://www.instagram.com/gothmoneyrcrds/" target="_blank" rel="noopener noreferrer">
                            <button>
                                <FaInstagram className="mx-2 p-2 text-white bg-black rounded-md" size={30} />
                            </button>
                        </a>
                    </div>
                </div>
            </div>

        </>
    )
}