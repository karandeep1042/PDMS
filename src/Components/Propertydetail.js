import React, { useState } from 'react'
import css from './assets/css/propertydetail.module.css'


export default function Propertydetail() {

  const [showform, setshowform] = useState();
  const [showoverlay, setoverlay] = useState();

  return (
    <section>
      <div className={css.maincontainer}>
        <div className={`${showoverlay}`}>

        </div>
        <div className={css.parentcontainer}>
          <div className={`${css.contactformbox} ${showform}`} >
            <span className="icon-closee" onClick={() => { setshowform(); setoverlay() }} >
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

          <div className={css.container1}>
            <div className={css.containerprice}>
              <p>₹ 14.50 Cr </p><span>EMI - ₹6.54L</span>
            </div>
            <div className={css.containerhead}>
              <p>4 BHK Flat For Sale in Oberoi Sky Gardens, <span>Andheri West, Mumbai</span></p>
            </div>
            <div className={css.propertyimagecontainer}>
              <img src="https://img.staticmb.com/mbphoto/property/cropped_images/2023/Nov/23/Photo_h600_w900/70014161_3_xterior_600_900.jpg" alt="" />
              <div className={css.moreimages}>
                <div className={css.moreimageitem}>
                  <img src="https://img.staticmb.com/mbphoto/property/cropped_images/2023/Nov/23/Photo_h300_w450/70014161_2_ivingRoom_300_450.jpeg" alt="" />
                </div>
                <div className={css.moreimageitem}>
                  <img src="https://img.staticmb.com/mbphoto/property/cropped_images/2023/Nov/23/Photo_h300_w450/70014161_5_assage_300_450.jpeg" alt="" style={{ borderTopRightRadius: "15px" }} />
                </div>
                <div className={css.moreimageitem}>
                  <img src="https://img.staticmb.com/mbphoto/property/cropped_images/2023/Nov/23/Photo_h300_w450/70014161_16_edroom31_300_450.jpeg" alt="" />
                </div>
                <div className={css.moreimageitem}>
                  <img src="https://img.staticmb.com/mbphoto/property/cropped_images/2022/Jan/07/Photo_h300_w450/58857575_12_64530005_631710491317754_606816985015270718_n_300_450.jpg" alt="" style={{ borderBottomRightRadius: "15px" }} />
                </div>
              </div>
            </div>
            <div className={css.propertydetailscontainer}>
              <div className={css.detailitem}>
                <div className={css.itemlogo}>
                  <i class="fa-solid fa-flag"></i>
                </div>
                <div className={css.iteminfo}>
                  <div className={css.detailitemhead}>
                    <p>Carpet Area</p>
                  </div>
                  <div className={css.detailitemdesc}>
                    <p>3000 sqft</p>
                  </div>
                </div>
              </div>
              <div className={css.detailitem}>
                <div className={css.itemlogo}>
                  <i class="fa-solid fa-person"></i>
                </div>
                <div className={css.iteminfo}>
                  <div className={css.detailitemhead}>
                    <p>Developer</p>
                  </div>
                  <div className={css.detailitemdesc}>
                    <p>Oberoi Realty Ltd.</p>
                  </div>
                </div>
              </div>
              <div className={css.detailitem}>
                <div className={css.itemlogo}>
                  <i class="fa-solid fa-diagram-project"></i>
                </div>
                <div className={css.iteminfo}>
                  <div className={css.detailitemhead}>
                    <p>Project</p>
                  </div>
                  <div className={css.detailitemdesc}>
                    <p>Oberoi Sky Gardens</p>
                  </div>
                </div>
              </div>
              <div className={css.detailitem}>
                <div className={css.itemlogo}>
                  <i class="fa-solid fa-stairs"></i>
                </div>
                <div className={css.iteminfo}>
                  <div className={css.detailitemhead}>
                    <p>Floor</p>
                  </div>
                  <div className={css.detailitemdesc}>
                    <p>10 (Out of 20 Floors)</p>
                  </div>
                </div>
              </div>
              <div className={css.detailitem}>
                <div className={css.itemlogo}>
                  <i class="fa-solid fa-money-bill"></i>
                </div>
                <div className={css.iteminfo}>
                  <div className={css.detailitemhead}>
                    <p>Transaction Type</p>
                  </div>
                  <div className={css.detailitemdesc}>
                    <p>Resale</p>
                  </div>
                </div>
              </div>
              <div className={css.detailitem}>
                <div className={css.itemlogo}>
                  <i class="fa-solid fa-question"></i>
                </div>
                <div className={css.iteminfo}>
                  <div className={css.detailitemhead}>
                    <p>Status</p>
                  </div>
                  <div className={css.detailitemdesc}>
                    <p>Ready to Move</p>
                  </div>
                </div>
              </div>
              <div className={css.detailitem}>
                <div className={css.itemlogo}>
                  <i class="fa-solid fa-person-shelter"></i>
                </div>
                <div className={css.iteminfo}>
                  <div className={css.detailitemhead}>
                    <p>Additional Rooms</p>
                  </div>
                  <div className={css.detailitemdesc}>
                    <p>1 Store Room</p>
                  </div>
                </div>
              </div>
              <div className={css.detailitem}>
                <div className={css.itemlogo}>
                  <i class="fa-solid fa-location-arrow"></i>
                </div>
                <div className={css.iteminfo}>
                  <div className={css.detailitemhead}>
                    <p>Facing</p>
                  </div>
                  <div className={css.detailitemdesc}>
                    <p>North - East</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
          <div className={css.container2}>
            <div className={css.contacttitle}>
              <p>Contact Owner</p>
            </div>
            <div className={css.contactmobileno}>
              <p>Jay Singhania <span>+91-8XXXXXXXXX</span></p>
            </div>
            <div className={css.contactbtn} onClick={() => { setshowform(css.activeee); setoverlay(css.overlay) }}>
              <p>Get Phone No.</p>
            </div>
          </div>
          <div className={css.container3}>
            <div className={css.container3parent}>

              <div className={css.container3head}>
                <p>More Details</p>
              </div>
              <div className={css.container3detailcontainer}>
                <div className={css.detailtitlecontainer3}>
                  <p>Price Breakup</p>
                </div>
                <div className={css.detaildesccontainer3}>
                  <p>₹ 4.50 Cr</p>
                </div>
              </div>
              <div className={css.container3detailcontainer}>
                <div className={css.detailtitlecontainer3}>
                  <p>Booking Amount</p>
                </div>
                <div className={css.detaildesccontainer3}>
                  <p>₹ 5000000</p>
                </div>
              </div>
              <div className={css.container3detailcontainer}>
                <div className={css.detailtitlecontainer3}>
                  <p>Address</p>
                </div>
                <div className={css.detaildesccontainer3}>
                  <p>Tivari, Naigaon East, Taluka -Vasai, District- Palghar, Naigaon East, Mumbai - Mira Road and Beyond, Maharashtra</p>
                </div>
              </div>
              <div className={css.container3detailcontainer}>
                <div className={css.detailtitlecontainer3}>
                  <p>Landmarks</p>
                </div>
                <div className={css.detaildesccontainer3}>
                  <p>Near Don Bosco School</p>
                </div>
              </div>
              <div className={css.container3detailcontainer}>
                <div className={css.detailtitlecontainer3}>
                  <p>Furnishing</p>
                </div>
                <div className={css.detaildesccontainer3}>
                  <p>Semi - Furnished</p>
                </div>
              </div>
              <div className={css.container3detailcontainer}>
                <div className={css.detailtitlecontainer3}>
                  <p>Flooring</p>
                </div>
                <div className={css.detaildesccontainer3}>
                  <p>Vitrfied</p>
                </div>
              </div>
              <div className={css.container3detailcontainer}>
                <div className={css.detailtitlecontainer3}>
                  <p>Loan Offered</p>
                </div>
                <div className={css.detaildesccontainer3}>
                  <p>Estimated EMI: ₹118041</p>
                </div>
              </div>
            </div>
          </div>
          <div className={css.container4}>
            <div className={css.container4head}>
              <p>Amenities</p>
            </div>
            <div className={css.container4items}>
              <div className={css.container4item}>
                <i class="fa-regular fa-lightbulb"></i>
                <p>Power Back Up</p>
              </div>
              <div className={css.container4item}>
                <i class="fa-solid fa-elevator"></i>
                <p>Elevator</p>
              </div>
              <div className={css.container4item}>
                <i class="fa-solid fa-shield"></i>
                <p>Security Guard</p>
              </div>
              <div className={css.container4item}>
                <i class="fa-solid fa-dumbbell"></i>
                <p>Gymnasium</p>
              </div>
              <div className={css.container4item}>
                <i class="fa-solid fa-person-swimming"></i>
                <p>Swimming Pool</p>
              </div>
              <div className={css.container4item}>
                <i class="fa-solid fa-car"></i>
                <p>Parking</p>
              </div>
              <div className={css.container4item}>
                <i class="fa-solid fa-video"></i>
                <p>CCTV Camera</p>
              </div>
              <div className={css.container4item}>
                <i class="fa-solid fa-wifi"></i>
                <p>Wifi Connectivity</p>
              </div>
              <div className={css.container4item}>
                <i class="fa-solid fa-phone"></i>
                <p>Intercom Facility</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
