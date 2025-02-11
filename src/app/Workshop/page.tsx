export default function Workshop(){  
    return (
        <div className="w-5/6 m-auto mt-10 py-12">
            <h1 className="text-5xl mb-3">Workshops</h1>
            <p>Dive into hands-on learning with our diverse workshops. From practical skills to creative</p>
            <p>exploration, each session offers a unique opportunity to enhance your expertise</p>
            <div className="columns-2 gap-4 mb-4 mt-12">
               <div className=" bg-[#fad01d] rounded-2xl p-8">
                <h1 className="text-3xl mb-2 text-black">Interactive Prototyping Masterclass</h1>
                <p>
                Explore the art of interactive prototyping in this hands-on masterclass. Dive into tools like Figma and Adobe XD to create engaging prototypes that bridge the gap between design and usability. Unlock the secrets of seamless user experiences.
                </p>
                    <button className="border text-white bg-black px-6 py-1.5 my-8 border-black hover:text-black hover:bg-transparent rounded-3xl">Learn More</button>
                
               </div>
               <div className=" bg-[#8fd1fd] rounded-2xl p-8">
               <h1 className="text-3xl mb-2 text-black">Typography in UI: Beyond
               the Basics</h1>
                <p>
                
Elevate your design skills with a deep dive into advanced typography for UI. Learn how to use fonts strategically, create hierarchy, and enhance readability. Discover the impact of typography on user perception and engagement.
                </p>
                <div>
                    <button className="border text-white bg-black px-6 py-1.5 my-8 hover:bg-sky-300 border-black hover:text-black rounded-3xl">Learn More</button>
                </div>
               </div>
            </div>
            <div className="columns-2 gap-4">
            <div className=" bg-[#e89bf5] rounded-2xl p-8">
               <h1 className="text-3xl mb-2 text-black">User-Centric Wireframing Techniques</h1>
                <p>
                Delve into the art of wireframing with a focus on user-centric design. Uncover techniques to translate ideas into intuitive wireframes that prioritize user needs. Navigate the balance between simplicity and functionality for optimal usability.
                                </p>
                <div>
                    <button className="border text-white bg-black px-6 py-1.5 my-8 hover:bg-sky-300 border-black hover:text-black rounded-3xl">Learn More</button>
                </div>
               </div>
               <div className=" bg-[#fad01d] rounded-2xl p-8">
               <h1 className="text-3xl mb-2 text-black">Designing Accessible
               Interfaces for All</h1>
                <p>
                
Learn inclusive design principles for creating accessible interfaces. Explore techniques to ensure your designs cater to diverse user needs, including those with disabilities. Enhance your skills in building products that are usable by everyone.
                                </p>
                <div>
                    <button className="border text-white bg-black px-6 py-1.5 my-8 hover:bg-sky-300 border-black hover:text-black rounded-3xl">Learn More</button>
                </div>
               </div>
            </div>
        </div>
    )
}

