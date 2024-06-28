
import { proxy } from "valtio";

const state = proxy({
    intro: "true",
    currentPage: "home",
    color: "#EFBD48",
    isLogoTexture: true,
    isFullTexture: false,
    logoDecal: "./goth.png",
    fullDecal: "./goth.png",
});

export default state;