import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import {
	faAngleLeft,
	faAngleRight
} from "@fortawesome/free-solid-svg-icons";
import { FaTwitter,FaFacebookF,FaInstagram } from 'react-icons/fa';
import '../globals.css'

export default function Footer(){
    return(
<div className="w-5/6 m-auto">
    <div className="columns-6 gap-4 py-24 pb-16">
    <div><Image src="/images/logo/paystock.png" width={200} height={50} alt="" /></div>
        <div><Image src="/images/logo/Flutterwave.png" width={200} height={50} alt="" /></div>
        <div><Image src="/images/logo/Hubu.png" width={200} height={50} alt="" /></div>
        <div><Image src="/images/logo/Beard.png" width={200} height={50} alt="" /></div>
        <div><Image src="/images/logo/Cognism.png" width={200} height={50} alt="" /></div>
        <div><Image src="/images/logo/Fisano.png" width={200} height={50} alt="" /></div>
    </div>

    <div className="pb-2 overflow-auto">
        <div className="flex items-center float-left w-1/2">
            <span><Image src="/images/logo.png" width={60} height={42} alt="logo" /></span>
            <span className="font-semibold text-xl ml-2 text-slate-600">Design Hub</span>
        </div>
        <div className="float-right w-1/2">
            <ul className="*:float-left *:ml-8 *:text-sm">
                <li className="text-pink-400 hover:text-pink-200"><a href="">contact@designhub.com</a></li>
                <li className="text-gray-600 hover:text-gray-200">Privacy policy</li>
                <li className="text-gray-600 hover:text-gray-200">Terms & Agreements</li>
            </ul>
        </div>
    </div>
    <div className=" clear-both overflow-auto pt-3 borde pb-4">
        <div className="float-left w-1/2 text-sm text-gray-400">
        © All rights reserved      
          </div>
        <div className="float-right w-1/2">
            <ul className="*:float-right *:mr-12">
                <li className=""><a href='https://www.facebook.com/' target='_blank'><FaFacebookF /></a></li>
                <li className=""><a href='https://x.com/' target='_blank'><FaTwitter /></a></li>
                <li className=""><a href='https://www.instagram.com/' target='_blank'><FaInstagram /></a></li>
            </ul>
        </div>
    </div>

</div>

            )
            }
