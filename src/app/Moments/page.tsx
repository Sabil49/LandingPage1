'use client'
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import {
	faAngleLeft,
	faAngleRight
} from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

const testimonialList = [
	[
		{
			photo:
				"/images/Image9.png",
		},
		{
			photo:
				"/images/banner3.png",
		},
		{
			photo:
				"/images/banner4.png",
		},
	],
	[
		{
			photo:
				"/images/banner5.png",
			},
		{
			photo:
				"/images/banner2.png",
			},
		{
			photo:
				"/images/banner1.png",
		},
	],
];


const TestimonialItem = ({ item }) => {
	const { photo } = item;
	return (
		<div className=" pb-16 bg-white dark:bg-slate-800 rounded-xl h-full duration-300">
    <div className="mt-4">
        <div>
            <div className="">
                <div className="">
                    <Image src={photo} alt="" width="0" height="0" sizes="100vw" className="w-full h-[200px] rounded-xl" />
                </div>
            </div>
        </div>
    </div>
</div>

	);
};
TestimonialItem.propTypes = {
	item: PropTypes.object.isRequired,
};

export default function Moments(){
	const [index, setIndex] = useState(0);

	const handleControl = (type) => {
		if (type === "prev") {
			setIndex(index <= 0 ? testimonialList.length - 1 : index - 1);
		} else if (type === "next") {
			setIndex(index >= testimonialList.length - 1 ? 0 : index + 1);
		}
	};
	return (
        <div className="w-5/6 m-auto">
            <h1 className="text-5xl mt-16 mb-3">Moments From Our Events</h1>
            <p>Relive the magic with "Moments from our events." Capturing the essence of each experience,</p>
<p>these photos tell the stories of inspiration, connection, and creativity shared at our gatherings.</p>
            
		<section className="ezy__testimonial20 light bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white mt-4">
			<div className="container relative">
								<div className="relative grid grid-cols-6 gap-y-6 md:gap-x-6">
					{testimonialList[index].map((item, i) => (
						<div className="col-span-6 md:col-span-3 lg:col-span-2" key={i}>
							<TestimonialItem item={item} />
						</div>
					))}
                    <button className=" absolute bottom-[47%] text-lg justify-start dark:bg-slate-800 opacity-75 hover:opacity-100 w-12 h-12 left-[-13px] flex items-center rounded-full" onClick={() => handleControl("prev")}>
								<FontAwesomeIcon icon={faAngleLeft} />
							</button>
							<button className=" absolute bottom-[47%] text-lg dark:bg-slate-800 opacity-75 hover:opacity-100 w-12 h-12 flex right-[-13px] justify-end items-center rounded-full" onClick={() => handleControl("next")}>
								<FontAwesomeIcon icon={faAngleRight} />
							</button>
				</div>
			</div>
		</section>
        </div>
	);
};

