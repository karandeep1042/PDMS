import React from 'react'
import css from './assets/css/accountinfo.module.css'
export default function Accountinfo() {
    return (
        <div className={css.maincontainer}>
            <div className={css.containerhead}>
                <p>Account Info</p>
            </div>
            <div className={css.containercontent}>
                <div className={css.profileupdate}>
                    <div className={css.profilelogoparent}>
                        <div className={css.profilelogo}>
                            <i class="fa-solid fa-user"></i>
                        </div>
                        <div className={css.changeprofilepicbtn}>
                            <p>Change Pic</p>
                        </div>
                    </div>
                    <div className={css.userdetailbox}>
                        <div className={css.profilename}>
                            <p>Karandeep singh</p>
                        </div>
                        <div className={css.profileemail}>
                            <p>ks1895304@gmail.com</p>
                        </div>
                        <div className={css.profileno}>
                            <p>+91 9372807896</p>
                        </div>
                    </div>
                </div>
                <div className={css.updategeneralinfo}>
                    <div className={css.detailcontent}>
                        <div className={css.detailitemhead}>
                            <p>Update Info</p>
                        </div>
                        <div className={css.detailitem}>
                            <div className={css.detailhead}>
                                <p>Username : </p>
                            </div>
                            <div className={css.detailvalue}>
                                <input type='text' value='karan2356' />
                                <i class="fa-solid fa-pencil"></i>
                            </div>
                        </div>
                        <div className={css.detailitem}>
                            <div className={css.detailhead}>
                                <p>Email : </p>
                            </div>
                            <div className={css.detailvalue}>
                                <input type='text' value='ks1895304@gmail.com' />
                                <i class="fa-solid fa-pencil"></i>
                            </div>
                        </div>
                        <div className={css.detailitem}>
                            <div className={css.detailhead}>
                                <p>Phone no : </p>
                            </div>
                            <div className={css.detailvalue}>
                                <input type='text' value='+91 9372807896' />
                                <i class="fa-solid fa-pencil"></i>
                            </div>
                        </div>
                        <div className={css.accinfosavechangesbtn}>
                        <p>Save Changes</p>
                    </div>
                    </div>
                    <div className={css.detailcontent}>
                        <div className={css.detailitemhead}>
                            <p>Change Password</p>
                        </div>
                        <div className={css.detailitem}>
                            <div className={css.detailhead}>
                                <p>Enter old Password : </p>
                            </div>
                            <div className={css.detailvalue}>
                                <input type='text' placeholder='Old Password' />
                            </div>
                        </div>
                        <div className={css.detailitem}>
                            <div className={css.detailhead}>
                                <p>Enter New Password</p>
                            </div>
                            <div className={css.detailvalue}>
                                <input type='text' placeholder='New Password' />
                            </div>
                        </div>
                        <div className={css.detailitem}>
                            <div className={css.detailhead}>
                                <p>Confirm Password </p>
                            </div>
                            <div className={css.detailvalue}>
                                <input type='text' placeholder='Re-enter Password' />
                            </div>
                        </div>
                    <div className={css.accinfosavechangesbtn}>
                        <p>Save Changes</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
