import React from 'react'
import css from './assets/css/carousel2.module.css'
import { Link } from 'react-router-dom'
export default function FeaturedProjects() {

    const arraydata = [
        {
            img: 'https://cdn.staticmb.com/property/microsite/mb-banners/00746974/projectshowcase-img.jpg',
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
        // {
        //     img: 'https://img.staticmb.com/mbphoto/property/cropped_images/2023/Sep/10/Photo_h180_w240/68812175_7_PropertyImage1694357755692_180_240.jpg',
        //     title: '1 BHK Flat',
        //     price: '57.5 Lac',
        //     location: 'Kashimira, Mumbai'
        // },
        // {
        //     img: 'https://img.staticmb.com/mbphoto/property/cropped_images/2023/Jul/01/Photo_h180_w240/67695751_5_PropertyImage1688212611365_180_240.jpg',
        //     title: '2 BHK Flat',
        //     price: '2.25 Cr',
        //     location: 'Goregaon West, Mumbai'
        // },
    ]

    return (
        <section>
            <div className={css.featuredpropertymaincontainer}>
                <h2 className={css.fphead} style={{ fontFamily: 'Verdana', fontWeight: '700', fontSize: '1.5rem', color: '#2f2fa2', marginBottom: '2vh' }}>Featured Properties</h2>
                <div className={css.mainfpcontainer}>
                    <div className={css.fpcontainer1}>
                        <div className={css.fpcontainerimg}>
                            <img src="https://property.magicbricks.com/mb-microsite/3/northernhills-nrosedevelopers-mumbai/images/gallery/image4.jpg" alt="" width='100%' height='280vh ' style={{ borderTopLeftRadius: '15px', borderTopRightRadius: '15px' }} />
                        </div>
                        <div className={css.fpinfo}>
                            <div className={css.fplogo}>
                                <i className='fa-solid fa-house'></i>
                            </div>
                            <div className={css.fpdetails}>
                                <div className={css.fptitle}>
                                    <p>Northen Hills </p>
                                </div>
                                <div className={css.fpdescription}>
                                    <p>by N Rose Developers Pvt. Ltd<br />Dahisar East,Mumbai</p>
                                </div>
                            </div>
                            <div className={css.fpprice}>
                                <div className={css.fpprice2}>
                                    <p>2,3 BHK Flats<br /> <span>₹1.60 Cr</span> onwards</p>
                                </div>
                                <div className={css.fpbuttonparent}>
                                    <Link to='/propertydetail'>
                                        <div className={css.fpbutton}>
                                            <p>View Info</p>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={css.fpcontainer2}>
                        <div className={css.fpcontainerimg}>
                            <img src="https://property.magicbricks.com/mb-microsite/3/northernhills-nrosedevelopers-mumbai/images/gallery/image3.jpg" alt="" width='100%' height='280vh ' style={{ borderTopLeftRadius: '15px', borderTopRightRadius: '15px' }} />
                        </div>
                        <div className={css.fpinfo}>
                            <div className={css.fplogo}>
                                <i className='fa-solid fa-house'></i>
                            </div>
                            <div className={css.fpdetails}>
                                <div className={css.fptitle}>
                                    <p>Sourthen Hills </p>
                                </div>
                                <div className={css.fpdescription}>
                                    <p>by N Rose Developers Pvt. Ltd<br /> Colaba East,Mumbai</p>
                                </div>
                            </div>
                            <div className={css.fpprice}>

                                <div className={css.fpprice2}>
                                    <p>2,3 BHK Flats<br /> <span>₹2.50 Cr</span> onwards</p>
                                </div>
                                <div className={css.fpbuttonparent}>
                                    <Link to='/propertydetail'>
                                        <div className={css.fpbutton}>
                                            <p>View Info</p>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
