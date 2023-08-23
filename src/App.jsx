import BestSellerItems from "./components/BestSellerItems/BestSellerItems"
import DealWeek from "./components/DealWeak/DealWeek"
import HeaderContent from "./components/HeaderContent/HeaderContent";
import HeaderNavbar from "./components/HeaderNavbar/HeaderNavbar";
import TreidCategory from "./components/TreidCategory/TreidCategory"
import Drille from "./components/Drille/Drille"
import './all.css'
import Copy from "./components/Copy/Copy";


function App(){
    return(
        <>
        <HeaderNavbar />
        <HeaderContent />
        <BestSellerItems />
        <DealWeek />
        <TreidCategory />
        <Drille />
        <Copy />  
        </>
    )
}

export default App