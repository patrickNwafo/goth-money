
import { proxy } from "valtio";

const state = proxy({
    intro: "true",
    currentPage: "home",
    currentModelIndex: 0,

});

export default state;