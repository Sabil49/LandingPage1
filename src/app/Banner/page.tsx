import '../globals.css'
import Image from "next/image";
import * as motion from "motion/react-client"
import { easeInOut } from 'motion';

export default function Banner(){
    const box = {
        width: 100,
        height: 100,
        backgroundColor: "#ff0088",
        borderRadius: 5,
    }
    return(            
            <div className="w-5/6 m-auto flex pb-4">
                <motion.div className="flex flex-wrap content-center items-center w-2/5 py-8 *:py-1" initial={{y:-300,opacity:0}} animate={{ y: 0,opacity:1 }}
            transition={{ duration: 0.8,ease: "easeOut" }}>
                    <div className="text-3xl font-extralight montserratFontLight">Design Summit:</div>
                    <div className="text-6xl glookFont mt-2">Unleashing</div>
                    <div className="text-8xl text-yellow-400 glookFont">Creative</div>
                    <div className="text-8xl text-yellow-400 glookFont">brilliance</div>
                    <div><span className="text-xl font-semibold montserratFont">San Francisco</span> <span className="text-sky-400 text-xl font-bold ml-1 montserratFont">March 25-27</span></div>
                    <div className="mt-4"><button className="border bg-sky-500 border-sky-500 rounded-2xl px-4  py-[6px] font-semibold">Schedule</button><button className="border rounded-2xl px-4 py-[6px] ml-4 hover:bg-blue-900 hover:border-blue-950 hover:text-white font-semibold">Learn more</button></div>
                </motion.div>
                <motion.div className="w-3/5 flex" initial={{y:300,opacity:0}} animate={{ y: 0,opacity:1 }}
            transition={{ duration: 0.8,ease: "easeOut" }}>
                    <div className="w-1/2 flex justify-end items-center">
                    <div className=" bg-yellow-400 pt-56 overflow-hidden rounded-full inline-block">
                      <Image src="/images/Image10.png" className=' scale-[1.5]' width={250} height={300} alt="logo" />
                    </div>                        
                    </div>
                    <div className="w-1/2 flex justify-center flex-wrap">
                    <div className='overflow-hidden rounded-bl-full rounded-br-full pt-10 inline-block bg-[#e89bf5]'><Image src="/images/Image7.png" width={200} height={100} alt="logo" /></div>
                    <div className=' mt-4 overflow-hidden rounded-bl-full rounded-full pt-20 inline-block bg-[#73c3f9]'><Image src="/images/Image6.png" width={200} height={100} alt="logo" /></div>
                    </div>
                </motion.div>
            </div>
    )
}