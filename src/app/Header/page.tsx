import Image from "next/image";

export default function Header(){

    return(
            
            <div className="w-5/6 py-3 flex items-center">
                <div className="flex items-center float-left w-2/5">
                    <span><Image src="/images/logo.png" width={60} height={42} alt="logo" /></span>
                    <span className="text-xl ml-2 text-black mondaFont">Design Hub</span>
                </div>
                <div className="h-full float-right w-3/5">
                    <ul className="h-full flex items-center float-right *:px-2 *:py-1 *:float-left *:text-black *:ml-6 *:cursor-pointer">
                        <li className="hover:text-yellow-400 text-black">Presentation</li>
                        <li className="hover:text-yellow-400">Schedule</li>
                        <li className="hover:text-yellow-400">Speakers</li>
                        <li className="hover:text-yellow-400">Workshops</li>
                        <li className="border border-slate-600 hover:bg-yellow-400 hover:border-yellow-400 rounded-2xl">Contact Us</li>
                    </ul>
                </div>
            </div>
    )
}