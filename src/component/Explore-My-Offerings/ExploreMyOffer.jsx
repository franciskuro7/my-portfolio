import React from 'react'
import { MyOffer, CardWrapper } from '../../styles/ExploreMyOffer'
import { RiChatSmileAiLine } from "react-icons/ri";
import { PiPaintBrushBroadBold } from "react-icons/pi";
import { FaMobileScreen } from "react-icons/fa6";
import { MdDesignServices } from "react-icons/md";
import { FiPackage } from "react-icons/fi";

import { Link } from 'react-router-dom'

const ExploreMyOffer = () => {


    return (
        <>
            <MyOffer>
                <h1>
                    Explore <span>My Offerings</span> for you
                </h1>
                <CardWrapper>

                    <div className="card">
                        <RiChatSmileAiLine className='icons'  />

                        <h2>User Experience Design</h2>
                        <p>
                            Crafting seamless and intuitive user journeys to enhance
                            engagement and satisfaction.
                        </p>
                    </div>

                    <div className="card">
                        <PiPaintBrushBroadBold className='icons'  />

                        <h2>User Interface Design</h2>
                        <p>
                            Creating visually appealing interface that combine
                            aesthetics with functionality.
                        </p>
                    </div>

                    <div className="card">
                        {/* <MdDesignServices className='icons'  /> */}
                        <img src="https://cdn.prod.website-files.com/658d3cf451ed99e77355d9b9/664ab9e9dbbaa987f01d6f77_Vectors-Wrapper.svg" className='icons' alt="" />

                        <h2> Graphic Design </h2>
                        <p>
                            Creating logos and branding for your product with a wide range of options,
                            even if you don't have a specialized designer in this field.
                        </p>
                    </div>

                    <div className="card">
                        {/* <FaMobileScreen className='icons' /> */}
                        <img src="https://cdn.prod.website-files.com/658d3cf451ed99e77355d9b9/664ab9e92168a113bc1d31d0_Vectors-Wrapper.svg" className='icons' alt="" />

                        <h2> Mobile App </h2>
                        <p>
                            Designing intuitive and user-friendly mobile applications for iOS
                            and Android platforms.
                        </p>
                    </div>

                    <div className="card">
                        {/* <PiPaintBrushBroadBold className='icons'  /> */}
                        <img src="https://cdn.prod.website-files.com/658d3cf451ed99e77355d9b9/664ab9ea2168a113bc1d31f6_Vectors-Wrapper.svg" className='icons' alt="" />
                        <h2> Responsive Web Design </h2>
                        <p>
                            Designing responsive websites for consistent user experience on all devices,
                            including landing pages, dashboards, and e-commerce.
                        </p>
                    </div>

                    <div className="card">
                        {/* <FiPackage className='icons' /> */}
                        <img src="https://cdn.prod.website-files.com/658d3cf451ed99e77355d9b9/664ab9eb70428f0a2516d8ed_Vectors-Wrapper.svg" className='icons' alt="" />

                        <h2> Product Prototype </h2>
                        <p>
                            Transforming concepts into tangible prototypes to validate ideas and
                            iterate quickly.
                        </p>
                    </div>
                </CardWrapper>
            </MyOffer>
        </>

    )
}

export default ExploreMyOffer