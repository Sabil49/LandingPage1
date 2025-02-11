import '../globals.css'

export default function Readmore(){

    return(            
        <div className="w-5/6 m-auto borderImage py-8">
    <div className="grid grid-cols-2 gap-4">
        <div className="...">
            <h3 className="text-[#ff22cd] text-lg font-semibold">Friday 25 Mar</h3>
            <h1 className="text-[#ff22cd] text-4xl my-3">
                Elevating User Experiences through Design Thinking
            </h1>
            <h3 className=" font-semibold mb-3">16:30 GMT @Remote</h3>
            <p className='h-[150px]'>
                Join us for an immersive exploration of design thinking principles and their impact on user experiences. Discover innovative approaches to problem-solving and how design can elevate the user journey. Don't miss this
                opportunity to gain insights from leading designers and enhance your creative process.
            </p>
            <button className="text-white hover:bg-white bg-black px-6 py-1.5 my-8  hover:border-black hover:text-black rounded-3xl">Read More</button>
        </div>
        <div className="...">
            <h3 className="text-[#ff22cd]  text-lg font-semibold">Saturday 26 Mar</h3>
            <h1 className="text-[#ff22cd]  text-4xl my-3">
                Digital Expression: Pushing Boundaries in Creative Tech
            </h1>
            <h3 className=" font-semibold mb-3">18:00 GMT @Online</h3>
            <p className='h-[150px]'>
            Explore the intersection of technology and creativity in this dynamic conference. Learn from digital artists and tech innovators as they showcase groundbreaking projects that redefine digital expression. Unleash your creativity and discover the limitless possibilities at the forefront of digital art and technology.
            </p>
            <button className="text-white bg-black px-6 py-1.5 my-8 hover:bg-white hover:border-black hover:text-black rounded-3xl">Read More</button>
        </div>
    </div>
    <div className="grid grid-cols-2 gap-4 mt-12">
    <div className="...">
            <h3 className="text-[#ff22cd]  text-lg font-semibold">Sunday 27 Mar</h3>
            <h1 className="text-[#ff22cd]  text-4xl my-3">
            Crafting Seamless Experiences: A UX/UI Workshop
            </h1>
            <h3 className=" font-semibold mb-3">13:45 GMT @Remote</h3>
            <p className='h-[150px]'>
            Dive into the world of user experience and user interface design with hands-on activities and expert guidance. This workshop is perfect for designers and enthusiasts looking to enhance their skills. Learn practical tips, engage in interactive design exercises, and leave with a deeper understanding of creating impactful digital experiences.
            </p>
            <button className="text-white bg-black px-6 py-1.5 my-8 hover:bg-white hover:border-black hover:text-black rounded-3xl">Read More</button>
        </div>
        <div className="...">
            <h3 className="text-[#ff22cd]  text-lg font-semibold">Sunday 27 Mar</h3>
            <h1 className="text-[#ff22cd]  text-4xl my-3">
            Graphic Innovation: Redefining Visual Communication
            </h1>
            <h3 className=" font-semibold mb-3">15:30 GMT @Online</h3>
            <p className='h-[150px]'>
            Immerse yourself in a captivating discussion on the latest trends and innovations in graphic design. Explore the evolving landscape of visual communication and discover how graphic designers are reshaping the way we perceive information. Get ready to be inspired and rethink the possibilities of graphic innovation.
            </p>
            <button className="text-white bg-black px-6 py-1.5 my-8 hover:bg-white hover:border-black hover:text-black rounded-3xl">Read More</button>
        </div>
    </div>
</div>

    )
}