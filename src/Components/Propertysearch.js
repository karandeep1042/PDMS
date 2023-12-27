import React from 'react'
import './assets/css/propertysearch.css'
import { Link } from 'react-router-dom'
import { useRef } from 'react';

export default function Propertysearch() {
    const overlayy = useRef(null);
    const contactform_box = useRef(null);
    return (
        <section>
            <div className="mainpropertylistcontainer">
                <div className="contactform-box " ref={contactform_box}>
                    <span className="icon-closee" onClick={() => { contactform_box.current.classList.remove('activeee'); overlayy.current.classList.remove('overlay'); }}>
                        <i class="fa-solid fa-xmark"></i>
                    </span>
                    <h2>Enquiry</h2>
                    <form action="">
                        <div className="contactinput-box">
                            <label>Your Name</label>
                            <div className="logoandinput">
                                <span className="icon"><i class="fa-solid fa-user"></i></span>
                                <input type="text" required='true' />
                            </div>
                        </div>
                        <div className="contactinput-box">
                            <label>Your Message</label>
                            <div className="logoandinput">
                                <span className="icon"><i class="fa-solid fa-envelope"></i></span>
                                <textarea type="text" required='true' />
                            </div>
                        </div>
                        <button className='contactformbtn' type="submit">Send</button>
                    </form>
                </div>
                <div className="" ref={overlayy}>

                </div>

                <div className="propertylistcontainer">
                    <div className="filtercontainer">
                        <div className="filtersearchcontainer">
                            <div className="filtersearchcity">
                                <div className="filtersearchcityinput">
                                    <input type="text" name="" id="" placeholder='Search City' />
                                </div>
                                <div className="filtersearchcitybtn">
                                    <i class="fa-solid fa-magnifying-glass"></i>
                                </div>
                            </div>
                        </div>
                        <div className="filterselectlist">
                            <div className="searchfilterhead">
                                <p>Filter</p>
                            </div>
                            <div className="filterselectcontainer">
                                <div className="filterbyflatcontainer">
                                    <div className="filtercontainerhead">
                                        <p>Flat</p>
                                    </div>
                                    <div className="filterchecklist">
                                        <div className="filterchecklistitem"><input type="checkbox" name="" id="" value='' /><p>1RK</p></div>
                                        <div className="filterchecklistitem"><input type="checkbox" name="" id="" value='' /><p>1BHK</p></div>
                                        <div className="filterchecklistitem"><input type="checkbox" name="" id="" value='' /><p>2BHK</p></div>
                                        <div className="filterchecklistitem"><input type="checkbox" name="" id="" value='' /><p>3BHK</p></div>
                                        <div className="filterchecklistitem"><input type="checkbox" name="" id="" value='' /><p>4BHK</p></div>
                                        <div className="filterchecklistitem"><input type="checkbox" name="" id="" value='' /><p>5BHK</p></div>
                                        <div className="filterchecklistitem"><input type="checkbox" name="" id="" value='' /><p>5BHK+</p></div>
                                        {/* <div className="filterchecklistitem"><input type="checkbox" name="" id="" value=''/><p>1BHK</p></div> */}
                                    </div>
                                </div>
                                <div className="filterbypricecontainer">
                                    <div className="filtercontainerhead">
                                        <p>Price</p>
                                    </div>
                                    <div className="filterchecklist">
                                        <div className="filterchecklistitem"><input type="checkbox" name="" id="" value='' /><p>Below 10L</p></div>
                                        <div className="filterchecklistitem"><input type="checkbox" name="" id="" value='' /><p>10L 20L</p></div>
                                        <div className="filterchecklistitem"><input type="checkbox" name="" id="" value='' /><p>20L - 40L</p></div>
                                        <div className="filterchecklistitem"><input type="checkbox" name="" id="" value='' /><p>40L - 60L</p></div>
                                        <div className="filterchecklistitem"><input type="checkbox" name="" id="" value='' /><p>60L - 80L</p></div>
                                        <div className="filterchecklistitem"><input type="checkbox" name="" id="" value='' /><p>80L - 1Cr</p></div>
                                        <div className="filterchecklistitem"><input type="checkbox" name="" id="" value='' /><p>1Cr+</p></div>
                                    </div>
                                </div>
                                <div className="filterbysortcontainer">
                                    <div className="filtercontainerhead">
                                        <p>Sort By</p>
                                    </div>
                                    <div className="filterchecklist">
                                        <div className="filterchecklistitemsort"><input type="checkbox" name="" id="" value='' /><p>Price : Low to High</p></div>
                                        <div className="filterchecklistitemsort"><input type="checkbox" name="" id="" value='' /><p>Price : High to Low</p></div>
                                        <div className="filterchecklistitemsort"><input type="checkbox" name="" id="" value='' /><p>Rating </p></div>
                                        <div className="filterchecklistitemsort"><input type="checkbox" name="" id="" value='' /><p>Flat Size : Low to High</p></div>
                                        <div className="filterchecklistitemsort"><input type="checkbox" name="" id="" value='' /><p>Flat Size : High to Low</p></div>
                                    </div>
                                </div>
                            </div>
                            <div className="filterapplybtn">
                                <Link to='/propertylist'>
                                    <p>Apply Filters</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="propertysearchlistcontainer">
                        <div className="searchlistitemcontainer">
                            <div className="listitemimganddetail">
                                <div className="listitemimage">
                                    <img src='https://img.staticmb.com/mbphoto/property/cropped_images/2023/Jul/30/Photo_h300_w450/68380071_13_PropertyImage251-07805429999996_300_450.jpg' />
                                </div>
                                <div className="listitemdetails">
                                    <div className="itemhead">
                                        <p>2BHK Apartment for Sale in Mira Road East Mumbai</p>
                                    </div>
                                    <div className="detailbox">
                                        <div className="detailboxchild">
                                            <i class="fa-solid fa-flag"></i>
                                            <div className="detailboxchildinfo">
                                                <p className='subboxtitle'>CARPET AREA</p>
                                                <p className='subboxdesc'>600 sqft</p>
                                            </div>
                                        </div>
                                        <div className="detailboxchild">
                                            <i class="fa-regular fa-building"></i>
                                            <div className="detailboxchildinfo">
                                                <p className='subboxtitle'>CARPET AREA</p>
                                                <p className='subboxdesc'>600 sqft</p>
                                            </div>
                                        </div>
                                        <div className="detailboxchild">
                                            <i class="fa-solid fa-stairs"></i>
                                            <div className="detailboxchildinfo">
                                                <p className='subboxtitle'>FLOOR</p>
                                                <p className='subboxdesc'>4 out of 9</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="itemdesc">
                                        <p>Owner : Ajay</p>
                                        <p >Peaceful residential property, ample space in building complex for children play, Garden</p>
                                    </div>
                                </div>
                            </div>
                            <div className="listitembtncontainer">
                                <div className="listitemprice">
                                    <p>₹ 1.03 Cr</p>
                                </div>
                                <div className="listitembuttons">
                                    <div className="listitemcontactowner" onClick={() => { overlayy.current.classList.add('overlay'); contactform_box.current.classList.add('activeee') }}  >
                                        <p>Contact Owner</p>
                                    </div>
                                    <div className="listitemgetphone">
                                        <Link to='/propertydetail'>
                                            <p>View Info</p>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="searchlistitemcontainer">
                            <div className="listitemimganddetail">
                                <div className="listitemimage">
                                    <img src='https://img.staticmb.com/mbphoto/property/cropped_images/2023/Jul/30/Photo_h300_w450/68380071_13_PropertyImage251-07805429999996_300_450.jpg' height='169px' width='158px' style={{ borderRadius: '20px' }} />
                                </div>
                                <div className="listitemdetails">
                                    <div className="itemhead">
                                        <p>2BHK Apartment for Sale in Mira Road East Mumbai</p>
                                    </div>
                                    <div className="detailbox">
                                        <div className="detailboxchild">
                                            <i class="fa-solid fa-flag"></i>
                                            <div className="detailboxchildinfo">
                                                <p className='subboxtitle'>CARPET AREA</p>
                                                <p className='subboxdesc'>600 sqft</p>
                                            </div>
                                        </div>
                                        <div className="detailboxchild">
                                            <i class="fa-regular fa-building"></i>
                                            <div className="detailboxchildinfo">
                                                <p className='subboxtitle'>CARPET AREA</p>
                                                <p className='subboxdesc'>600 sqft</p>
                                            </div>
                                        </div>
                                        <div className="detailboxchild">
                                            <i class="fa-solid fa-stairs"></i>
                                            <div className="detailboxchildinfo">
                                                <p className='subboxtitle'>FLOOR</p>
                                                <p className='subboxdesc'>4 out of 9</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="itemdesc">
                                        <p>Owner : Ajay</p>
                                        <p >Peaceful residential property, ample space in building complex for children play, Garden</p>
                                    </div>
                                </div>
                            </div>
                            <div className="listitembtncontainer">
                                <div className="listitemprice">
                                    <p>₹ 1.03 Cr</p>
                                </div>
                                <div className="listitembuttons">
                                    <div className="listitemcontactowner">
                                        <p>Contact Owner</p>
                                    </div>
                                    <div className="listitemgetphone">
                                        <Link to='/propertydetail'>
                                            <p>View Info</p>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="searchlistitemcontainer">
                            <div className="listitemimganddetail">
                                <div className="listitemimage">
                                    <img src='https://img.staticmb.com/mbphoto/property/cropped_images/2023/Jul/30/Photo_h300_w450/68380071_13_PropertyImage251-07805429999996_300_450.jpg' height='169px' width='158px' style={{ borderRadius: '20px' }} />
                                </div>
                                <div className="listitemdetails">
                                    <div className="itemhead">
                                        <p>2BHK Apartment for Sale in Mira Road East Mumbai</p>
                                    </div>
                                    <div className="detailbox">
                                        <div className="detailboxchild">
                                            <i class="fa-solid fa-flag"></i>
                                            <div className="detailboxchildinfo">
                                                <p className='subboxtitle'>CARPET AREA</p>
                                                <p className='subboxdesc'>600 sqft</p>
                                            </div>
                                        </div>
                                        <div className="detailboxchild">
                                            <i class="fa-regular fa-building"></i>
                                            <div className="detailboxchildinfo">
                                                <p className='subboxtitle'>CARPET AREA</p>
                                                <p className='subboxdesc'>600 sqft</p>
                                            </div>
                                        </div>
                                        <div className="detailboxchild">
                                            <i class="fa-solid fa-stairs"></i>
                                            <div className="detailboxchildinfo">
                                                <p className='subboxtitle'>FLOOR</p>
                                                <p className='subboxdesc'>4 out of 9</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="itemdesc">
                                        <p>Owner : Ajay</p>
                                        <p >Peaceful residential property, ample space in building complex for children play, Garden</p>
                                    </div>
                                </div>
                            </div>
                            <div className="listitembtncontainer">
                                <div className="listitemprice">
                                    <p>₹ 1.03 Cr</p>
                                </div>
                                <div className="listitembuttons">
                                    <div className="listitemcontactowner">
                                        <p>Contact Owner</p>
                                    </div>
                                    <div className="listitemgetphone">
                                        <Link to='/propertydetail'>
                                            <p>View Info</p>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="searchlistitemcontainer">
                            <div className="listitemimganddetail">
                                <div className="listitemimage">
                                    <img src='https://img.staticmb.com/mbphoto/property/cropped_images/2023/Jul/30/Photo_h300_w450/68380071_13_PropertyImage251-07805429999996_300_450.jpg' height='169px' width='158px' style={{ borderRadius: '20px' }} />
                                </div>
                                <div className="listitemdetails">
                                    <div className="itemhead">
                                        <p>2BHK Apartment for Sale in Mira Road East Mumbai</p>
                                    </div>
                                    <div className="detailbox">
                                        <div className="detailboxchild">
                                            <i class="fa-solid fa-flag"></i>
                                            <div className="detailboxchildinfo">
                                                <p className='subboxtitle'>CARPET AREA</p>
                                                <p className='subboxdesc'>600 sqft</p>
                                            </div>
                                        </div>
                                        <div className="detailboxchild">
                                            <i class="fa-regular fa-building"></i>
                                            <div className="detailboxchildinfo">
                                                <p className='subboxtitle'>CARPET AREA</p>
                                                <p className='subboxdesc'>600 sqft</p>
                                            </div>
                                        </div>
                                        <div className="detailboxchild">
                                            <i class="fa-solid fa-stairs"></i>
                                            <div className="detailboxchildinfo">
                                                <p className='subboxtitle'>FLOOR</p>
                                                <p className='subboxdesc'>4 out of 9</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="itemdesc">
                                        <p>Owner : Ajay</p>
                                        <p >Peaceful residential property, ample space in building complex for children play, Garden</p>
                                    </div>
                                </div>
                            </div>
                            <div className="listitembtncontainer">
                                <div className="listitemprice">
                                    <p>₹ 1.03 Cr</p>
                                </div>
                                <div className="listitembuttons">
                                    <div className="listitemcontactowner">
                                        <p>Contact Owner</p>
                                    </div>
                                    <div className="listitemgetphone">
                                        <Link to='/propertydetail'>
                                            <p>View Info</p>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="searchlistitemcontainer">
                            <div className="listitemimganddetail">
                                <div className="listitemimage">
                                    <img src='https://img.staticmb.com/mbphoto/property/cropped_images/2023/Jul/30/Photo_h300_w450/68380071_13_PropertyImage251-07805429999996_300_450.jpg' height='169px' width='158px' style={{ borderRadius: '20px' }} />
                                </div>
                                <div className="listitemdetails">
                                    <div className="itemhead">
                                        <p>2BHK Apartment for Sale in Mira Road East Mumbai</p>
                                    </div>
                                    <div className="detailbox">
                                        <div className="detailboxchild">
                                            <i class="fa-solid fa-flag"></i>
                                            <div className="detailboxchildinfo">
                                                <p className='subboxtitle'>CARPET AREA</p>
                                                <p className='subboxdesc'>600 sqft</p>
                                            </div>
                                        </div>
                                        <div className="detailboxchild">
                                            <i class="fa-regular fa-building"></i>
                                            <div className="detailboxchildinfo">
                                                <p className='subboxtitle'>CARPET AREA</p>
                                                <p className='subboxdesc'>600 sqft</p>
                                            </div>
                                        </div>
                                        <div className="detailboxchild">
                                            <i class="fa-solid fa-stairs"></i>
                                            <div className="detailboxchildinfo">
                                                <p className='subboxtitle'>FLOOR</p>
                                                <p className='subboxdesc'>4 out of 9</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="itemdesc">
                                        <p>Owner : Ajay</p>
                                        <p >Peaceful residential property, ample space in building complex for children play, Garden</p>
                                    </div>
                                </div>
                            </div>
                            <div className="listitembtncontainer">
                                <div className="listitemprice">
                                    <p>₹ 1.03 Cr</p>
                                </div>
                                <div className="listitembuttons">
                                    <div className="listitemcontactowner">
                                        <p>Contact Owner</p>
                                    </div>
                                    <div className="listitemgetphone">
                                        <Link to='/propertydetail'>
                                            <p>View Info</p>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="searchlistitemcontainer">
                            <div className="listitemimganddetail">
                                <div className="listitemimage">
                                    <img src='https://img.staticmb.com/mbphoto/property/cropped_images/2023/Jul/30/Photo_h300_w450/68380071_13_PropertyImage251-07805429999996_300_450.jpg' height='169px' width='158px' style={{ borderRadius: '20px' }} />
                                </div>
                                <div className="listitemdetails">
                                    <div className="itemhead">
                                        <p>2BHK Apartment for Sale in Mira Road East Mumbai</p>
                                    </div>
                                    <div className="detailbox">
                                        <div className="detailboxchild">
                                            <i class="fa-solid fa-flag"></i>
                                            <div className="detailboxchildinfo">
                                                <p className='subboxtitle'>CARPET AREA</p>
                                                <p className='subboxdesc'>600 sqft</p>
                                            </div>
                                        </div>
                                        <div className="detailboxchild">
                                            <i class="fa-regular fa-building"></i>
                                            <div className="detailboxchildinfo">
                                                <p className='subboxtitle'>CARPET AREA</p>
                                                <p className='subboxdesc'>600 sqft</p>
                                            </div>
                                        </div>
                                        <div className="detailboxchild">
                                            <i class="fa-solid fa-stairs"></i>
                                            <div className="detailboxchildinfo">
                                                <p className='subboxtitle'>FLOOR</p>
                                                <p className='subboxdesc'>4 out of 9</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="itemdesc">
                                        <p>Owner : Ajay</p>
                                        <p >Peaceful residential property, ample space in building complex for children play, Garden</p>
                                    </div>
                                </div>
                            </div>
                            <div className="listitembtncontainer">
                                <div className="listitemprice">
                                    <p>₹ 1.03 Cr</p>
                                </div>
                                <div className="listitembuttons">
                                    <div className="listitemcontactowner">
                                        <p>Contact Owner</p>
                                    </div>
                                    <div className="listitemgetphone">
                                        <Link to='/propertydetail'>
                                            <p>View Info</p>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="searchlistitemcontainer">
                            <div className="listitemimganddetail">
                                <div className="listitemimage">
                                    <img src='https://img.staticmb.com/mbphoto/property/cropped_images/2023/Jul/30/Photo_h300_w450/68380071_13_PropertyImage251-07805429999996_300_450.jpg' height='169px' width='158px' style={{ borderRadius: '20px' }} />
                                </div>
                                <div className="listitemdetails">
                                    <div className="itemhead">
                                        <p>2BHK Apartment for Sale in Mira Road East Mumbai</p>
                                    </div>
                                    <div className="detailbox">
                                        <div className="detailboxchild">
                                            <i class="fa-solid fa-flag"></i>
                                            <div className="detailboxchildinfo">
                                                <p className='subboxtitle'>CARPET AREA</p>
                                                <p className='subboxdesc'>600 sqft</p>
                                            </div>
                                        </div>
                                        <div className="detailboxchild">
                                            <i class="fa-regular fa-building"></i>
                                            <div className="detailboxchildinfo">
                                                <p className='subboxtitle'>CARPET AREA</p>
                                                <p className='subboxdesc'>600 sqft</p>
                                            </div>
                                        </div>
                                        <div className="detailboxchild">
                                            <i class="fa-solid fa-stairs"></i>
                                            <div className="detailboxchildinfo">
                                                <p className='subboxtitle'>FLOOR</p>
                                                <p className='subboxdesc'>4 out of 9</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="itemdesc">
                                        <p>Owner : Ajay</p>
                                        <p >Peaceful residential property, ample space in building complex for children play, Garden</p>
                                    </div>
                                </div>
                            </div>
                            <div className="listitembtncontainer">
                                <div className="listitemprice">
                                    <p>₹ 1.03 Cr</p>
                                </div>
                                <div className="listitembuttons">
                                    <div className="listitemcontactowner">
                                        <p>Contact Owner</p>
                                    </div>
                                    <div className="listitemgetphone">
                                        <Link to='/propertydetail'>
                                            <p>View Info</p>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </section>
    )
}
