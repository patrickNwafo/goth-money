
import { proxy } from "valtio";

const state = proxy({
    intro: "true",
    currentPage: "home",
    currentTextureIndex: 0,
    color: "#EFBD48",
    isLogoTexture: false,
    isFullTexture: false,
    isbirdTexture: false,
    logoDecal: "./red.png",
    fullDecal: "./goth.png",
    birdDecal: "./bird.png",
    redDecal: "./red2.png"
});

export default state;