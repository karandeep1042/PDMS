import React from 'react'
import css from './assets/css/addproperty.module.css'

export default function Addproperty() {
    return (
        <section>
            <div className={css.maincontainer}>
                <div className={css.firstcontainer}>
                    <div className={css.addpropertyhead}>
                        <p>Add property</p>
                    </div>
                    <div className={css.addpropertydetails}>
                        <div className={css.container1}>
                            <div className={css.addpropertytitle}>
                                <p>Property Title*</p>
                                <input type="text" name="title" id="title" />
                            </div>
                            <div className={css.addpropertydescription}>
                                <p>Property Description*</p>
                                <textarea type="text" name="description" id="description" rows='10' />
                            </div>
                            <div className={css.subcontainer1}>
                                <div className={css.subcontaineritem}>
                                    <p>Status</p>
                                    <select>
                                        <option value="0">Ready To Move</option>
                                        <option value="1">Under Construction</option>
                                    </select>
                                </div>
                                <div className={css.subcontaineritem}>
                                    <p>Facing</p>
                                    <select>
                                        <option value="0">North</option>
                                        <option value="1">North-east</option>
                                        <option value="2">East</option>
                                        <option value="3">South-east</option>
                                        <option value="4">South</option>
                                        <option value="5">South-west</option>
                                        <option value="6">West</option>
                                        <option value="7">North-west</option>
                                    </select>
                                </div>
                                <div className={css.subcontaineritem}>
                                    <p>Furnishing</p>
                                    <select>
                                        <option value="0">No Furnishing</option>
                                        <option value="1">Semi Furnished</option>
                                        <option value="2">Fully Furnished</option>
                                    </select>
                                </div>
                                <div className={css.subcontaineritem}>
                                    <p>Bedrooms</p>
                                    <input type="number" name="bedrooms" id="bedrooms" />
                                </div>
                                <div className={css.subcontaineritem}>
                                    <p>Bathrooms</p>
                                    <input type="number" name="bathrooms" id="bathrooms" />
                                </div>
                                <div className={css.subcontaineritem}>
                                    <p>Floors</p>
                                    <input type="number" name="Floors id=" Floors />
                                </div>
                                <div className={css.subcontaineritem}>
                                    <p>Garages</p>
                                    <input type="number" name="Garages" id="Garages" />
                                </div>
                                <div className={css.subcontaineritem}>
                                    <p>Location</p>
                                    <input type="text" name="location" id="location" />
                                </div>
                                <div className={css.subcontaineritem}>
                                    <p>Area</p>
                                    <input type="number" name="area" id="area" placeholder='sqft' />
                                </div>
                                <div className={css.subcontaineritem}>
                                    <p>Original price </p>
                                    <input type="number" name="originalprice" id="originalprice" />
                                </div>
                                <div className={css.subcontaineritem}>
                                    <p>Discounted price </p>
                                    <input type="number" name="discountedprice" id="discountedprice" />
                                </div>
                                <div className={css.subcontaineritem}>
                                    <p>Developer</p>
                                    <input type="text" name="developer" id="developer" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={css.secondcontainer}>
                    <div className={css.secondcontainerhead}>
                        Property Amenities
                    </div>
                    <div className={css.secondcontaineritems}>
                        <div className={css.secondcontaineritem}>
                            <input type="checkbox" name="powerbackup" id="" />Power Back Up
                        </div>
                        <div className={css.secondcontaineritem}>
                            <input type="checkbox" name="elevator" id="" />Elevator
                        </div>
                        <div className={css.secondcontaineritem}>
                            <input type="checkbox" name="securityguard" id="" />Security guard
                        </div>
                        <div className={css.secondcontaineritem}>
                            <input type="checkbox" name="gymnasium" id="" />Gymnasium
                        </div>
                        <div className={css.secondcontaineritem}>
                            <input type="checkbox" name="swimmingpool" id="" />Swimming Pool
                        </div>
                        <div className={css.secondcontaineritem}>
                            <input type="checkbox" name="parking" id="" />Parking
                        </div>
                        <div className={css.secondcontaineritem}>
                            <input type="checkbox" name="cctv" id="" />CCTV Camera
                        </div>
                        <div className={css.secondcontaineritem}>
                            <input type="checkbox" name="wifi" id="" />Wifi Connectivity
                        </div>
                        <div className={css.secondcontaineritem}>
                            <input type="checkbox" name="intercom" id="" />Intercom Facility
                        </div>
                    </div>
                </div>
                <div className={css.thirdcontainer}>
                    <div className={css.secondcontainerhead}>
                        Property Location
                    </div>
                    <div className={css.secondcontaineritems}>
                        <div className={css.subcontaineritem}>
                            <p>Address*</p>
                            <input type="text" name="address" id="address" placeholder='Enter Your Property Address' />
                        </div>
                        <div className={css.subcontaineritem}>
                            <p>Country</p>
                            <select>
                                <option value="0">India</option>
                                <option value="1">United States Of America</option>
                                <option value="2">United Kingdom</option>
                            </select>
                        </div>
                        <div className={css.subcontaineritem}>
                            <p>State</p>
                            <select>
                                <option value="0"></option>
                            </select>
                        </div>
                        <div className={css.subcontaineritem}>
                            <p>City</p>
                            <select>
                                <option value="0"></option>
                            </select>
                        </div>
                        <div className={css.subcontaineritem}>
                            <p>Zip/Postal Code*</p>
                            <input type="number" name="postalcode" id="postalcode" placeholder='' />
                        </div>
                        <div className={css.subcontaineritem}>
                            <p>Neighbourhood</p>
                            <input type="number" name="neighbourhood" id="neighbourhood" placeholder='' />
                        </div>
                    </div>
                </div>
                <div className={css.fourthcontainer}>
                    <div className={css.secondcontainerhead}>
                        <p>Property Images</p>
                    </div>
                    <div className={css.fourthcontaineritems}>
                        <div className={css.fourthcontaineritem}>
                            <div className={css.containeritemhead}>
                                <p>Cover Image</p>
                            </div>
                            <div className={css.itembtndiv}>
                                <button>Choose File</button>
                                <p>No file chosen</p>
                            </div>
                        </div>
                        <div className={css.fourthcontaineritem}>
                            <div className={css.containeritemhead}>
                                <p>Image 1</p>
                            </div>
                            <div className={css.itembtndiv}>
                                <button>Choose File</button>
                                <p>No file chosen</p>
                            </div>
                        </div>
                        <div className={css.fourthcontaineritem}>
                            <div className={css.containeritemhead}>
                                <p>Image 2</p>
                            </div>
                            <div className={css.itembtndiv}>
                                <button>Choose File</button>
                                <p>No file chosen</p>
                            </div>
                        </div>
                        <div className={css.fourthcontaineritem}>
                            <div className={css.containeritemhead}>
                                <p>Image 3</p>
                            </div>
                            <div className={css.itembtndiv}>
                                <button>Choose File</button>
                                <p>No file chosen</p>
                            </div>
                        </div>
                        <div className={css.fourthcontaineritem}>
                            <div className={css.containeritemhead}>
                                <p>Image 4</p>
                            </div>
                            <div className={css.itembtndiv}>
                                <button>Choose File</button>
                                <p>No file chosen</p>
                            </div>
                        </div>
                        <div className={css.fourthcontaineritem}>
                            <div className={css.containeritemhead}>
                                <p>Image 5</p>
                            </div>
                            <div className={css.itembtndiv}>
                                <button>Choose File</button>
                                <p>No file chosen</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={css.fifthcontainer}>
                    <button type="submit">Submit</button>
                </div>
            </div>
        </section>
    )
}
