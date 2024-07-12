import Home from "./pages/Home"
import { useSnapshot } from "valtio";
import state from "./store";
import Canvas from './canvas'
import { motion, AnimatePresence } from "framer-motion";



function App() {
  const snap = useSnapshot(state);

  return (
    <>
      <main className="relative h-full overflow-hidden transition-all ease-in bg-black"

      >
        <AnimatePresence>
          {snap.currentPage === "home" && (
            <motion.div
              key="home"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
            >
              <Home />
            </motion.div>
          )}

          {snap.currentPage === "selection" && (
            <motion.div
              key="selection"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 2 }}
              className="h-screen"
            >
              <Canvas scaleValue={0.2} />
            </motion.div>
          )}
        </AnimatePresence>

      </main>
    </>


  )
}

export default App
