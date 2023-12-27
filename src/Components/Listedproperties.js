import React from 'react'
import css from './assets/css/listedproperties.module.css'
import { Link } from 'react-router-dom'

export default function Listedproperties() {
    return (
        <div className={css.maincontainer}>
            <div className={css.containerhead}>
                <div className={css.containertitle}>
                    <p>Listed Properties</p>
                </div>
                <div className={css.addpropertybtn}>
                    <Link to='/addproperty' >
                        <i class="fa-solid fa-plus"></i>
                        <p>Add Property</p>
                    </Link>
                </div>
            </div>
            <div className={css.propertiescontainer}>
                <div className={css.propertyitem}>
                    <div className={css.propertyimage}>
                        <img src="https://img.staticmb.com/mbphoto/property/cropped_images/2023/Aug/05/Photo_h180_w240/68474505_1_1691231948431-3421_180_240.jpg" alt="" />
                    </div>
                    <div className={css.propertydetails}>
                        <div className={css.propertytitle}>
                            <p className={css.flatsize}>2 BHK Flat</p>
                            <p className={css.flatprice}>₹ 7.50 Cr | 2300 sqft</p>
                        </div>
                        <div className={css.propertydescription}>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque asperiores, sunt quidem, dolores hic voluptates accusantium minus dolorem nisi error at, beatae iure non?</p>
                        </div>
                        <div className={css.viewpropertybtn}>
                            <Link to='/propertydetail'>
                                <i class="fa-solid fa-caret-right"></i>
                                <p>View Property</p>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className={css.propertyitem}>
                    <div className={css.propertyimage}>
                        <img src="https://img.staticmb.com/mbphoto/property/cropped_images/2023/Aug/05/Photo_h180_w240/68474505_1_1691231948431-3421_180_240.jpg" alt="" />
                    </div>
                    <div className={css.propertydetails}>
                        <div className={css.propertytitle}>
                            <p className={css.flatsize}>2 BHK Flat</p>
                            <p className={css.flatprice}>₹ 7.50 Cr | 2300 sqft</p>
                        </div>
                        <div className={css.propertydescription}>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque asperiores, sunt quidem, dolores hic voluptates accusantium minus dolorem nisi error at, beatae iure non?</p>
                        </div>
                        <div className={css.viewpropertybtn}>
                            <Link to='/propertydetail'>
                                <i class="fa-solid fa-caret-right"></i>
                                <p>View Property</p>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className={css.propertyitem}>
                    <div className={css.propertyimage}>
                        <img src="https://img.staticmb.com/mbphoto/property/cropped_images/2023/Aug/05/Photo_h180_w240/68474505_1_1691231948431-3421_180_240.jpg" alt="" />
                    </div>
                    <div className={css.propertydetails}>
                        <div className={css.propertytitle}>
                            <p className={css.flatsize}>2 BHK Flat</p>
                            <p className={css.flatprice}>₹ 7.50 Cr | 2300 sqft</p>
                        </div>
                        <div className={css.propertydescription}>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque asperiores, sunt quidem, dolores hic voluptates accusantium minus dolorem nisi error at, beatae iure non?</p>
                        </div>
                        <div className={css.viewpropertybtn}>
                            <Link to='/propertydetail'>
                                <i class="fa-solid fa-caret-right"></i>
                                <p>View Property</p>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className={css.propertyitem}>
                    <div className={css.propertyimage}>
                        <img src="https://img.staticmb.com/mbphoto/property/cropped_images/2023/Aug/05/Photo_h180_w240/68474505_1_1691231948431-3421_180_240.jpg" alt="" />
                    </div>
                    <div className={css.propertydetails}>
                        <div className={css.propertytitle}>
                            <p className={css.flatsize}>2 BHK Flat</p>
                            <p className={css.flatprice}>₹ 7.50 Cr | 2300 sqft</p>
                        </div>
                        <div className={css.propertydescription}>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque asperiores, sunt quidem, dolores hic voluptates accusantium minus dolorem nisi error at, beatae iure non?</p>
                        </div>
                        <div className={css.viewpropertybtn}>
                            <Link to='/propertydetail'>
                                <i class="fa-solid fa-caret-right"></i>
                                <p>View Property</p>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className={css.propertyitem}>
                    <div className={css.propertyimage}>
                        <img src="https://img.staticmb.com/mbphoto/property/cropped_images/2023/Aug/05/Photo_h180_w240/68474505_1_1691231948431-3421_180_240.jpg" alt="" />
                    </div>
                    <div className={css.propertydetails}>
                        <div className={css.propertytitle}>
                            <p className={css.flatsize}>2 BHK Flat</p>
                            <p className={css.flatprice}>₹ 7.50 Cr | 2300 sqft</p>
                        </div>
                        <div className={css.propertydescription}>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque asperiores, sunt quidem, dolores hic voluptates accusantium minus dolorem nisi error at, beatae iure non?</p>
                        </div>
                        <div className={css.viewpropertybtn}>
                            <Link to='/propertydetail'>
                                <i class="fa-solid fa-caret-right"></i>
                                <p>View Property</p>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className={css.propertyitem}>
                    <div className={css.propertyimage}>
                        <img src="https://img.staticmb.com/mbphoto/property/cropped_images/2023/Aug/05/Photo_h180_w240/68474505_1_1691231948431-3421_180_240.jpg" alt="" />
                    </div>
                    <div className={css.propertydetails}>
                        <div className={css.propertytitle}>
                            <p className={css.flatsize}>2 BHK Flat</p>
                            <p className={css.flatprice}>₹ 7.50 Cr | 2300 sqft</p>
                        </div>
                        <div className={css.propertydescription}>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque asperiores, sunt quidem, dolores hic voluptates accusantium minus dolorem nisi error at, beatae iure non?</p>
                        </div>
                        <div className={css.viewpropertybtn}>
                            <Link to='/propertydetail'>
                                <i class="fa-solid fa-caret-right"></i>
                                <p>View Property</p>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className={css.propertyitem}>
                    <div className={css.propertyimage}>
                        <img src="https://img.staticmb.com/mbphoto/property/cropped_images/2023/Aug/05/Photo_h180_w240/68474505_1_1691231948431-3421_180_240.jpg" alt="" />
                    </div>
                    <div className={css.propertydetails}>
                        <div className={css.propertytitle}>
                            <p className={css.flatsize}>2 BHK Flat</p>
                            <p className={css.flatprice}>₹ 7.50 Cr | 2300 sqft</p>
                        </div>
                        <div className={css.propertydescription}>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque asperiores, sunt quidem, dolores hic voluptates accusantium minus dolorem nisi error at, beatae iure non?</p>
                        </div>
                        <div className={css.viewpropertybtn}>
                            <Link to='/propertydetail'>
                                <i class="fa-solid fa-caret-right"></i>
                                <p>View Property</p>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className={css.propertyitem}>
                    <div className={css.propertyimage}>
                        <img src="https://img.staticmb.com/mbphoto/property/cropped_images/2023/Aug/05/Photo_h180_w240/68474505_1_1691231948431-3421_180_240.jpg" alt="" />
                    </div>
                    <div className={css.propertydetails}>
                        <div className={css.propertytitle}>
                            <p className={css.flatsize}>2 BHK Flat</p>
                            <p className={css.flatprice}>₹ 7.50 Cr | 2300 sqft</p>
                        </div>
                        <div className={css.propertydescription}>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque asperiores, sunt quidem, dolores hic voluptates accusantium minus dolorem nisi error at, beatae iure non?</p>
                        </div>
                        <div className={css.viewpropertybtn}>
                            <Link to='/propertydetail'>
                                <i class="fa-solid fa-caret-right"></i>
                                <p>View Property</p>
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
