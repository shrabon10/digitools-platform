import { ToastContainer } from 'react-toastify'
import './App.css'
import Banner from './components/Banner'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Products from './components/Products'
import Start from './components/Start'
import Transparent from './components/Transparent'
import InfoStrip from './components/InfoStrip'
import TabSection from './components/TabSection'
import { useState } from 'react'
import Carts from './components/Carts/Carts'




function App() {
    const [activeTab, setActiveTab] = useState("product")
    const [carts, setCarts] = useState([])


  return (
    <>
        <Navbar carts={carts}></Navbar>

        <Banner></Banner>


        <InfoStrip></InfoStrip>
        <TabSection
        activeTab={activeTab} setActiveTab={setActiveTab}
        carts={carts}></TabSection>
        {activeTab === "product" &&
        <Products
          carts={carts} setCarts={setCarts}
        ></Products>}

      {activeTab === "cart" && <Carts carts={carts} setCarts={setCarts}></Carts>}







        <Start></Start>

        <Transparent></Transparent>
        
        <Footer></Footer>
        <ToastContainer />
    </>
  )
}

export default App
