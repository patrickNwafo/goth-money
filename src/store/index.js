
import { proxy } from "valtio";

const state = proxy({
    intro: "true",
    currentPage: "home",
    currentModelIndex: 0,
    color: "#EFBD48",
});

export default state;