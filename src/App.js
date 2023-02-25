
import BeachPage from "./components/Beachpage";
import MountainPage from "./components/Montainpage";


import BirdPage from "./components/Birdpage";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import FoodPage from "./components/Foodpage";
import SearchPage from "./components/Searchpage";




const App=()=>{
    return(
        <div id="main">


         <BrowserRouter>
         <Routes>


            <Route path="/" element={<SearchPage/>}/>
            <Route path="mountain" element={<MountainPage/>}/>
            <Route path="bird" element={<BirdPage/>}/>
            <Route path="food" element={<FoodPage/>} />
            <Route path="beach" element={<BeachPage/>}/>

            
         </Routes>
         </BrowserRouter>
          
        </div>
    )

}

export default App;