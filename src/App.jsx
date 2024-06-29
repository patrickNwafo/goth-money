import Home from "./pages/Home"
import { useSnapshot } from "valtio";
import state from "./store";
import Canvas from './canvas'


function App() {
  const snap = useSnapshot(state);

  return (
    <>
      <audio autoPlay loop>
        <source src="../../public/goth.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <main className="relative w-full h-screen overflow-hidden transition-all ease-in bg-black">
        {snap.currentPage === "home" && <Home />}

        {snap.currentPage === "selection" && <Canvas scaleValue={0.2} />}
      </main>
    </>


  )
}

export default App
