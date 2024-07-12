import { FaInstagram, FaTwitter } from "react-icons/fa"
import state from "../store";
import { useSnapshot } from "valtio";
import leftArrowImg from "/assets/arrowleft.png";
import rightArrowImg from "/assets/arrowright.png";
import buyImg from "/assets/buy.png";
import backImg from "/assets/back.png";
import logoImg from "/goth.png";

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
                        <img src={backImg} alt="left button" width={80} height={80} />
                    </button>
                </div>
                <div className="p-4 ml-auto">
                    <img src={logoImg} alt="logo" className="mr-10 mb-50 md:mr-20" width={30} height={30} />
                </div>
                <div className=" absolute top-[75%] md:top-[70%]">
                    <div className="text-center">
                        <h1 className="text-xl italic font-bold text-white md:text-2xl lg:text-3xl">{currentShirtName}</h1>
                    </div>
                    <div className="flex items-center justify-center gap-20 mt-4 md:gap-40">

                        <button className="p-2 text-black rounded" onClick={handlePreviousShirt}>

                            <img src={leftArrowImg} alt="left button" width={18} height={18} />
                        </button>


                        <a href="https://www.gothmoneywear.com/shop">
                            <button className="w-24 h-10 md:w-24 md:h-8 lg:w-28 lg:h-10 text-[#fff] rounded mt-2">
                                <img src={buyImg} alt="buy img" width={100} height={100} />
                            </button>
                        </a>
                        <a>
                            <button className="p-2 text-black rounded" onClick={handleNextShirt}>
                                <img src={rightArrowImg} alt="right button" width={18} height={18} />
                            </button>
                        </a>
                    </div>
                    <div className="flex justify-center md:pt-10">
                        <a href="https://www.instagram.com/gothmoneyrcrds/" target="_blank" rel="noopener noreferrer">
                            <button>
                                <FaTwitter className="p-2 mx-2 text-white bg-black rounded-md" size={30} />
                            </button>
                        </a>

                        <a href="https://www.instagram.com/gothmoneyrcrds/" target="_blank" rel="noopener noreferrer">
                            <button>
                                <FaInstagram className="p-2 mx-2 text-white bg-black rounded-md" size={30} />
                            </button>
                        </a>
                    </div>
                </div>
            </div>

        </>
    )
}