import Header from "./Header/page";
import Banner from "./Banner/page";
import Readmore from "./Readmore/page";
import Welcome from "./Welcome/page";
import Back from "./Back/page";
import Speaker from "./Speaker/page";
import Moments from "./Moments/page";
import Workshop from "./Workshop/page";
import Footer from "./Footer/page";
import './globals.css'

export default function Home() {
  return (
    <div className="w-full">
      <div className="w-full h-20 flex justify-center bg-white sticky top-0 border z-50 border-b-gray-400">
        <Header />
      </div>       
       <div className="w-ninety bg-[#fff]">
        <Banner />        
       <Welcome />    </div> 
       <div className="w-ninety bg-[#8fd1fd]"><Readmore /></div> 
       <div className="w-ninety bg-[#fff]"><Speaker />
       <Back />  
       <Moments />   </div>
       <div className="w-ninety bg-[#f4f3f4]"><Workshop /></div>
       <div className="w-ninety bg-[#fff]"><Footer /></div>
      
    </div>
  );
}
