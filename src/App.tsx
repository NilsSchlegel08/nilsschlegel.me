import StartScreen from "./components/pages/Start/StartScreen"
import MainScreen from "./components/pages/Main/MainScreen"
import TempScreen from "./components/pages/Temp/TempScreen"

function App() {
  return (
    <>
      <section id="startSection" className="flex display-block flex-col w-screen justify-center items-center h-screen">
        <StartScreen />
      </section>
      <section id="tempSection" className="flex display-none flex-col w-screen justify-center items-center h-screen">
        <TempScreen />
      </section>
      <section id="mainSection" className="flex display-none flex-col w-screen justify-center items-center h-screen">
        <MainScreen />
      </section>
    </>
  )
}

export default App
