'use client'
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import {
	faAngleLeft,
	faAngleRight
} from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import { FaTwitter,FaFacebookF } from 'react-icons/fa';

const testimonialList = [
	[
		{
			photo:
				"/images/Image5.png",
			name: "Mia Reynolds",
            details: 'Digital Illustrator and Visual Storyteller',
			rating: 3.5,
			content:
				"Mia Reynolds is a digital artist and illustrator renowned for her captivating visual storytelling. With a unique blend of digital techniques and traditional artistry, Mia brings imagination to life in her creations. Mia's work has been featured in art exhibitions globally, and she is a sought-after speaker at creative events. Her talks explore the fusion of technology and art, inspiring fellow creatives to push the boundaries of their craft.",
		},
		{
			photo:
				"/images/Image11.png",
			name: "Taylor Mitchell",
            details: 'Creative Director at ColorCanvas Design Studio',
			rating: 5,
			content:"Taylor Mitchell is a visionary in the world of design, serving as the Creative Director at ColorCanvas Design Studio. With a keen eye for aesthetics and a strategic approach to branding, Taylor has led numerous successful design campaigns for global brands. A passionate advocate for the power of design in storytelling, Taylor frequently speaks at design conferences, sharing insights on the intersection of creativity and brand strategy.",
		},
		{
			photo:
				"/images/Image1.png",
			name: "Olivia Harper",
            details: 'Principal Designer at CreativEdge Studio',
			rating: 4.5,
			content:
				"Olivia Harper is a highly innovative graphic designer and the principal designer at CreativEdge Studio. Known for her ability to merge aesthetics with functionality, Olivia has played a pivotal role in transforming design trends. Her work has received acclaim in the design community, and Olivia is a frequent speaker at graphic design symposiums. Through her presentations, Olivia inspires designers to think outside the box, embrace experimentation, and redefine the visual language of design.",
		},
	],
	[
		{
			photo:
				"/images/Image8.png",
			name: "Jordan Carter",
            details: 'Founder and Lead Designer at PixelCraft UX',
			rating: 4.5,
			content:
				"Jordan Carter is a trailblazer in the field of user experience (UX) and user interface (UI) design. As the founder of PixelCraft UX, Jordan has been at the forefront of creating seamless and visually appealing digital experiences. With a passion for human-centric design, Jordan shares expertise at design conferences, emphasizing the importance of user empathy and elegant design solutions in today's digital landscape.",
		},
		{
			photo:
				"/images/Image2.png",
			name: "Amanda Lee",
            details: 'UX Researcher & Human-Computer Interaction Expert',
			rating: 5,
			content:
				"Introducing Amanda Lee, our UX Researcher and Human-Computer Interaction Expert. Amanda's work is fueled by a research-driven approach to UX design, ensuring that user needs are not just considered but are at the forefront of the design process. Join Amanda as she shares the methodologies behind her insightful research, guiding the creation of truly user-centric experiences. Explore the intersection of research and design with Amanda and gain valuable perspectives on creating products.",
		},
		{
			photo:
				"/images/Image4.png",
			name: "Daniel Rodriguez",
            details: 'UI/Visual Design Specialist',
			rating: 3.5,
			content:
				"Meet Daniel Rodriguez, our UI/Visual Design Specialist, whose work transcends the ordinary. With a keen eye for visual aesthetics, Daniel transforms abstract concepts into visually stunning and user-friendly interfaces. His approach combines creativity with functionality, resulting in designs that not only catch the eye but also provide an optimal user experience. Join Daniel on a visual journey through the principles and practices that make UI design an art form.",
		},
	],
];


const TestimonialItem = ({ item }) => {
	const {  content, photo, name,details } = item;
	return (
		<div className="bg-white dark:bg-slate-800 rounded-xl h-full duration-300 p-6">
			<div className="mt-4">				
				<div>
                    <div className="relative h-[350px]">
					<div className="mr-2 absolute z-10 h-[300px]">
						<Image
							src={photo}
							alt={name}
							className="max-w-full h-auto border rounded-tl-[50px] rounded-br-[50px]"
							width="300"
                            height="400"
						/>
					</div>
                    <div className="h-[300px] w-[300px] absolute left-[20px] top-[20px] bg-yellow-400  rounded-tl-[50px] rounded-br-[50px]"></div>
					</div>
                    <div className="">
						<h5 className="text-3xl text-[#ff22cd] font-bold">{name}</h5>
					</div>
                    <div className="h-[50px]">
						<h6 className="text-lg text-[#ff22cd]">{details}</h6>
					</div>
                    <p className="my-4 h-[450px]">{content}</p>
                    <div className="flex *:flex *:rounded-full *:w-[30px] h-[30px] *:items-center *:justify-center *:bg-black *:text-white">
                        <div><FaTwitter /></div>
                        <div className=" ml-3"><FaFacebookF /></div>
                    </div>
				</div>
			</div>
		</div>
	);
};
TestimonialItem.propTypes = {
	item: PropTypes.object.isRequired,
};

export default function Speaker(){
	const [index, setIndex] = useState(0);

	const handleControl = (type) => {
		if (type === "prev") {
			setIndex(index <= 0 ? testimonialList.length - 1 : index - 1);
		} else if (type === "next") {
			setIndex(index >= testimonialList.length - 1 ? 0 : index + 1);
		}
	};
	return (
        <div className="w-5/6 m-auto pt-16">
            <h1 className="text-5xl mb-3">Meet the Speakers</h1>
            <p>Meet visionary leaders shaping the future. Our speakers share experiences and innovative ideas. Connect</p>
<p>with bright minds redefining industry boundaries.</p>
            
		<section className="ezy__testimonial20 light bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white">
			<div className="container relative">
								<div className="relative grid grid-cols-6 gap-y-6 md:gap-x-6">
					{testimonialList[index].map((item, i) => (
						<div className="col-span-6 md:col-span-3 lg:col-span-2" key={i}>
							<TestimonialItem item={item} />
						</div>
					))}
                    <button className=" absolute bottom-[40%] text-lg dark:bg-slate-800 opacity-75 hover:opacity-100 w-12 h-12 flex justify-start items-center rounded-full" onClick={() => handleControl("prev")}>
								<FontAwesomeIcon icon={faAngleLeft} />
							</button>
							<button className=" absolute bottom-[40%] right-0 text-lg dark:bg-slate-800 opacity-75 hover:opacity-100 w-12 h-12 flex justify-end items-center rounded-full" onClick={() => handleControl("next")}>
								<FontAwesomeIcon icon={faAngleRight} />
							</button>
				</div>
			</div>
		</section>
        </div>
	);
};

