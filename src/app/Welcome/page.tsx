import Image from "next/image";

export default function Welcome(){
       return(
    <>
            <div className="w-5/6 m-auto flex items-center">
                <div className="w-1/4 p-4 pl-0">
                    <div className="mb-8"><Image className="w-full rounded-tl-[40px] rounded-br-[40px]" src="/images/banner3.png"  width="0" height="0" sizes="100vw"  alt="" /></div>
                    <div><Image src="/images/banner1.png" className="w-full rounded-tr-[40px] rounded-bl-[40px]"   width="0" height="0" sizes="100vw" alt="" /></div>
                </div>
                <div className=" w-1/4 p-4 pr-0"><Image src="/images/banner5.png" className="w-full rounded-tl-[40px] rounded-br-[40px]"   width="0" height="0" sizes="100vw" alt="" /></div>
                <div className=" w-2/4 px-20">
                    <h1 className="text-5xl mb-6">Welcome to the greatest<span className="text-[#ff22cd]"> designers conference 2024</span></h1>
                    
                    <p>Embark on a transformative journey at the <b>Design Summit</b>, an immersive convergence of creativity and innovation. Join industry pioneers, thought leaders, and visionaries as we explore the forefront of design, setting the stage for a future shaped by ingenuity and collaborative brilliance.</p>
                    {/*<p><b>Design Summit</b> is where inspiration meets execution, defining the next era of design excellence. Don't miss your chance to be part of this unparalleled experience!</p>*/}
                    <button className="px-6 py-1.5 my-4 hover:bg-sky-400 border-1 border-sky-400 rounded-3xl">Read More</button>
                </div>                
            </div>
            <div className="w-5/6 m-auto py-8">
            <h1 className=" text-5xl mb-3">Schedule</h1>
            <p>Embark on a day of knowledge and inspiration with our thoughtfully curated program.</p>
<p>From keynotes to hands-on workshops, each segment offers valuable insights and practical skills.</p>
            </div>
            </>
    )
}