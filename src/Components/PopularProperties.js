import React from 'react'
import Slider from "react-slick";
import './assets/css/carousel.css'
import { Link } from 'react-router-dom';

export default function PopularProperties() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        innerWidth: 1,
        slidesToShow: 4,
        slidesToScroll: 1,
        variableWidth: true,
        autoplay: true,
        autoplaySpeed: 3000
    };

    const arraydata = [
        {
            img: 'https://img.staticmb.com/mbphoto/property/cropped_images/2023/Sep/10/Photo_h180_w240/68812175_7_PropertyImage1694357755692_180_240.jpg',
            title: '2 BHK Flat',
            price: '2.10 Cr',
            location: 'Borivali West, Mumbai'
        },
        {
            img: 'https://img.staticmb.com/mbphoto/property/cropped_images/2023/Apr/20/Photo_h180_w240/66632233_8_PropertyImage1682000261368_180_240.jpg',
            title: '2 BHK Flat',
            price: '2.10 Cr',
            location: 'Borivali West, Mumbai'
        },
        {
            img: 'https://img.staticmb.com/mbphoto/property/cropped_images/2023/Aug/31/Photo_h180_w240/68803023_1_PropertyImage1693476875036_180_240.jpg',
            title: '2 BHK Flat',
            price: '2 Cr',
            location: 'Andheri East, Mumbai'
        },
        {
            img: 'https://img.staticmb.com/mbphoto/property/cropped_images/2023/Sep/10/Photo_h180_w240/68812175_7_PropertyImage1694357755692_180_240.jpg',
            title: '1 BHK Flat',
            price: '57.5 Lac',
            location: 'Kashimira, Mumbai'
        },
        {
            img: 'https://img.staticmb.com/mbphoto/property/cropped_images/2023/Jul/01/Photo_h180_w240/67695751_5_PropertyImage1688212611365_180_240.jpg',
            title: '2 BHK Flat',
            price: '2.25 Cr',
            location: 'Goregaon West, Mumbai'
        },
    ]

    return (
        <section>
            <div className="maincarousel">
                <p className="firstcarouselhead" style={{ fontFamily: 'Verdana', fontWeight: '700', fontSize: '1.5rem', color: '#2f2fa2' }}>Popular Properties</p>
                <div className="carouselcontainer">
                    <Slider {...settings}>
                        {
                            arraydata.map((item, index) => (
                                <>
                                    <div className="carouselparent1">

                                        <div className="carouselparent" key={index}>
                                            <div className="image">
                                                <img src={item.img} alt="" style={{ borderTopLeftRadius: '15px', borderTopRightRadius: '15px' }} />
                                            </div>
                                            <div className="flatdetails">
                                                <p>{item.title}</p>
                                                <p>₹{item.price}</p>
                                                <p>{item.location}</p>
                                                <Link to='/propertydetail'>
                                                    <button className='enquirebtn'>View info</button>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            ))
                        }
                    </Slider>
                </div>
            </div>
        </section>
    )
}
