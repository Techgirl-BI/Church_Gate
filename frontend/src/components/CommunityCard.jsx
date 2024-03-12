import React from 'react';
import { FaRegArrowAltCircleRight } from "react-icons/fa";

const community = [{
    name: "ADULTS",
    link: "",
    image: "https://faithma.org/wp-content/uploads/2022/09/IMG_0601.jpg",
    description: "Community is a community of people who share their knowledge and expertise with the Church of Jesus Christ of Latter-day Saints.",
},
{
    name: "STUDENTS",
    link: "",
    image: "https://faithma.org/wp-content/uploads/2022/08/DSC_0694.jpg",
    description: "Community is a community of people who share their knowledge and expertise with the Church of Jesus Christ of Latter-day Saints.",
},
{
    name: "FAITHKIDS",
    link: "",
    image: "https://faithma.org/wp-content/uploads/2022/04/levelup2022-8352-2048x1365.jpg",
    description: "Community is a community of people who share their knowledge and expertise with the Church of Jesus Christ of Latter-day Saints.",
}];

const CommunityCard = () => {
    return (
        <div className='flex w-4/5 mx-auto'>
            {community.map((community, index) => (
                <div key={index} className='hover:scale-110 transform transition-transform duration-300 w-1/2 mr-9 bg-gray-100 relative'>
                    <img src={community.image} width='500' alt={community.name} />
                    <h1 className='text-left font-bold text-2xl pl-9 pt-4 pb-5'>{community.name}</h1>
                    <p className='text-xl pl-9'>{community.description}</p>
                    <div className=' mx-96 mb-4 mr-4 w-fit'>
                        <FaRegArrowAltCircleRight className='text-blue-500 hover:text-blue-600 h-8 w-8' />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CommunityCard;
