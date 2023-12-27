import React, { useState } from 'react'
import css2 from './assets/css/accountinfo.module.css'
import css from './assets/css/enquiry.module.css'
import img from './assets/img/profilepic.jpeg'

export default function Enquiry() {

    const [showbox,setshowbox] = useState('');
    const [showoverlay,setoverlay] = useState('');

    return (
        <div className={`${css.enquirycontainer}`}>
            <div className={css2.containerhead}>
                <p>Enquiry</p>
            </div>
            <div className={`${css.messagebox} ${showbox}` } >
                <span className={`${css.iconclose}`} onClick={()=>{setshowbox(); setoverlay()}} >
                    <i class="fa-solid fa-xmark"></i>
                </span>
                <div className={`${css.messageboxchild}`}>
                    <div className={`${css.username}`}>
                        <p>From : <span>Sender Username</span></p>
                    </div>
                    <div className={`${css.messagecontainer}`}>
                        <p>Message : </p>
                        <div className={`${css.message}`}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio aperiam tenetur quisquam earum rerum provident laboriosam? Quia eligendi quo eius culpa officia laudantium veritatis illum aut nostrum, ratione, ut labore doloribus earum, maiores praesentium ipsam corrupti modi nulla? Eius consequuntur dolore quisquam nulla necessitatibus, repellat libero explicabo, error quis repellendus inventore officiis eligendi a magnam iste perferendis repudiandae animi possimus totam exercitationem molestias natus nam similique nisi? Nostrum aut animi praesentium ipsa quod illo dolores.
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${showoverlay}`}>

                </div>
            <div className={css.maincontainer} >
                <div className={css.container1}>
                    <div className={css.containerhead}>
                        <p>Sent Enquiry</p>
                    </div>
                    <div className={css.enquirystatus}>
                        <div className={css.enquiryitem} onClick={()=>{setshowbox(css.popupmsgbox); setoverlay(css.overlay)}}>
                            <div className={css.enquiryprofilepic}>
                                <div className={css.roundprofdiv}>
                                    <img src={img} alt="" />
                                </div>
                            </div>
                            <div className={css.enquiryinfo}>
                                <div className={css.enquiryusername}>
                                    <p>
                                        Karandeep Singh
                                    </p>
                                </div>
                                <div className={css.enquirymessage}>
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, quasi? Nihil ullam dolores saepe voluptas eius! Non a beatae accusantium? Illum accusamus vero facilis labore quisquam, dolores et facere at! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores nisi quibusdam sequi dolorem soluta repellat iusto doloremque pariatur amet voluptatem ipsa tempora accusantium et, repellendus aliquam? Ratione doloremque reprehenderit natus libero illum officia, nihil aspernatur possimus earum expedita molestiae voluptatum facere delectus inventore nostrum perferendis vel quae, ab harum eius?
                                </div>
                                <div className={css.timing}>
                                    Sent on 14:16
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={css.container2}>
                    <div className={css.containerhead}>
                        <p>Received Enquiry</p>
                    </div>
                    <div className={css.receivedstatus}>
                        <div className={css.enquiryitem}>
                            <div className={css.enquiryprofilepic}>
                                <div className={css.roundprofdiv}>
                                    <img src={img} alt="" />
                                </div>
                            </div>
                            <div className={css.enquiryinfo}>
                                <div className={css.enquiryusername}>
                                    <p>
                                        Karandeep Singh
                                    </p>
                                </div>
                                <div className={css.enquirymessage}>
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, quasi? Nihil ullam dolores saepe voluptas eius! Non a beatae accusantium? Illum accusamus vero facilis labore quisquam, dolores et facere at! Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur commodi enim fugiat, ipsam autem vitae eaque in? Incidunt nam natus id, eveniet sunt nobis rem omnis ex amet corrupti dolore assumenda, cum dolores, ratione illum. Dicta id voluptatem ad saepe molestias sequi in recusandae, facilis, harum sit officiis culpa vitae.
                                </div>
                                <div className={css.timing}>
                                    Received on 17:47
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
