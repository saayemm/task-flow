import BackgroundTitle from "./components/BackgroundTitle"
import Footer from "./components/Footer"
import Header from "./components/Header"
import ItemList from "./components/ItemList"
import Sidebar from "./components/Sidebar"

function App() {
  

  return (
    <>
    <BackgroundTitle/>
     <main className="bg-slate-300 max-w-[900px] m-auto h-[70vh] rounded-r-lg overflow-hidden">
      <Header/>
      <div className="flex justify-between bg-white">
          <ItemList/>
          <Sidebar/>
      </div>
     </main>
     <Footer/>
    </>
  )
}

export default App
